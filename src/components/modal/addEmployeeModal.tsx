import React, { ChangeEvent, FormEvent, MouseEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addEmployee, setError } from "../../redux/slices/employeeCompanySlice";
import { useAppSelector } from "../../redux/store";

import Button from "../button/button";

import { ListCompanyType } from "../../types/types";
import style from "./addEmployeeModal.module.css";

type AddEmployeeModalType = {
  setOpenModal: (openModal: boolean) => void;
  nameCompany?: string;
};

const AddEmployeeModal = ({
  setOpenModal,
  nameCompany,
}: AddEmployeeModalType) => {
  const dispatch = useDispatch();

  const listCompanies = useAppSelector<ListCompanyType[]>(
    (state) => state.listCompany.listCompanies
  );
  const error = useAppSelector<string>((state) => state.employeeCompany.error);

  const [modalForm, setModalForm] = useState({
    lastName: "",
    name: "",
    jobTitle: "",
    company: `${nameCompany}`,
  });

  const { lastName, name, jobTitle, company } = modalForm;

  const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setModalForm((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
    dispatch(setError(""));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const obj = listCompanies.find((item) => company === item.nameCompany);

    if (lastName === "" || name === "" || jobTitle === "") {
      dispatch(setError("All fields must be filled"));
    } else if (!obj) {
      dispatch(setError("No such company"));
    } else {
      dispatch(addEmployee(modalForm));
      setOpenModal(false);
    }
  };

  const onFormClickHandler = (event: MouseEvent<HTMLFormElement>) =>
    event.stopPropagation();

  return (
    <div
      className={style.modalWrapper}
      onClick={() => {
        setOpenModal(false);
      }}
    >
      <form
        onSubmit={handleSubmit}
        className={style.modalContent}
        onClick={onFormClickHandler}
      >
        <input
          type="text"
          placeholder="enter the surName"
          name="lastName"
          value={lastName}
          onChange={onChangeInputHandler}
          className={error ? style.error : ""}
        />
        <input
          type="text"
          placeholder="enter the name"
          name="name"
          value={name}
          onChange={onChangeInputHandler}
          className={error ? style.error : ""}
        />
        <input
          type="text"
          placeholder="enter the jobTitle"
          name="jobTitle"
          value={jobTitle}
          onChange={onChangeInputHandler}
          className={error ? style.error : ""}
        />
        <input
          type="text"
          placeholder="enter the company"
          name="company"
          value={company}
          onChange={onChangeInputHandler}
          className={error ? style.error : ""}
        />
        {error && <div className={style.errorMessage}>{error}</div>}

        <Button type="submit">add</Button>
      </form>
    </div>
  );
};

export default AddEmployeeModal;
