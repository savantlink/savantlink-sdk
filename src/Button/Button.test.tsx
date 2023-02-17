import { render } from '@testing-library/react'
import Button from './Button'
import SearchIcon from '@/icons/system/search.svg'

describe('Button', () => {
  test('renders a Button', () => {
    const { getByText } = render(<Button>I&apos;m a button</Button>)
    const buttonElement = getByText(/I'm a button/i).closest('button')
    expect(buttonElement).toBeDefined()
  })

  test('renders the correct Button Size', () => {
    const { container: DefaultButton } = render(<Button>Click me!</Button>)
    const { container: SmallButton } = render(<Button size="sm">Click me!</Button>)
    const { container: LargeButton } = render(<Button size="lg">Click me!</Button>)
    const { container: WideButton } = render(<Button size="wide">Click me!</Button>)

    expect(DefaultButton).toHaveStyle({
      padding: '8 16',
    })

    expect(SmallButton).toHaveStyle({
      padding: '4 8',
    })

    expect(LargeButton).toHaveStyle({
      padding: '16 32',
    })

    expect(WideButton).toHaveStyle({
      padding: '8 32',
    })
  })

  test('renders the correct Button Skin', () => {
    render(<Button>Default</Button>)
    render(<Button skin="flat">Flat</Button>)
    render(<Button skin="solid">Solid</Button>)
    render(<Button skin="outline">Outline</Button>)
    const { baseElement } = render(<Button skin="underline">Underline</Button>)

    expect(baseElement).toMatchSnapshot()
  })

  describe('Make sure Button renders icons correctly', () => {
    test('render button with icon', () => {
      const { container: ButtonWithIcon, getByTestId } = render(
        <Button icon={<SearchIcon data-testid="svgIcon" />}>Click me!</Button>
      )
      const iconElement = getByTestId('svgIcon')

      expect(ButtonWithIcon).toContainElement(iconElement)
    })

    test('render button with trailing icon', () => {
      const { container: ButtonWithIcon, getByTestId } = render(
        <Button icon={<SearchIcon data-testid="svgIcon" />} trailingIcon={<SearchIcon data-testid="trailingSvgIcon" />}>
          Click me!
        </Button>
      )
      const iconElement = getByTestId('svgIcon')
      const trailingIconElement = getByTestId('trailingSvgIcon')

      expect(ButtonWithIcon).toContainElement(iconElement)
      expect(ButtonWithIcon).toContainElement(trailingIconElement)
    })
  })
})
