import { AuthForm } from '@/components/AuthForm/AuthForm'
import styles from './page.module.css'
import Head from 'next/head'
import { Header } from '@/components/Header/Header'
import { Body } from '@/components/Body/Body'

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <AuthForm /> */}
      <Header />
      <Body />
    </main>
  )
}
