import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addCompany} from "../../redux/slices/listCompanySlice";

import SelectAll from "../selectAll/selectAll";

import {ListCompanyType, RootStateType} from "../../types/types";

import Company from "../company/company";

const ListCompanies = () => {
    const dispatch = useDispatch();

    const listCompanies = useSelector<RootStateType, ListCompanyType[]>(state => state.listCompany.listCompanies);

    return (
        <div>
            <h1>Table list with company</h1>
            <SelectAll/>

            <button onClick={() => dispatch(addCompany())}>add company</button>

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
    );
};

export default ListCompanies;