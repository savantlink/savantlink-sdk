/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from './Keypad.module.scss'
import KeypadKey, { KeypadKeys } from '../KeypadKey'

type KeypadProps = {
  onKeyPressed: (keyPressed: KeypadKeys) => void
}

const Keypad = ({ onKeyPressed }: KeypadProps) => {
  const rows: string[][] = [
    [...Object.keys(KeypadKeys).slice(0, 3)],
    [...Object.keys(KeypadKeys).slice(3, 6)],
    [...Object.keys(KeypadKeys).slice(6, 9)],
    [...Object.keys(KeypadKeys).slice(9, 12)],
  ]

  // const handleKeypadKeyPress = (keyPadKey: KeypadKeys): void => {
  //   switch (keyPadKey) {
  //     case KeypadKeys.CLEAR:
  //       return setKeypadEntries('')
  //     case KeypadKeys.BKSP:
  //       return setKeypadEntries(keypadEntries.slice(0, -1))
  //     default:
  //       setKeypadEntries((keypadEntries + keyPadKey).toString())
  //       break
  //   }
  // }

  return (
    <div className={styles.keypad}>
      {rows.map(
        (
          row: any,
          idx: number // TODO: resolve type
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

Keypad.displayName = 'Keypad'

export default Keypad
export type { KeypadProps }
