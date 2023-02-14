import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  nutrients: {}
}

export const counterSlice = createSlice({
  name: 'nutrients',
  initialState,
  reducers: {
    listOfNutrients: {
      reducer(state, action) {
        state.nutrients.push(action.payload)
      },
    },
  }
})
export const { listOfNutrients } = counterSlice.actions
export default counterSlice.reducer
export const selectAllPosts = state => state.nutrients.foods