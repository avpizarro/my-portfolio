// Import required tools
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';


// Import Styles and fonts
import { Karla, Archivo } from "next/font/google"
import styles from '../styles/Home.module.scss';

// Import components
import { Header, Main, Footer, Project } from "../components/index"
// import ScrollControl from '../components/ScrollControl';
import ScrollContext from '../components/ScrollContext';

// Define the fonts variables as per next/font requirements
const karla = Karla({ weight: ['400', '700'], subsets: ['latin'], variable: '--karla-font' })

const archivo = Archivo({ weight: ['400', '500'], subsets: ['latin'], variable: '--archivo-font' })

export default function Home({ projects })
{
  const [expand, setExpand] = useState(false);

  const onClick = (e) =>
  {
    e.preventDefault();
    setExpand(expand => !expand);
  }

  return (
    <>
      <Head>
        <title>Alejandra Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="shortcut icon" href='/favicon.ico' />
      </Head>
      <ScrollContext>
        <div className={archivo.variable}>
          <div className={styles.text}>
            <Header onClick={onClick} className={expand ? styles.menuExpanded : styles.menuContracted} className1={expand ? styles.menuExpanded : styles.siteBranding} className3={expand ? styles.mastHeadExpanded : styles.mastHead} />
            <Main>
              {projects.map(project => (<Project key={project._id} name={project.name} description={project.description} url={project.url} github={project.github} image={urlFor(project.image.asset).url()} altText={project.altText} />))}
            </Main>
            <Footer />
          </div>
        </div>
      </ScrollContext>
    </>
  )
}

const client = createClient(
  {
    projectId: 'mgub6pfu',
    dataset: 'production',
    apiVersion: '2022-01-24',
    useCdn: false
  }
);

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

export async function getStaticProps()
{
  const projects = await client.fetch(`*[_type == "project"]`);
  return {
    props: {
      projects: projects
    },
    revalidate: 10,
  }
}
