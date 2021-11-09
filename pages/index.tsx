import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={ styles.container }>
      <Head>
        <title>Mikko&lsquo;s stuff</title>
        <meta name="description" content="foo" />
      </Head>

      <h1>Hello World</h1>

    </div>
  )
}

export default Home
