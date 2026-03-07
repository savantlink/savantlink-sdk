import { FC } from 'react'

import { clsx } from 'clsx'

import styles from './RadioGroup.module.scss'

interface RadioProps {
  label: string
  value: string
  checked?: boolean
  disabled?: boolean
  onChange: (value: string) => void
}

const Radio: FC<RadioProps> = ({ label, value, checked = false, disabled = false, onChange }) => (
  <label className={clsx(styles.radio, { [styles['radio--disabled']]: disabled })}>
    <input type="radio" value={value} checked={checked} disabled={disabled} onChange={() => onChange(value)} />
    <span>{label}</span>
  </label>
)

Radio.displayName = 'Radio'

export default Radio
export type { RadioProps }
