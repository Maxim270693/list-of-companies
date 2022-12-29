import {combineReducers, configureStore} from "@reduxjs/toolkit";

import listCompany from '../redux/slices/listCompanySlice';
import employeeCompany from '../redux/slices/employeeCompanySlice';

export const rootReducer = combineReducers({
    listCompany,
    employeeCompany,
})

export const store = configureStore({
    reducer: rootReducer
})