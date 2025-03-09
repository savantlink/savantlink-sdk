import React, { useState } from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import OTPInput from './OTPInput'

export default {
  title: 'Molecules/OTPInput',
  component: OTPInput,
  parameters: {
    docs: {
      description: {
        component:
          'OTPInput - This is a custom input field that comprises of multiple input fields usually used for OTP',
      },
    },
  },
} as ComponentMeta<typeof OTPInput>

const Template: ComponentStory<typeof OTPInput> = () => {
  const [otp, setOtp] = useState('')

  const handleOtpChange = (otp: string) => {
    setOtp(otp)
  }
  return (
    <>
      <OTPInput onChange={handleOtpChange} />
      {otp && <p>OTP: {otp}</p>}
    </>
  )
}

export const Default = Template.bind({})
