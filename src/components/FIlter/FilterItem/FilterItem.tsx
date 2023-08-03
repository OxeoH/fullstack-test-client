'use client'
import React, { useState } from 'react'
import styles from './FilterItem.module.scss'

export const FilterItem = ({ filter }: { filter: { title: string; values: string[] } }) => {
  const [active, setactive] = useState(false)
  return (
    <div className={styles.filter}>
      <div className={styles.title}>
        <h3>{filter.title}</h3>
      </div>

      <ul className={styles.options}>
        {filter.values.map((value, index) => (
          <li key={index} className={active ? styles.selected : styles.default}>
            <button onClick={() => setactive(!active)}>{value}</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
