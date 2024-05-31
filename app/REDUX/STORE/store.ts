import { configureStore } from '@reduxjs/toolkit'
import navHeightSlice from '../SLICE/navHeightSlice'

export const store = configureStore({
  reducer: {
    navHeight:navHeightSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch