import React from 'react';

import style from './selectAll.module.css';

type SelectAllType = {
    onClickHandler: (isChecked: boolean) => void;
}

const SelectAll = ({onClickHandler}: SelectAllType) => {
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked(!checked);
    };

    const onClickCurrentCheckbox = () => {
        onClickHandler(!checked)
    }

    return (
        <div className={style.selectAll}>
            <h4>Select all</h4>

            <input type="checkbox"
                   checked={checked}
                   onChange={handleChange}
                   onClick={onClickCurrentCheckbox}
            />
        </div>
    );
};

export default SelectAll;