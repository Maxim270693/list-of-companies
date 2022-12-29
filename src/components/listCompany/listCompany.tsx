import React from 'react';

import {useSelector} from "react-redux";
import {ListCompanyType, RootStateType} from "../../types/types";

import SelectAll from "../selectAll/selectAll";

const ListCompany = () => {
    const listCompanies = useSelector<RootStateType, ListCompanyType[]>(state => state.listCompany.listCompanies)

    return (
        <div>
            <h1>Table list with company</h1>
            <SelectAll/>
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
                {
                    listCompanies.map(company => {
                        const {id, isChecked, nameCompany, numberOfEmployees, address} = company;

                        return (
                            <tr key={id}>
                                <td>
                                    <input type="checkbox"
                                           checked={isChecked}
                                           onChange={() => {}}
                                    />
                                </td>
                                <td>{nameCompany}</td>
                                <td>{numberOfEmployees}</td>
                                <td>{address}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    );
};

export default ListCompany;