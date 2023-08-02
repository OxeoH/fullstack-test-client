import React from 'react'
import { Paragraph } from '../Paragraph/Paragraph'
import styles from './Body.module.scss'

export const Body = () => {
  return (
    <div className={styles.body}>
      <Paragraph name="Why exactly my services?" />

      {/*  */}
      <Paragraph name="What you need to prepare for me" />
      <Paragraph name="Filter" />
      <Paragraph name="Schedule" />
      <Paragraph name="Reviews" />
    </div>
  )
}
