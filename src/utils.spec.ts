import { isRelativeUrl } from './utils'

describe('isRelativeUrl tests', () => {
  it('should return true for relative urls', () => {
    expect(isRelativeUrl('/api/v1/')).toBeTruthy()
  })

  it('should return false for absolute urls', () => {
    expect(isRelativeUrl('https://api.github.com/users')).toBeFalsy()
  })

  it('should return false for protocol relative urls', () => {
    expect(isRelativeUrl('//api.github.com/users')).toBeFalsy()
  })

  it('should return false for data urls', () => {
    expect(isRelativeUrl('data:text/plain;base64,SGVsbG8sIFdvcmxkIQ%3D%3D')).toBeFalsy()
  })

  it('should return false for mailto urls', () => {
    expect(isRelativeUrl('mailto:abs@google.com')).toBeFalsy()
  })

  it('should return false for tel urls', () => {
    expect(isRelativeUrl('tel:+1-816-555-1212')).toBeFalsy()
  })

  it('should return false for javascript urls', () => {
    expect(isRelativeUrl('javascript:void(0)')).toBeFalsy()
  })
})
