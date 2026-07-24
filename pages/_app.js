import '../styles/globals.css';
import Chatbot from '../components/Chatbot';

// Import Styles and fonts
import { Archivo } from "next/font/google"

// Define the font variables as per next/font requirements
const archivo = Archivo({ weight: ['400', '500'], subsets: ['latin'], variable: '--archivo-font' })

export default function App({ Component, pageProps })
{
  return (
    <>
      <div className={archivo.variable}>
        <Component {...pageProps} />
        <Chatbot />
      </div>
    </>
  )
}
