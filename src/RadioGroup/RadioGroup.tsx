import React, { useState } from 'react'

import Radio from './Radio'
import styles from './RadioGroup.module.scss'

interface RadioGroupProps {
  title: string
  options: { label: string; value: string }[]
  defaultValue?: string
  disabled?: boolean
  onChange: (selectedValue: string) => void
}

const RadioGroup: React.FC<RadioGroupProps> = ({ title, options, defaultValue = '', disabled = false, onChange }) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue)

  const handleChange = (value: string) => {
    setSelectedValue(value)
    onChange(value)
  }

  return (
    <div className={styles.radioGroup}>
      <label className={styles.title}>{title}</label>
      {options.map((option) => (
        <Radio
          key={option.value}
          label={option.label}
          value={option.value}
          checked={selectedValue === option.value}
          disabled={disabled}
          onChange={handleChange}
        />
      ))}
    </div>
  )
}

export default RadioGroup
export type { RadioGroupProps }
