import Anthropic from '@anthropic-ai/sdk';
const loadDocuments = require('../../lib/loadDocuments');

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

// Swap to 'claude-sonnet-4-6' for more nuanced answers at higher cost
const MODEL = 'claude-haiku-4-5-20251001';

function buildSystemPrompt(documents) {
  return `You are the unofficial assistant for Alejandra Valdes Pizarro's portfolio. You're clever, warm, a little bit snarky in the best way, and genuinely love talking about code and creativity.

You know everything about Alejandra because the information is right here:

===== PORTFOLIO KNOWLEDGE BASE =====
${documents}
===== END OF KNOWLEDGE BASE =====

RULES:
- Answer questions about Alejandra using only the knowledge base above. Don't invent details not present there.
- If asked something you don't know, say so with personality: "Ha! That's not in my briefing — you could ask her directly."
- If asked to do something unrelated to the portfolio (write an essay, explain quantum physics, etc.), redirect warmly: "I'm really a one-person show specialist here — my whole world is Alejandra's portfolio. What can I tell you about that?"
- Be concise. Two or three sentences is usually enough.
- Light markdown is fine (bold for emphasis, backticks for tech terms) since it will be rendered.
- You can use the occasional emoji if it fits the tone.
- Refer to Alejandra in third person ("she", "her") — you're her assistant, not her.
- If someone seems interested in hiring or collaborating, be enthusiastic and point them to the contact form or Calendly link.`;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { messages } = req.body;
  if (!Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: 'messages array is required' });
  }

  // Cap history to last 20 messages to stay well under token limits
  const trimmedMessages = messages.slice(-20);

  let documents;
  try {
    documents = loadDocuments();
  } catch (err) {
    console.error('Failed to load documents:', err);
    return res.status(500).json({ error: 'Failed to load knowledge base' });
  }

  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache, no-transform');
  res.setHeader('Connection', 'keep-alive');
  res.flushHeaders();

  try {
    const stream = anthropic.messages.stream({
      model: MODEL,
      max_tokens: 1024,
      system: buildSystemPrompt(documents),
      messages: trimmedMessages,
    });

    for await (const chunk of stream) {
      if (
        chunk.type === 'content_block_delta' &&
        chunk.delta.type === 'text_delta'
      ) {
        res.write(`data: ${JSON.stringify({ text: chunk.delta.text })}\n\n`);
      }
    }

    res.write('data: [DONE]\n\n');
    res.end();
  } catch (err) {
    console.error('Anthropic stream error:', err);
    res.write('data: [ERROR]\n\n');
    res.end();
  }
}
