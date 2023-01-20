// New file, TODO implement
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import myConfigureStore from './configureStore'
// import todosReducer from '../features/todos/todosSlice'
import { settingsReducer } from '../features/settings/settingsSlice'

// TODO implement
// export const storeNew = configureStore({
//   reducer: {
//     settings: settingsReducer
//     // todos: todosReducer,
//     // filters: filtersReducer
//   }
// })

// TODO remove
export const store = myConfigureStore()

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
