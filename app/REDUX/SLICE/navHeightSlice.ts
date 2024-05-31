import { RootState } from './../STORE/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type nav_height_handler_type = {
    idx:number,
    height:number
}

const initialState: number[] = []

export const navHeightSlice = createSlice({
  name: 'navHeight',
  initialState,
  reducers: {
    nav_height_handler:(state, action: PayloadAction<nav_height_handler_type>) => {
        const {idx,height} = action.payload
        state[idx] = height
    }
  }
})

export const { nav_height_handler } = navHeightSlice.actions

export const selectNavHeight = (state: RootState) => state.navHeight

export default navHeightSlice.reducer