import {createSlice} from "@reduxjs/toolkit";
import {ListCompanyType} from "../../types/types";

const initialState = {
    listCompanies: [
        {
            id: Date.now() + Math.random(),
            isChecked: false,
            nameCompany: 'MTZ',
            numberOfEmployees: 15,
            address: 'Minsk',
        },
        {
            id: Date.now() + Math.random(),
            isChecked: false,
            nameCompany: 'HORIZONT',
            numberOfEmployees: 5,
            address: 'Brest',
        },
        {
            id: Date.now() + Math.random(),
            isChecked: false,
            nameCompany: 'BELSHINA',
            numberOfEmployees: 6,
            address: 'Gomel',
        },
    ] as ListCompanyType[]
}

export const listCompanySlice = createSlice({
    name: 'listCompany',
    initialState,
    reducers: {
        changeCheckBox(state, action) {
            state.listCompanies.map(company => company.id === action.payload
                ? company.isChecked = !company.isChecked
                : ''
            )
        },
        removeCompany(state, action) {
            state.listCompanies = state.listCompanies.filter(company => company.id !== action.payload)
        },
        addCompany(state) {
            const newCompany = {
                id: Date.now() + Math.random(),
                isChecked: false,
                nameCompany: 'Nike',
                numberOfEmployees: 4,
                address: 'London',
            }
            state.listCompanies.push(newCompany)
        },
    }
})

export const {changeCheckBox, removeCompany, addCompany} = listCompanySlice.actions;

export default listCompanySlice.reducer;