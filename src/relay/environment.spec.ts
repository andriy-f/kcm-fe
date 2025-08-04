import { createEnvironment } from './environment'
import { describe, it, expect } from 'vitest'

describe('Relay Env tests', () => {
  it('initialized', () => {
    expect(createEnvironment).toBeTruthy()
  })
})
