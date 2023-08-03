import React from 'react'
import styles from './Schedule.module.scss'
import { InfoBlock } from '../InfoBlock/InfoBlock'
import { DayItem } from './DayItem/DayItem'

const days = [
  { dayName: 'monday', times: ['8:00-11:00', '10:30-12:00', '18:00-20:00'] },
  { dayName: 'tuesday', times: ['9:00-12:00', '12:30-15:00', '20:00-22:00'] },
  { dayName: 'wednesday', times: ['8:00-11:00', '10:30-12:00', '18:00-20:00'] },
  { dayName: 'thursday', times: ['9:00-12:00', '12:30-15:00', '20:00-22:00'] },
  { dayName: 'friday', times: ['8:00-11:00', '10:30-12:00', '18:00-20:00'] },
  { dayName: 'saturday', times: ['9:00-12:00', '12:30-15:00', '20:00-22:00'] },
  { dayName: 'sunday', times: ['8:00-11:00', '10:30-12:00', '18:00-20:00'] },
]

export const Schedule = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
  return (
    <InfoBlock>
      <div className={styles.schedule}>
        <form className={styles.form} onSubmit={e => handleSubmit(e)}>
          {days.map((value, index) => (
            <DayItem key={index} day={value} />
          ))}
          <div className={styles.search}>
            <input type="submit" value="search" />
          </div>
        </form>
      </div>
    </InfoBlock>
  )
}
