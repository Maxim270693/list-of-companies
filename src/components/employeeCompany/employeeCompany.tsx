import React, {useState} from 'react';

import {useDispatch, useSelector} from "react-redux";
import {changeCheckboxEmployeeEverything} from "../../redux/slices/employeeCompanySlice";
import {EmployeeCompanyType, ListCompanyType, RootStateType} from "../../types/types";

import Employee from "../employee/employee";
import SelectAll from "../selectAll/selectAll";
import AddEmployeeModal from "../modal/addEmployeeModal";
import Button from "../button/button";

type EmployeeCompanyPropsType = {
    checkedCompany?: ListCompanyType
}

const EmployeeCompany = ({checkedCompany}: EmployeeCompanyPropsType) => {
    const dispatch = useDispatch();

    const employeeCompany = useSelector<RootStateType, EmployeeCompanyType[]>(state => state.employeeCompany.employeeCompany)

    const [openModal, setOpenModal] = useState(false)

    const newEmployeeCompany = employeeCompany.filter(i => i.company === checkedCompany?.nameCompany)

    const openModalHandler = () => setOpenModal(true)

    const checkedEmployeeEverything = (isChecked: boolean) => {
        dispatch(changeCheckboxEmployeeEverything(isChecked))
    }

    return (
        <div>
            {openModal && <AddEmployeeModal setOpenModal={setOpenModal}/>}

            <h1>Table employee current company</h1>

            <SelectAll onClickHandler={checkedEmployeeEverything}/>

            <Button onClick={openModalHandler}>
                add employee
            </Button>

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
                    newEmployeeCompany.map(employee => <Employee key={employee.id} {...employee}/>)
                }
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeCompany;