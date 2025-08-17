import React, { useState } from 'react'

import { clsx } from 'clsx'

import Radio from './Radio'
import styles from './RadioGroup.module.scss'

interface RadioGroupProps {
  title: string
  options: { label: string; value: string }[]
  defaultValue?: string
  disabled?: boolean
  onChange: (selectedValue: string) => void
  className?: string
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  title,
  options,
  defaultValue = '',
  disabled = false,
  onChange,
  className,
}) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue)

  const handleChange = (value: string) => {
    setSelectedValue(value)
    onChange(value)
  }

  return (
    <div className={clsx(styles.radioGroup, className)}>
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

RadioGroup.displayName = 'RadioGroup'

export default RadioGroup
export type { RadioGroupProps }
