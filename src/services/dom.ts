const BREAKPOINTS = {
  xxs: 325,
  xs: 425,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
}

const isClient = () => typeof window !== 'undefined'

export { BREAKPOINTS,isClient }
