import React from 'react'

import styles from './RadioGroup.module.scss'

interface RadioProps {
  label: string
  value: string
  checked?: boolean
  disabled?: boolean
  onChange: (value: string) => void
}

const Radio: React.FC<RadioProps> = ({ label, value, checked = false, disabled = false, onChange }) => {
  const handleChange = () => {
    if (!disabled) {
      onChange(value)
    }
  }

  return (
    <label className={`${styles.radio} ${disabled ? styles['radio--disabled'] : ''}`}>
      <input type="radio" value={value} checked={checked} disabled={disabled} onChange={handleChange} />
      <span>{label}</span>
    </label>
  )
}

export default Radio
