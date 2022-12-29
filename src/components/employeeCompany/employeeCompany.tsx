import React from 'react';

import {useSelector} from "react-redux";
import {EmployeeCompanyType, RootStateType} from "../../types/types";

import SelectAll from "../selectAll/selectAll";

const EmployeeCompany = () => {
    const employeeCompany = useSelector<RootStateType, EmployeeCompanyType[]>(state => state.employeeCompany.employeeCompany)

    return (
        <div>
            <h1>Table employee current company</h1>

            <SelectAll/>

            <table style={{border: '1px solid black'}}>
                <thead>
                <tr>
                    <th>Чекбокс</th>
                    <th>Фамилия</th>
                    <th>Имя</th>
                    <th>Должность</th>
                </tr>
                </thead>
                <tbody>
                {
                    employeeCompany.map(employee => {
                        const {id, isChecked, lastName, name, jobTitle} = employee;

                        return (
                            <tr key={id}>
                                <td>
                                    <input type="checkbox"
                                           checked={isChecked}
                                           onChange={() => {}}
                                    />
                                </td>
                                <td>{lastName}</td>
                                <td>{name}</td>
                                <td>{jobTitle}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeCompany;