import { SelectHTMLAttributes } from 'react'

import clsx from 'clsx'

import styles from './Select.module.scss'

type SelectProps = {
  selectId: string
  isSuccess?: boolean
  isError?: boolean
  error?: string
  hint?: string
  label?: string
  tooltip?: string
  errorId?: string
  labelId?: string
  hintId?: string
  errorClassName?: string
  labelClassName?: string
  hintClassName?: string
  data: string[]
  onValueChange: () => void
} & Omit<SelectHTMLAttributes<HTMLSelectElement>, 'children'>

const Select = ({
  selectId,
  isSuccess,
  isError,
  error,
  label,
  hint,
  tooltip,
  errorId,
  labelId,
  hintId,
  className,
  errorClassName,
  labelClassName,
  hintClassName,
  data,
  onValueChange,
  ...props
}: SelectProps) => {
  return (
    <div title={tooltip} className={styles.wrapper}>
      {label && (
        <span id={labelId} className={clsx(labelClassName, 'label')}>
          {label}
        </span>
      )}
      <div className={styles.group}>
        <select
          id={selectId}
          name={selectId}
          className={clsx(className, styles.input, {
            [styles.inputError]: isError,
            [styles.inputSuccess]: isSuccess && !isError,
          })}
          aria-invalid={isError}
          onChange={onValueChange}
          {...props}
        >
          {data?.map((item, index) => {
            return (
              <option key={index} value={item}>
                {item}
              </option>
            )
          })}
        </select>
      </div>
      {error && (
        <span id={errorId} className={clsx(errorClassName, styles.error)}>
          {error}
        </span>
      )}
      {!error && hint && (
        <span id={hintId} className={clsx(hintClassName, styles.hint)}>
          {hint}
        </span>
      )}
    </div>
  )
}

export default Select
