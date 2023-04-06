import { Archivo } from "next/font/google"
import Head from "next/head"
import { client } from "../client"
import { useState, useLayoutEffect } from "react"

import Intro from "../components/Intro/Intro"
import Hero from "../components/Hero/Hero"
import Desktop from "@/components/Desktop/Desktop"
import DesktopMobile from "@/components/Desktop/DesktopMobile"
import Features from "@/components/Features/Features"
import Experience from "@/components/Experience/Experience"
import Mobile from "@/components/Mobile/Mobile"
import Privacy from "@/components/Privacy/Privacy"
import Copy from "@/components/Copy/Copy"
import Monkey from "@/components/Monkey/Monkey"
import Email from "@/components/Email/Email"
import Loader from "@/components/Loader/Loader"
import Nav from "@/components/Intro/Nav"

const archivo = Archivo({ subsets: ["latin"], axes: ["wdth"] })

export default function Home({ data }) {
  const [isMobile, setIsMobile] = useState(false)

  useLayoutEffect(() => {
    if (window.innerWidth < 800) {
      setIsMobile(true)
    }
  })

  return (
    <>
      <Head>
        <title>CTRL</title>
        <meta
          name="description"
          content="Introducing CTRL – a secure, feature-rich platform that makes centralized exchanges a thing of the past and brings you a lot more than a traditional dex."
        />
        <meta property="og:image" content="https://i.imgur.com/29mCnUt.jpeg" />
        <meta
          name="twitter:image"
          content="https://i.imgur.com/29mCnUt.jpeg"
        ></meta>
      </Head>
      <Loader />
      <Intro data={data[0].intro} />
      {isMobile && (
        <Nav logo="/logo/logo-dark.svg" data={data[0].intro} theme="dark" />
      )}
      <Hero data={[data[0].intro, data[0].hero]} />
      {!isMobile && <Desktop data={data[0].desktop} />}
      {isMobile && <DesktopMobile data={data[0].desktop} />}
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
