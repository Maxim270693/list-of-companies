import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeCheckBox} from "../../redux/slices/listCompanySlice";

import SelectAll from "../selectAll/selectAll";

import {ListCompanyType, RootStateType} from "../../types/types";
import styles from './listCompany.module.css';

const ListCompany = () => {
    const dispatch = useDispatch();

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

                        const changeCheckBoxHandler = () => {
                            dispatch(changeCheckBox(id))
                        }

                        return (
                            <tr key={id} className={isChecked ? styles.backgroundRow : ''}>
                                <td>
                                    <input type="checkbox"
                                           checked={isChecked}
                                           onChange={changeCheckBoxHandler}
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