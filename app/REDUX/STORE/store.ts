import { configureStore } from '@reduxjs/toolkit'
import navHeightSlice from '../SLICE/navHeightSlice'
import technologyPageSlice from '../SLICE/technologyPageSlice'

export const store = configureStore({
  reducer: {
    navHeight:navHeightSlice,
    technologyPage:technologyPageSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch