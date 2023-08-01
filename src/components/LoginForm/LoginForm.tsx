'use client'
import React, { useState } from 'react'
import styles from './LoginForm.module.scss'
import { Input } from '../UI/input/Input'
import { LoginFormDto } from '../../../api/dto/auth.dto'
import * as Api from '../../../api'
import { setCookie } from 'nookies'

export const LoginForm = () => {
  const emptyForm = { email: '', password: '' }
  const [loginForm, setLoginForm] = useState<LoginFormDto>(emptyForm)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const { token } = await Api.auth.login(loginForm)
      setLoginForm(emptyForm)
      setCookie(null, '_token', token, { path: '/' })
      alert('Authorized successfully!')
    } catch (e) {
      console.log('LoginForm', e)
      alert('Error!')
    }
  }

  const handleChange = (field: string, value: string) => {
    setLoginForm({ ...loginForm, [field]: value })
  }

  return (
    <div className={styles.wrapper}>
      <form action="" onSubmit={e => handleSubmit(e)} className={styles.form}>
        <div className={styles.fields}>
          <Input
            value={loginForm.email}
            onChange={value => handleChange('email', value)}
            placeholder="Email"
          />
          <Input
            type="password"
            value={loginForm.password}
            onChange={value => handleChange('password', value)}
            placeholder="Password"
          />
        </div>
        <input type="submit" title="Send" value="Send" className={styles.submit} />
      </form>
    </div>
  )
}
