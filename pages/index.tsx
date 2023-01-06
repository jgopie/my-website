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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
        <link href="https://fonts.googleapis.com/css2?family=Explora&family=Inconsolata:wght@400;600;900&display=swap" rel="stylesheet" />
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Explora&family=Inconsolata:wght@400;600;900&display=swap');
        </style>
      </Head>
      <main>
        <HomeContent />
      </main>
    </>
  )
}
