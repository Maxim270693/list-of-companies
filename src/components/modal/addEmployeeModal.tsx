import React, {ChangeEvent, FormEvent, MouseEvent, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addEmployee, setError} from "../../redux/slices/employeeCompanySlice";

import style from './addEmployeeModal.module.css';
import {ListCompanyType, RootStateType} from "../../types/types";

type AddEmployeeModalType = {
    setOpenModal: (openModal: boolean) => void
}

const AddEmployeeModal = ({setOpenModal}: AddEmployeeModalType) => {
    const dispatch = useDispatch();

    const listCompanies = useSelector<RootStateType, ListCompanyType[]>(state => state.listCompany.listCompanies);
    const error = useSelector<RootStateType, string>(state => state.employeeCompany.error);

    const [modalForm, setModalForm] = useState({
        lastName: '',
        name: '',
        jobTitle: '',
        company: '',
    })

    const {lastName, name, jobTitle, company} = modalForm;

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setModalForm(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            }
        })
        dispatch(setError(''))
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const obj = listCompanies.find(item => company === item.nameCompany)

        if (lastName === '') {
            dispatch(setError('All fields must be filled'))
        } else if (name === '') {
            dispatch(setError('All fields must be filled'))
        } else if (jobTitle === '') {
            dispatch(setError('All fields must be filled'))
        } else if (!obj) {
            dispatch(setError('No such company'))
        } else {
            dispatch(addEmployee(modalForm))
            setOpenModal(false);
        }
    }

    const onFormClickHandler = (event: MouseEvent<HTMLFormElement>) => event.stopPropagation();

    return (
        <div className={style.modalWrapper} onClick={() => {
            setOpenModal(false)
        }}>
            <form onSubmit={handleSubmit}
                  className={style.modalContent}
                  onClick={onFormClickHandler}>
                <input type="text"
                       placeholder="enter the surName"
                       name="lastName"
                       value={lastName}
                       onChange={onChangeInputHandler}
                       className={error ? style.error : ''}
                />
                <input type="text"
                       placeholder="enter the name"
                       name="name"
                       value={name}
                       onChange={onChangeInputHandler}
                       className={error ? style.error : ''}
                />
                <input type="text"
                       placeholder="enter the jobTitle"
                       name="jobTitle"
                       value={jobTitle}
                       onChange={onChangeInputHandler}
                       className={error ? style.error : ''}
                />
                <input type="text"
                       placeholder="enter the company"
                       name="company"
                       value={company}
                       onChange={onChangeInputHandler}
                       className={error ? style.error : ''}
                />
                {error && <div className={style.errorMessage}>{error}</div>}

                <button>add</button>
            </form>
        </div>
    );
};

export default AddEmployeeModal;