import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './redux/reducers/reducer'
export const store = configureStore({
  reducer: {
    nutrients: counterReducer,
  },
})
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch