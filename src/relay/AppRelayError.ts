export default class AppRelayError extends Error {
  errors: unknown[]

  constructor(m: string, errors: unknown[]) {
    super(m)
    this.errors = errors

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, AppRelayError.prototype)
  }
}
