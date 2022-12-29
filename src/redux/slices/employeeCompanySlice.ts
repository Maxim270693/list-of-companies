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
    ] as EmployeeCompanyType[]
}

export const employeeCompanySlice = createSlice({
    name: 'employeeCompany',
    initialState,
    reducers: {}
})

export const {} = employeeCompanySlice.actions;

export default employeeCompanySlice.reducer;