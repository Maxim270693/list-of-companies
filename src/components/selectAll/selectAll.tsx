import React from 'react';

import style from './selectAll.module.css';


const SelectAll = () => {
    return (
        <div className={style.selectAll}>
            <h4>Select all</h4>
            <input type="checkbox"/>
        </div>
    );
};

export default SelectAll;