// New file, TODO implement
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import myConfigureStore from './configureStore'
// import todosReducer from '../features/todos/todosSlice'
// import filtersReducer from '../features/filters/filtersSlice'

// TODO implement
// export const store = configureStore({
//   reducer: {
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
