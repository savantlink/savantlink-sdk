import styles from './NumberKeypad.module.scss'
import KeypadKey, { KeypadKeys } from '../KeypadKey'

type NumberKeypadProps = {
  onKeyPressed: (keyPressed: KeypadKeys) => void
}

const NumberKeypad = ({ onKeyPressed }: NumberKeypadProps) => {
  const rows: (keyof typeof KeypadKeys)[][] = [
    Object.keys(KeypadKeys).slice(0, 3) as (keyof typeof KeypadKeys)[],
    Object.keys(KeypadKeys).slice(3, 6) as (keyof typeof KeypadKeys)[],
    Object.keys(KeypadKeys).slice(6, 9) as (keyof typeof KeypadKeys)[],
    Object.keys(KeypadKeys).slice(9, 12) as (keyof typeof KeypadKeys)[],
  ]

  return (
    <div className={styles.keypad}>
      {rows.map((row, idx) => (
        <div className={styles.keypadRow} key={idx}>
          {row.map((keyPadNumber) => (
            <KeypadKey
              keypadKey={KeypadKeys[keyPadNumber]}
              key={keyPadNumber}
              onKeyPressed={onKeyPressed}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

NumberKeypad.displayName = 'NumberKeypad'

export default NumberKeypad
export type { NumberKeypadProps }
