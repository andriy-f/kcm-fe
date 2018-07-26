export default class RelayError extends Error {
  errors: any[]

  constructor(m: string, errors: any[]) {
    super(m)
    this.errors = errors

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, RelayError.prototype)
  }
}
