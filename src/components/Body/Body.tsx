import React from 'react'
import { Paragraph } from '../Paragraph/Paragraph'
import styles from './Body.module.scss'
import { Advantages } from '../Advantages/Advantages'
import { Cleanings } from '../Cleanings/Cleanings'
import { Preparings } from '../Preparings/Preparings'
import { Filter } from '../FIlter/Filter'

export const Body = () => {
  return (
    <div className={styles.body}>
      <Paragraph name="Why exactly my services?" />
      <Advantages />
      <Cleanings />
      <Paragraph name="What you need to prepare for me" />
      <Preparings />
      <Paragraph name="Filter" />
      <Filter />
      <Paragraph name="Schedule" />
      <></>
      <Paragraph name="Reviews" />
    </div>
  )
}
