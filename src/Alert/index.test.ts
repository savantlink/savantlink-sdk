import * as Index from './index'

describe('Alert index', () => {
  it('should have exports', () => {
    expect(typeof Index).toBe('object')
  })

  it('should not have undefined exports', () => {
    Object.values(Index).forEach((exportValue) => expect(!!exportValue).toBe(true))
  })
})
