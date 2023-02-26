/* eslint-disable @typescript-eslint/no-explicit-any */
import KeypadKey, { KeypadKeys } from './KeypadKey'
import styles from './NumberKeypad.module.scss'

type NumberKeypadProps = {
  onKeyPressed: (keyPressed: KeypadKeys) => void
}

const NumberKeypad = ({ onKeyPressed }: NumberKeypadProps) => {
  const rows: string[][] = [
    [...Object.keys(KeypadKeys).slice(0, 3)],
    [...Object.keys(KeypadKeys).slice(3, 6)],
    [...Object.keys(KeypadKeys).slice(6, 9)],
    [...Object.keys(KeypadKeys).slice(9, 12)],
  ]

  return (
    <div className={styles.keypad}>
      {rows.map(
        (
          row: any,
          idx: number
        ) => (
          <div className={styles.keypadRow} key={idx}>
            {row.map((keyPadNumber: keyof typeof KeypadKeys) => {
              return (
                <KeypadKey
                  keypadKey={KeypadKeys[keyPadNumber]}
                  key={keyPadNumber}
                  onKeyPressed={(keyPressed: KeypadKeys) => onKeyPressed(keyPressed)}
                />
              )
            })}
          </div>
        )
      )}
    </div>
  )
}

NumberKeypad.displayName = 'NumberKeypad'

export default NumberKeypad
export type { NumberKeypadProps }
