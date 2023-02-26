// // Components
// import * as Button from '@IndieCampers/website-sdk/dist/Button'
// import * as Typography from '@IndieCampers/website-sdk/dist/Typography'
// // Icon
// import HappyFace from '@IndieCampers/website-sdk/icons/system/happy-face.svg'
// import Search from '@IndieCampers/website-sdk/icons/system/search.svg'
// import { render } from '@testing-library/react'

// import { FeedbackMessage } from './FeedbackMessage'

// jest.mock('@IndieCampers/website-sdk/dist/Typography', () => {
//   return {
//     __esModule: true,
//     default: jest.fn(),
//   }
// })
// jest.mock('@IndieCampers/website-sdk/dist/Button', () => {
//   return {
//     __esModule: true,
//     default: jest.fn(),
//   }
// })

// const mockTypography = jest.mocked(Typography.default)
// const mockButton = jest.mocked(Button.default)

// describe('FeedbackMessage', () => {
//   beforeEach(() => jest.clearAllMocks())

//   test('renders properly', () => {
//     const view = render(
//       <FeedbackMessage
//         icon={<HappyFace />}
//         title="No Trips... Yet!"
//         subtitle="We know that you love vacations like us, so why dont you start searching for your next adventure right now?"
//         buttonIcon={<Search />}
//         buttonText="Search Now"
//         buttonAction={jest.fn()}
//       />
//     ).baseElement
//     expect(view).toMatchSnapshot()
//     expect(mockButton).toBeCalledTimes(1)
//     expect(mockTypography).toBeCalledTimes(2)
//   })
// })
export {}
