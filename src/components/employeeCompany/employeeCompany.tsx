import React, {useCallback, useState} from "react";

import {useDispatch} from "react-redux";
import {changeCheckboxEmployeeEverything} from "../../redux/slices/employeeCompanySlice";
import {EmployeeCompanyType, ListCompanyType} from "../../types/types";

import Employee from "../employee/employee";
import SelectAll from "../selectAll/selectAll";
import AddEmployeeModal from "../modal/addEmployeeModal";
import Button from "../button/button";
import {useAppSelector} from "../../redux/store";

type EmployeeCompanyPropsType = {
  checkedCompany?: ListCompanyType;
};

const EmployeeCompany = React.memo(({ checkedCompany }: EmployeeCompanyPropsType) => {
  const dispatch = useDispatch();

  const employeeCompany = useAppSelector<EmployeeCompanyType[]>(
    (state) => state.employeeCompany.employeeCompany
  );

  const [openModal, setOpenModal] = useState(false);

  const newEmployeeCompany = employeeCompany.filter((i) => i.company === checkedCompany?.nameCompany);

  const openModalHandler = useCallback(() => setOpenModal(true), [dispatch]);

  const checkedEmployeeEverything = useCallback((isChecked: boolean) => {
    dispatch(changeCheckboxEmployeeEverything(isChecked));
  }, [dispatch]);

  return (
    <div>
      {openModal && (
        <AddEmployeeModal
          setOpenModal={setOpenModal}
          nameCompany={checkedCompany?.nameCompany}
        />
      )}

      <h1>Table employee {checkedCompany?.nameCompany} company</h1>

      <SelectAll onClickHandler={checkedEmployeeEverything} />

      <Button onClick={openModalHandler}>add employee</Button>

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
          {newEmployeeCompany.map((employee) => (
            <Employee key={employee.id} {...employee} />
          ))}
        </tbody>
      </table>
    </div>
  );
});

export default EmployeeCompany;
