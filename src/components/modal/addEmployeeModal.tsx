import React, {ChangeEvent, FormEvent, MouseEvent, useState} from 'react';
import {useDispatch} from "react-redux";
import {addEmployee} from "../../redux/slices/employeeCompanySlice";

import style from './addEmployeeModal.module.css';

type AddEmployeeModalType = {
    setOpenModal: (openModal: boolean) => void
}

const AddEmployeeModal = ({setOpenModal}: AddEmployeeModalType) => {
    const dispatch = useDispatch();

    const [modalForm, setModalForm] = useState({
        lastName: '',
        name: '',
        jobTitle: '',
    })

    const {lastName, name, jobTitle} = modalForm;

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setModalForm(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            }
        })
    }

    const addNewEmployee = () => {
        dispatch(addEmployee({lastName, name, jobTitle}))
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        addNewEmployee();
        setOpenModal(false);
    }

    const onFormClickHandler = (event: MouseEvent<HTMLFormElement>) => event.stopPropagation()

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
                />
                <input type="text"
                       placeholder="enter the name"
                       name="name"
                       value={name}
                       onChange={onChangeInputHandler}
                />
                <input type="text"
                       placeholder="enter the jobTitle"
                       name="jobTitle"
                       value={jobTitle}
                       onChange={onChangeInputHandler}
                />
                <button>add</button>
            </form>
        </div>
    );
};

export default AddEmployeeModal;