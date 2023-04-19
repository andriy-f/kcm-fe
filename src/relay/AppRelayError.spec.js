import AppRelayError from './AppRelayError'

describe('RelayError tests', () => {
  it('type tests', () => {
    const err = new AppRelayError('some relay error', [{ message: 'mess1' }, { message: 'mess2' }])
    expect(err instanceof AppRelayError).toBe(true)
    expect(err instanceof Error).toBe(true)
  })

  it('field tests', () => {
    const err = new AppRelayError('some relay error', [{ message: 'mess1' }, { message: 'mess2' }])
    expect(err.message).toBe('some relay error')
    expect(err.errors).toEqual([{ message: 'mess1' }, { message: 'mess2' }])
  })
})
