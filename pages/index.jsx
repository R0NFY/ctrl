import { Archivo } from "next/font/google"
import Head from "next/head"
import { client } from "../client"

import Intro from "../components/Intro/Intro"
import Hero from "../components/Hero/Hero"
import Desktop from "@/components/Desktop/Desktop"
import Features from "@/components/Features/Features"
import Experience from "@/components/Experience/Experience"
import Mobile from "@/components/Mobile/Mobile"
import Privacy from "@/components/Privacy/Privacy"
import Copy from "@/components/Copy/Copy"
import Monkey from "@/components/Monkey/Monkey"
import Email from "@/components/Email/Email"

const archivo = Archivo({ subsets: ["latin"], axes: ["wdth"] })

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>CTRL</title>
      </Head>
      <Intro data={data[0].intro} />
      <Hero data={[data[0].intro, data[0].hero]} />
      <Desktop data={data[0].desktop} />
      <Features data={data[0].features} />
      <Experience />
      <Mobile data={data[0].mobile} />
      <Privacy />
      <Monkey data={data[0].monkey} />
      <Copy data={data[0].copy} />
      <Email />
      <style jsx global>
        {`
          :root {
            --archivo: ${archivo.style.fontFamily};
          }
        `}
      </style>
    </>
  )
}

export async function getStaticProps() {
  const data = await client.fetch(`*[_type=="page"]`)

  return {
    props: {
      data,
    },
  }
}
