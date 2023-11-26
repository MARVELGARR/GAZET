import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@/redux/store/store'

// Define a type for the slice state
interface ClientStateProps {
  value: boolean
}

// Define the initial state using that type
const initialState: ClientStateProps = {
  value: false,
}

export const clientStateSlice = createSlice({
  name: 'clientState',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    changeState: (state) => {
      state.value = !state.value
    },
  },
})

export const { changeState } = clientStateSlice.actions

// Other code such as selectors can use the imported `RootState` type


export default clientStateSlice.reducer