import React from 'react';
import {useDispatch} from "react-redux";
import {changeCheckBoxEmployee, deleteEmployee} from "../../redux/slices/employeeCompanySlice";

import styles from "../listCompanies/listCompany.module.css";

type EmployeeType = {
    id: number,
    isChecked: boolean,
    lastName: string,
    name: string,
    jobTitle: string,
}

const Employee = ({id, isChecked, lastName, name, jobTitle}: EmployeeType) => {
    const dispatch = useDispatch();

    const changeCheckBoxHandler = () => dispatch(changeCheckBoxEmployee(id))

    const deleteEmployeeHandler = () => dispatch(deleteEmployee(id))

    return (
        <tr key={id} className={isChecked ? styles.backgroundRow : ''}>
            <td>
                <input type="checkbox"
                       checked={isChecked}
                       onChange={changeCheckBoxHandler}
                />
            </td>
            <td>{lastName}</td>
            <td>{name}</td>
            <td>{jobTitle}</td>
            <td>
                <button onClick={deleteEmployeeHandler}>delete</button>
            </td>
        </tr>
    );
};

export default Employee;