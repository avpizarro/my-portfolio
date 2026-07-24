# Nextjs and Sanity Portfolio

This is a redesign of my portfolio after a trip to Cali, Colombia. It is inspired by the [Museo La Tertulia](https://museolatertulia.com/) website. The app is built with Next.js and includes Projects, About, and Tech Stack sections, a contact form built with KwesForms, and an AI chatbot that answers questions about my work.

The website is hosted on Vercel, and the data is managed in Sanity CMS.

## Portfolio Chatbot

The floating chatbot is a knowledge-grounded assistant built with the Anthropic Claude API. It answers questions about my background, skills, projects, and availability using the Markdown files in [`data`](./data) as its knowledge base.

### How It Works

- A responsive React chat interface is available on every page.
- The Next.js API route loads `about.md`, `projects.md`, `skills.md`, and `contact.md` on the server for each request.
- A system prompt instructs Claude to answer only from this portfolio knowledge base and redirect unrelated questions.
- Claude Haiku generates the response, which is streamed to the browser using Server-Sent Events for immediate feedback.
- The interface renders Markdown responses, keeps the latest 20 messages as conversation context, and provides loading and error states.

## Local Setup

1. Install the dependencies:

   ```bash
   npm install
   ```

2. Copy the environment-variable template:

   ```bash
   cp .env.example .env.local
   ```

3. Create an API key in the [Claude Platform](https://platform.claude.com/settings/keys), then replace the placeholder in `.env.local`:

   ```env
   ANTHROPIC_API_KEY=your_anthropic_api_key_here
   ```

   Keep the real key in `.env.local`. This file is ignored by Git and must not be committed.

4. Start the development server:

   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## Links

Deployed app: https://my-portfolio-avpizarro.vercel.app  

Github: https://github.com/avpizarro/my-portfolio.git

## Technologies Used

- [Next.js](https://nextjs.org) - The React framework for production
- [Sanity](https://www.sanity.io) - The platform for structured content
- [Anthropic Claude API](https://platform.claude.com/docs/en/home) - Powers the portfolio chatbot
- [React Markdown](https://github.com/remarkjs/react-markdown) - Renders chatbot responses
- [Vercel](https://vercel.com) - The platform for deploying web projects
- [KwesForms](https://kwesforms.com) - Cloud-based platform for creating forms

![PortfolioTop](./public/Readme%20Images/Portfolio.png)
![PortfolioBottom](./public/Readme%20Images/Portfolio%202.png)
