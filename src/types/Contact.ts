// TODO make some fields non-null (adapt server schema first)
interface Contact {
  id: string
  firstName: string | null
  lastName: string | null
  email: string | null
  phoneNumber: string | null
}

export default Contact
