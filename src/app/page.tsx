import styles from './page.module.css'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Fullstack Test</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Cleaning service created as test task" />
      </Head>
      <main className={styles.main}>Hello world!</main>
    </>
  )
}
