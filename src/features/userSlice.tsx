import { RootState } from "../app/store"

const currentUser = (state = {}, action: Action) => {
  switch (action.type) {
    case LOGIN_DONE:
      let respData = action.payload
      return {
        ...respData.userData,
        tokenExpiresOn: action.payload.tokenExpiresOn
      }
    case LOGOFF_DONE:
      return {}
    default:
      return state
  }
}

const

export const selectUser = (state: RootState) => state.
