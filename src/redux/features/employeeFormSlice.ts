import { createSlice } from "@reduxjs/toolkit";

const employeeFormSlice = createSlice({
    name: 'employeeForm',
    initialState: {
        firstName: '',
        lastName: '',
        birthDate: '',
        startDate: '',
        street: '',
        city: '',
        state: '',
        zipCode: '',
        department: '',
    },
    reducers: {
        setFormData: (state, action) => {
            return { ...state, ...action.payload }
        }
    }
})

export const { setFormData } = employeeFormSlice.actions
export default employeeFormSlice.reducer