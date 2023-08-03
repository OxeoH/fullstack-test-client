'use client'
import { AuthForm } from '@/components/AuthForm/AuthForm'
import styles from './page.module.css'
import { Header } from '@/components/Header/Header'
import { Body } from '@/components/Body/Body'
import { GetServerSidePropsContext } from 'next'
import { useState } from 'react'
import { checkIsAuth } from '@/utils/checkIsAuth'
import { OrderProvider } from '@/context/OrderProvider'

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const authProps = await checkIsAuth(ctx)

  if ('openAuth' in authProps) {
    return authProps.openAuth
  }
}

export default function Home() {
  return (
    <OrderProvider>
      <main className={styles.main}>
        {/* <AuthForm /> */}
        <Header />
        <Body />
      </main>
    </OrderProvider>
  )
}
