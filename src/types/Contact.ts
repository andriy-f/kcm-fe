// TODO make some fields non-null (adapt server schema first)
export type Contact = {
  id: string
  firstName: string | null | undefined
  lastName: string | null | undefined
  email: string | null | undefined
  phoneNumber: string | null | undefined
}