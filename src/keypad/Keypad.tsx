/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react'

import styles from './Keypad.module.scss'
import { KeypadKey, KeypadKeys } from './KeypadKey'

// type KeypadProps = {
//   onKeyPressed: (keyPressed: KeypadKeys) => void
// }

const Keypad = () => {
  const [keypadEntries, setKeypadEntries] = React.useState('')

  const rows: string[][] = [
    [...Object.keys(KeypadKeys).slice(0, 3)],
    [...Object.keys(KeypadKeys).slice(3, 6)],
    [...Object.keys(KeypadKeys).slice(6, 9)],
    [...Object.keys(KeypadKeys).slice(9, 12)],
  ]

  const handleKeypadKeyPress = (keyPadKey: KeypadKeys): void => {
    switch (keyPadKey) {
      case KeypadKeys.CLEAR:
        return setKeypadEntries('')
      case KeypadKeys.BKSP:
        return setKeypadEntries(keypadEntries.slice(0, -1))
      default:
        setKeypadEntries((keypadEntries + keyPadKey).toString())
        break
    }
  }

  return (
    <>
      <p>{keypadEntries}</p>
      <div className={styles.keypad}>
        {rows.map((row: any, idx: number) => ( // TODO: resolve type
          <div className={styles.keypadRow} key={idx}>
            {row.map((keyPadNumber: keyof typeof KeypadKeys) => {
              return (
                <KeypadKey
                  keypadKey={KeypadKeys[keyPadNumber]}
                  key={keyPadNumber}
                  //   onKeyPressed={(keyPressed: KeypadKeys) => onKeyPressed(keyPressed)}
                  onKeyPressed={handleKeypadKeyPress}
                />
              )
            })}
          </div>
        ))}
      </div>
    </>
  )
}

export default Keypad
// export type { KeypadProps }

// import { Keypad, KeypadKeys } from './Keypad';

// export class SampleUsage extends React.Component<any, any> {
//   constructor(props: any, state: any) {
//     super(props, state);

//     this.state = {
//       keypadEntries: [],
//     }
//   }

//   private _keypadEntriesAsCurrency = (keypadEntries:string[]): number => {
//     // assumes dollar-like currency with two decimal places.
//     const dollars:string = keypadEntries.join('').slice(0, keypadEntries.join('').length - 2);
//     const cents:string = keypadEntries.join('').slice(-2);
//     const numberArrayAsString = `${dollars}.${cents}`;

//     const number = parseFloat(numberArrayAsString);
//     return isNaN(number) ? 0 : number;
//   }

//   public handleKeypadKeyPress = (keyPadKey: KeypadKeys): void => {
//     if (keyPadKey === KeypadKeys.CLEAR) {
//       this.setState({ keypadEntries: [] });
//       return;
//     }

//     if (keyPadKey === KeypadKeys.BKSP) {
//       let newKeypadEntries:string[] = this.state.keypadEntries;
//       newKeypadEntries.pop();
//       this.setState({ keypadEntries: newKeypadEntries });
//       return;
//     }

//     let newKeypadEntries:string[] = this.state.keypadEntries;
//     newKeypadEntries.push(keyPadKey.toString());
//     this.setState({ keypadEntries: newKeypadEntries });
//   }

//   render(): JSX.Element {
//     return (
//       <div>
//         <div>
//           Input: <strong>{ this._keypadEntriesAsCurrency(this.state.keypadEntries) }</strong>
//         </div>
//         <Keypad
//           onKeyPressed={this.handleKeypadKeyPress}
//         />
//       </div>
//     );
//   }
// }
