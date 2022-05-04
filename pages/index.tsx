import type { NextPage } from "next"
import Head from "next/head"
import Header from "../components/Header"
import Content from "../components/Content"
import Footer from "../components/Footer"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Francis Gette UI Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="Francis Gette portfolio" content="Web site showing Francis Gette work." />
      </Head>
      <Header />
      <main>
        <Content />
      </main>
      <Footer />
    </>
  )
}

export default Home
