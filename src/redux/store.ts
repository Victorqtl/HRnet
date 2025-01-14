import { configureStore } from '@reduxjs/toolkit'
import employeeFormReducer from '@/redux/features/employeeFormSlice'

export const store = configureStore({
  reducer: {
    employeeForm: employeeFormReducer,
  }
})

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']