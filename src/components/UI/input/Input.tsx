import React, { HTMLInputTypeAttribute, useState } from 'react'
import styles from './Input.module.scss'
import OpenedEye from '../../../../public/assets/icons/eye-alt-svgrepo-com.svg'
import ClosedEye from '../../../../public/assets/icons/eye-slash-alt-svgrepo-com.svg'

export const Input = ({
  onChange,
  value,
  placeholder,
  wrong = false,
  type = 'text',
}: {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  wrong?: boolean
  type?: HTMLInputTypeAttribute
}) => {
  const [view, setView] = useState(false)
  return (
    <div className={styles.password}>
      <input
        type={type !== 'password' ? type : view ? 'text' : 'password'}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder ?? ''}
        style={{ border: wrong ? '2px inset #7b1111' : 'none' }}
      />
      {type === 'password' && (
        <div onClick={() => setView(!view)} className={styles.view}>
          {view ? <OpenedEye /> : <ClosedEye />}
        </div>
      )}
    </div>
  )
}
