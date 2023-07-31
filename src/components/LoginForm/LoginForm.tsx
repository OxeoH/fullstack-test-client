'use client'
import React, { useState } from 'react'
import styles from './LoginForm.module.scss'
import OpenedEye from '../../../public/assets/icons/eye-alt-svgrepo-com.svg'
import ClosedEye from '../../../public/assets/icons/eye-slash-alt-svgrepo-com.svg'

export const LoginForm = () => {
  const emptyForm = { email: '', password: '' }

  const [view, setView] = useState(false)
  const [loginForm, setLoginForm] = useState(emptyForm)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoginForm(emptyForm)
    alert('ok!')
  }

  return (
    <div className={styles.wrapper}>
      <form action="" onSubmit={e => handleSubmit(e)} className={styles.form}>
        <div className={styles.fields}>
          <input
            type="text"
            value={loginForm.email}
            onChange={e => setLoginForm({ ...loginForm, email: e.target.value })}
            placeholder="Email"
          />
          <div className={styles.password}>
            <input
              type={view ? 'text' : 'password'}
              value={loginForm.password}
              onChange={e => setLoginForm({ ...loginForm, password: e.target.value })}
              placeholder="Password"
            />
            <div onClick={() => setView(!view)} className={styles.view}>
              {view ? <OpenedEye /> : <ClosedEye />}
            </div>
          </div>
        </div>
        <input type="submit" title="Send" value="Send" className={styles.submit} />
      </form>
    </div>
  )
}
