import {createSlice} from "@reduxjs/toolkit";
import {EmployeeCompanyType} from "../../types/types";

const initialState = {
    employeeCompany: [
        {
            id: Date.now() + Math.random(),
            isChecked: false,
            lastName: 'Ivanov',
            name: 'Ivan',
            jobTitle: 'Programmer',
            company: 'BELSHINA'
        },
        {
            id: Date.now() + Math.random(),
            isChecked: false,
            lastName: 'Petrov',
            name: 'Petr',
            jobTitle: 'HouseWorker',
            company: 'MTZ'
        },
        {
            id: Date.now() + Math.random(),
            isChecked: false,
            lastName: 'Vladimirov',
            name: 'Vladimir',
            jobTitle: 'Driver',
            company: 'HORIZONT'
        },
        {
            id: Date.now() + Math.random(),
            isChecked: false,
            lastName: 'Sidorov',
            name: 'Kostya',
            jobTitle: 'Builder',
            company: 'MTZ'
        },
        {
            id: Date.now() + Math.random(),
            isChecked: false,
            lastName: 'Zhuk',
            name: 'Maxim',
            jobTitle: 'Engineer',
            company: 'HORIZONT'
        },
        {
            id: Date.now() + Math.random(),
            isChecked: false,
            lastName: 'Vetrova',
            name: 'Julia',
            jobTitle: 'Teacher',
            company: 'MTZ'
        },
    ] as EmployeeCompanyType[],
    error: '',
}

export const employeeCompanySlice = createSlice({
    name: 'employeeCompany',
    initialState,
    reducers: {
        addEmployee(state, action) {
            const newEmployee = {
                id: Date.now() + Math.random(),
                isChecked: false,
                lastName: action.payload.lastName,
                name: action.payload.name,
                jobTitle: action.payload.jobTitle,
                company: action.payload.company
            }
            state.employeeCompany.push(newEmployee)
        },
        deleteEmployee(state, action) {
            state.employeeCompany = state.employeeCompany.filter(employee => employee.id !== action.payload)
        },
        setError(state, action) {
            state.error = action.payload
        },
        changeCheckboxEmployeeEverything(state, action) {
            state.employeeCompany.map(employee => employee.isChecked = action.payload)
        }
    }
})

export const {addEmployee, deleteEmployee, setError, changeCheckboxEmployeeEverything} = employeeCompanySlice.actions;

export default employeeCompanySlice.reducer;