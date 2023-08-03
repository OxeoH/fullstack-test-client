import React, { useState } from 'react'
import styles from './DayItem.module.scss'

export const DayItem = ({ day }: { day: { dayName: string; times: string[] } }) => {
  const [active, setActive] = useState(false)
  return (
    <div className={styles.day}>
      <div className={styles.title}>
        <h3>{day.dayName}</h3>
      </div>

      <ul className={styles.times}>
        {day.times.map((time, index) => (
          <li key={index} className={active ? styles.selected : styles.default}>
            <button onClick={() => setActive(!active)}>{time}</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
