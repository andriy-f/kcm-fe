import {createEnvironment} from './environment'

describe('Relay Env tests', () => {
  it('initialized', () => {
    expect(createEnvironment).toBeTruthy()
  })
})
