import React, {ChangeEvent, useCallback, useState} from "react";
import { useDispatch } from "react-redux";
import {
  changeCheckBoxEmployee,
  changeFieldEmployee,
  deleteEmployee,
} from "../../redux/slices/employeeCompanySlice";

import Button from "../button/button";

import styles from "../listCompanies/listCompany.module.css";

type EmployeeType = {
  id: number;
  isChecked: boolean;
  lastName: string;
  name: string;
  jobTitle: string;
};

const Employee = React.memo(({
  id,
  isChecked,
  lastName,
  name,
  jobTitle,
}: EmployeeType) => {
  const dispatch = useDispatch();

  const [editMode, setEditMode] = useState({
    editModeLastName: false,
    editModeName: false,
    editModeJobTitle: false,
  });

  const { editModeLastName, editModeName, editModeJobTitle } = editMode;

  const [currentLastName, setCurrentLastName] = useState(lastName);
  const [currentName, setCurrentName] = useState(name);
  const [currentJobTitle, setCurrentJobTitle] = useState(jobTitle);

  const changeInputLastNameHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentLastName(event.currentTarget.value);
  };
  const changeInputNameHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentName(event.currentTarget.value);
  };
  const changeInputJobTitleHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentJobTitle(event.currentTarget.value);
  };

  const activateViewMode = (key: string) => {
    setEditMode({ ...editMode, [key]: false });
    dispatch(
      changeFieldEmployee({
        id,
        isChecked,
        lastName: currentLastName,
        name: currentName,
        jobTitle: currentJobTitle,
      })
    );
  };
  const activateEditMode = (key: string) => {
    setEditMode({ ...editMode, [key]: true });
  };

  const changeCheckBoxHandler = () => dispatch(changeCheckBoxEmployee(id));
  const deleteEmployeeHandler = useCallback(() => dispatch(deleteEmployee(id)), [dispatch]);

  return (
    <tr key={id} className={isChecked ? styles.backgroundRow : ""}>
      <td>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={changeCheckBoxHandler}
        />
      </td>
      <>
        {editModeLastName ? (
          <td>
            <input
              type="text"
              value={currentLastName}
              name="lastName"
              onChange={changeInputLastNameHandler}
              autoFocus
              onBlur={() => activateViewMode("editModeLastName")}
            />
          </td>
        ) : (
          <td onDoubleClick={() => activateEditMode("editModeLastName")}>
            {currentLastName}
          </td>
        )}

        {editModeName ? (
          <td>
            <input
              type="text"
              value={currentName}
              name="name"
              onChange={changeInputNameHandler}
              autoFocus
              onBlur={() => activateViewMode("editModeName")}
            />
          </td>
        ) : (
          <td onDoubleClick={() => activateEditMode("editModeName")}>
            {currentName}
          </td>
        )}

        {editModeJobTitle ? (
          <td>
            <input
              type="text"
              value={currentJobTitle}
              name="jobTitle"
              onChange={changeInputJobTitleHandler}
              autoFocus
              onBlur={() => activateViewMode("editModeJobTitle")}
            />
          </td>
        ) : (
          <td onDoubleClick={() => activateEditMode("editModeJobTitle")}>
            {currentJobTitle}
          </td>
        )}
        <td>
          <Button onClick={deleteEmployeeHandler}>delete</Button>
        </td>
      </>
    </tr>
  );
});

export default Employee;
