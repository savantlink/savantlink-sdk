/* eslint-disable no-unused-vars */
import styles from './KeypadKey.module.scss'

export enum KeypadKeys {
  ONE = '1',
  TWO = '2',
  THREE = '3',
  FOUR = '4',
  FIVE = '5',
  SIX = '6',
  SEVEN = '7',
  EIGHT = '8',
  NINE = '9',
  CLEAR = '🆑',
  ZERO = '0',
  BKSP = '␡',
}

type KeypadKeyProps = {
  keypadKey: KeypadKeys
  onKeyPressed: (keyPressed: KeypadKeys) => void
}

const KeypadKey = ({ keypadKey, onKeyPressed }: KeypadKeyProps) => (
  <div className={styles.keypadKey} data-role="button" onClick={() => onKeyPressed(keypadKey)} tabIndex={0}>
    {keypadKey.toString()}
  </div>
)

KeypadKey.displayName = 'KeypadKey'

export default KeypadKey
export type { KeypadKeyProps }
