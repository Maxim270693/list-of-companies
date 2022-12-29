import {combineReducers, configureStore} from "@reduxjs/toolkit";

import listCompany from '../redux/slices/listCompanySlice';

export const rootReducer = combineReducers({
    listCompany,
})

export const store = configureStore({
    reducer: rootReducer
})