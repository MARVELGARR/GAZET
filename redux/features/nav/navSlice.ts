import { createSlice } from '@reduxjs/toolkit'


interface navState{
    value: boolean;
}

const initialState: navState = {
    value: false,
}

export const navSlice = createSlice({
    name: 'navState',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        changeNavState: (state) => {
            state.value = !state.value
        },
    }
})
  
export const { changeNavState } = navSlice.actions
  
  // Other code such as selectors can use the imported `RootState` type


export default navSlice.reducer