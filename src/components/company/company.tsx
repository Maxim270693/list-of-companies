import React, {ChangeEvent, useState} from 'react';
import {
    changeAddressCompany,
    changeCheckBox,
    changeNameCompany,
    removeCompany
} from "../../redux/slices/listCompanySlice";
import {useDispatch} from "react-redux";

import styles from "../listCompanies/listCompany.module.css";

type CompanyType = {
    id: number,
    isChecked: boolean,
    nameCompany: string,
    numberOfEmployees: number,
    address: string,
}

const Company = ({id, isChecked, nameCompany, numberOfEmployees, address}: CompanyType) => {
    const dispatch = useDispatch();

    const [editModeTitle, setEditModeTitle] = useState(false);
    const [editModeAddress, setEditModeAddress] = useState(false);

    const [title, setTitle] = useState(nameCompany)
    const [addressCompany, setAddressCompany] = useState(address)

    const changeCheckBoxHandler = () => dispatch(changeCheckBox(id))
    const removeCompanyHandler = () => dispatch(removeCompany(id))
    const activateEditMode = () => setEditModeTitle(true)
    const changeInputValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }
    const activateViewMode = () => {
        setEditModeTitle(false)
        dispatch(changeNameCompany({id, isChecked, title, numberOfEmployees, address}))
    }

    const activateViewModeAddress = () => {
        setEditModeAddress(false)
        dispatch(changeAddressCompany({id, isChecked, title, numberOfEmployees, addressCompany}))
    }
    const changeInputAddressHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setAddressCompany(event.currentTarget.value)
    }
    const activateEditModeAddress = () => setEditModeAddress(true)

    return (
        <tr key={id} className={isChecked ? styles.backgroundRow : ''}>
            <td>
                <input type="checkbox"
                       checked={isChecked}
                       onChange={changeCheckBoxHandler}
                />
            </td>
            {editModeTitle
                ? <td>
                    <input type="text"
                           value={title}
                           onChange={changeInputValueHandler}
                           autoFocus
                           onBlur={activateViewMode}
                    />
                </td>
                :
                <td onDoubleClick={activateEditMode}>{title}</td>
            }

            <td>{numberOfEmployees}</td>

            {editModeAddress
                ? <td>
                    <input type="text"
                           value={addressCompany}
                           onChange={changeInputAddressHandler}
                           autoFocus
                           onBlur={activateViewModeAddress}
                    />
                </td>
                :
                <td onDoubleClick={activateEditModeAddress}>{addressCompany}</td>
            }
            <td>
                <button onClick={removeCompanyHandler}>delete</button>
            </td>
        </tr>
    );
};

export default Company;