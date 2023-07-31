'use client'
import React, { useState } from 'react'
import styles from './SignUpForm.module.scss'

export const SignUpForm = () => {
  const [signUpForm, setSignUpForm] = useState({ email: '', password: '' })
  const handleSubmit = () => {
    alert('ok!')
  }
  return (
    <div className={styles.wrapper}>
      <form action="" onSubmit={handleSubmit}>
        <input type="submit" title="Login" className={styles.submit} />
      </form>
    </div>
  )
}
