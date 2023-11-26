import { configureStore } from '@reduxjs/toolkit'

import clientStateReducer from '../features/client/clientStateSlice'
import navReducer from '../features/nav/navSlice'
import clientDataReducer from '../features/client/clientDataSlice'

export const store = configureStore({
  reducer: {
    navState: navReducer,
    clientState: clientStateReducer,
    clientData: clientDataReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch