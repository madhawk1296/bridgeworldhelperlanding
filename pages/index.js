import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Landing from '../components/Landing'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bridgeworld Helper</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Landing />
    </div>
  )
}
