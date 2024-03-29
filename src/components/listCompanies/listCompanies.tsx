import React, {useCallback} from "react";
import { useDispatch } from "react-redux";
import {
  addCompany,
  changeCheckboxCompanyEverything,
  deleteAllCheckBox,
} from "../../redux/slices/listCompanySlice";

import SelectAll from "../selectAll/selectAll";

import { ListCompanyType } from "../../types/types";

import Button from "../button/button";
import Company from "../company/company";
import EmployeeCompany from "../employeeCompany/employeeCompany";

import style from "./listCompany.module.css";
import { useAppSelector } from "../../redux/store";

const ListCompanies = () => {
  const dispatch = useDispatch();

  const listCompanies = useAppSelector<ListCompanyType[]>(
    (state) => state.listCompany.listCompanies
  );

  const checkedCompany = listCompanies.filter((company) => company.isChecked);

  const checkedCompanyEverything = useCallback((isChecked: boolean) => {
    dispatch(changeCheckboxCompanyEverything(isChecked));
  }, [dispatch]);

  const addCompanyHandler = useCallback(() => dispatch(addCompany()), [dispatch])
  const deleteCompanyHandler = useCallback(() => dispatch(dispatch(deleteAllCheckBox())), [dispatch])

  return (
    <div className={style.wrapper}>
      <div>
        <h1>Table list with company</h1>

        <SelectAll onClickHandler={checkedCompanyEverything} />

        <Button onClick={addCompanyHandler}>add company</Button>

        {checkedCompany.length > 1 && (
          <Button onClick={deleteCompanyHandler}>
            delete companies
          </Button>
        )}

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
            {listCompanies.map((company) => (
              <Company key={company.id} {...company} />
            ))}
          </tbody>
        </table>
      </div>

      <div>
        {!!checkedCompany.length && (
          <EmployeeCompany checkedCompany={checkedCompany.at(-1)} />
        )}
      </div>
    </div>
  );
};

export default ListCompanies;
