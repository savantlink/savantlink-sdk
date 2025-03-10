/* eslint-disable no-console */
import React, { useState } from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import PhoneInput from './PhoneInput'

export default {
  title: 'Molecules/PhoneInput',
  component: PhoneInput,
  parameters: {
    docs: {
      description: {
        component: 'PhoneInput - This is a custom PhoneInput component',
      },
    },
  },
} as ComponentMeta<typeof PhoneInput>

const Template: ComponentStory<typeof PhoneInput> = () => {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [countryCode, setCountryCode] = useState('+234')

  return (
    <>
      <PhoneInput
        value={phoneNumber}
        onChange={setPhoneNumber}
        onCountryCodeChange={setCountryCode}
        placeholder="Enter your phone number"
        label="Phone Number"
        errorMessage="Please enter a valid 10-digit phone number"
        required
      />
      <p>
        You entered: {countryCode}{phoneNumber}
      </p>
    </>
  )
}

export const Default = Template.bind({})
