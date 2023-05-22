import { urlJoin, isRelativeUrl } from './utils'

describe('urlJoin tests', () => {
  it('should return url if baseUrl is empty', () => {
    expect(urlJoin('', '/api/v1/')).toEqual('/api/v1/')
  })

  it('should return url if baseUrl is null', () => {
    expect(urlJoin(null, '/api/v1/')).toEqual('/api/v1/')
  })

  it('should return url if url is absolute', () => {
    expect(urlJoin('https://api.github.com', 'https://api.github.com/users')).toEqual('https://api.github.com/users')
  })

  it('should return url if url is protocol relative', () => {
    expect(urlJoin('https://api.github.com', '//api.github.com/users')).toEqual('//api.github.com/users')
  })

  it('should return baseUrl + url if url is relative and baseUrl is absolute', () => {
    expect(urlJoin('https://api.github.com', '/users')).toEqual('https://api.github.com/users')
  })

  it('should return baseUrl + url if url is relative and baseUrl is protocol relative', () => {
    expect(urlJoin('//api.github.com', '/users')).toEqual('//api.github.com/users')
  })

  it('should return baseUrl + url if url is relative and baseUrl is relative', () => {
    expect(urlJoin('/api/v1', '/users')).toEqual('/api/v1/users')
  })
})

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
    // eslint-disable-next-line no-script-url
    expect(isRelativeUrl('javascript:void(0)')).toBeFalsy()
  })
})
