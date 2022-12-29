import {createSlice} from "@reduxjs/toolkit";
import {EmployeeCompanyType} from "../../types/types";

const initialState = {
    employeeCompany: [
        {
            id: Date.now() + Math.random(),
            isChecked: false,
            lastName: 'Ivanov',
            name: 'Ivan',
            jobTitle: 'Programmer'
        },
        {
            id: Date.now() + Math.random(),
            isChecked: false,
            lastName: 'Petrov',
            name: 'Petr',
            jobTitle: 'HouseWorker'
        },
        {
            id: Date.now() + Math.random(),
            isChecked: false,
            lastName: 'Vladimirov',
            name: 'Vladimir',
            jobTitle: 'Driver'
        },
        {
            id: Date.now() + Math.random(),
            isChecked: false,
            lastName: 'Sidorov',
            name: 'Kostya',
            jobTitle: 'Builder'
        },
        {
            id: Date.now() + Math.random(),
            isChecked: false,
            lastName: 'Zhuk',
            name: 'Maxim',
            jobTitle: 'Engineer'
        },
        {
            id: Date.now() + Math.random(),
            isChecked: false,
            lastName: 'Vetrova',
            name: 'Julia',
            jobTitle: 'Teacher'
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