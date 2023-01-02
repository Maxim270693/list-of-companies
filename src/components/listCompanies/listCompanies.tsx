import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    addCompany,
    changeCheckboxCompanyEverything,
    deleteAllCheckBox
} from "../../redux/slices/listCompanySlice";

import SelectAll from "../selectAll/selectAll";

import {ListCompanyType, RootStateType} from "../../types/types";

import Button from "../button/button";
import Company from "../company/company";
import EmployeeCompany from "../employeeCompany/employeeCompany";

import style from './listCompany.module.css';

const ListCompanies = () => {
    const dispatch = useDispatch();

    const listCompanies = useSelector<RootStateType, ListCompanyType[]>(state => state.listCompany.listCompanies);

    const checkedCompany = listCompanies.filter(company => company.isChecked);

    const checkedCompanyEverything = (isChecked: boolean) => {
        dispatch(changeCheckboxCompanyEverything(isChecked))
    }

    return (
        <div className={style.wrapper}>
            <div>
                <h1>Table list with company</h1>

                <SelectAll onClickHandler={checkedCompanyEverything}/>

                <Button onClick={() => dispatch(addCompany())}>
                    add company
                </Button>

                {checkedCompany.length > 1 &&
                <Button onClick={() => dispatch(dispatch(deleteAllCheckBox()))}>
                    delete companies
                </Button>}

                <table>
                    <thead>
                    <tr>
                        <th>Чекбокс</th>
                        <th>Название компании</th>
                        <th>Кол-во сотрудников</th>
                        <th>Адрес</th>
                    </tr>
                    </thead>
                    <tbody>
                    {listCompanies.map(company => <Company key={company.id} {...company}/>)}
                    </tbody>
                </table>
            </div>

            <div>
                {!!checkedCompany.length && <EmployeeCompany checkedCompany={checkedCompany.at(-1)}/>}
            </div>
        </div>
    );
};

export default ListCompanies;