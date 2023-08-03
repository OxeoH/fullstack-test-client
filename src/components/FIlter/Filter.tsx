import React from 'react'
import styles from './Filter.module.scss'
import { InfoBlock } from '../InfoBlock/InfoBlock'
import { FilterItem } from './FilterItem/FilterItem'
import { Input } from '../UI/input/Input'

const filters = [
  { title: 'frequency', values: ['one-time cleaning', 'twice a week', 'every week'] },
  { title: 'allergy', values: ['no allergies', 'cat allergy', 'dog allergy'] },
  {
    title: 'cleaning',
    values: ['regular cleaning', 'window cleaning', 'after repairing', 'after relocation'],
  },
]

export const Filter = () => {
  return (
    <InfoBlock>
      <div className={styles.filters}>
        {filters.map((filter, index) => (
          <FilterItem key={index} filter={filter} />
        ))}
        <div className={styles.filter}>
          <div className={styles.title}>
            <h3>address</h3>
          </div>

          <div className={styles.input}>
            <Input
              type="text"
              value={''}
              onChange={() => {}}
              placeholder="Address"
              isLight={true}
              style={{ padding: '1rem 3rem 1rem 1rem' }}
            />
          </div>
        </div>
        <div className={styles.search}>
          <button>Search</button>
        </div>
      </div>
    </InfoBlock>
  )
}
