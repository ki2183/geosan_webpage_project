import { RootState } from '../STORE/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: number = 0

export const technologyPageSlice = createSlice({
  name: 'technologyPage',
  initialState,
  reducers: {
    nav_page_handler:(state, action: PayloadAction<number>) => {
        state = action.payload
    }
  }
})

export const { nav_page_handler } = technologyPageSlice.actions

export const selectNavHeight = (state: RootState) => state.technologyPage

export default technologyPageSlice.reducer