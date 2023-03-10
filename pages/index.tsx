import Head from 'next/head'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { HomeContent } from '../components/HomeContent/HomeContent'

export default function Home() {
  return (
    <>
      <Head>
        <title>Jordan Gopie</title>
        <meta name="description" content="Portfolio and personal website of Jordan Gopie" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HomeContent />
      </main>
    </>
  )
}
