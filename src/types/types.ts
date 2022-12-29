import {rootReducer} from "../redux/store";

export type RootStateType = ReturnType<typeof rootReducer>

export type ListCompanyType = {
    id: number,
    isChecked: boolean,
    nameCompany: string,
    numberOfEmployees: number,
    address: string,
}

export type EmployeeCompanyType = {
    id: number,
    isChecked: boolean,
    lastName: string,
    name: string,
    jobTitle: string,
}