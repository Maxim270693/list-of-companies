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
    reducers: {}
})

export const {} = listCompanySlice.actions;

export default listCompanySlice.reducer;