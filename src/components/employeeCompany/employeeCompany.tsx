import React from 'react';

import {useSelector} from "react-redux";
import {EmployeeCompanyType, ListCompanyType, RootStateType} from "../../types/types";

import SelectAll from "../selectAll/selectAll";

type EmployeeCompanyPropsType = {
    checkedCompany: ListCompanyType[]
}

const EmployeeCompany = ({checkedCompany}: EmployeeCompanyPropsType) => {
    const employeeCompany = useSelector<RootStateType, EmployeeCompanyType[]>(state => state.employeeCompany.employeeCompany)

    const newEmployeeCompany = employeeCompany.filter(i => i.company === checkedCompany[0].nameCompany)

    return (
        <div>
            <h1>Table employee current company</h1>

            <SelectAll/>

            <table>
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
                    newEmployeeCompany.map(employee => {
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