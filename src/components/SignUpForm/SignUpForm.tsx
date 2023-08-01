'use client'
import React, { useState } from 'react'
import styles from './SignUpForm.module.scss'
import { Input } from '../UI/input/Input'

export const SignUpForm = () => {
  const [signUpForm, setSignUpForm] = useState({ email: '', password: '' })
  const [repeat, setRepeat] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert(signUpForm.email + ' ' + signUpForm.password)
  }
  const handleChange = (field: string, value: string) => {
    setSignUpForm({ ...signUpForm, [field]: value })
  }

  return (
    <div className={styles.wrapper}>
      <form action="" onSubmit={e => handleSubmit(e)} className={styles.form}>
        <div className={styles.fields}>
          <Input
            value={signUpForm.email}
            onChange={value => handleChange('email', value)}
            placeholder="Email"
          />
          <Input
            type="password"
            value={signUpForm.password}
            onChange={value => handleChange('password', value)}
            placeholder="Password"
            wrong={
              repeat !== signUpForm.password && signUpForm.password.length > 0 && repeat.length > 0
            }
          />
          <Input
            type="password"
            value={repeat}
            onChange={value => setRepeat(value)}
            placeholder="Repeat password"
            wrong={
              repeat !== signUpForm.password && signUpForm.password.length > 0 && repeat.length > 0
            }
          />
        </div>
        <input type="submit" title="Send" value="Send" className={styles.submit} />
      </form>
    </div>
  )
}
