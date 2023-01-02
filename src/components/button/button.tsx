import React, {ReactNode} from 'react';

import style from './button.module.css';

type ButtonType = {
    onClick: () => void
    children: ReactNode
}

const Button = ({onClick, children}: ButtonType) => {
    const onClickHandler = () => onClick()

    return (
        <button className={style.btn} onClick={onClickHandler}>
            {children}
        </button>
    );
};

export default Button;