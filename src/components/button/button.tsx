import React, { ReactNode } from "react";

import style from "./button.module.css";

type ButtonType = {
  onClick?: () => void;
  children: ReactNode;
  type?: "button" | "submit" | "reset";
};

const Button = React.memo(({ onClick, children, type }: ButtonType) => {
  const onClickHandler = () => onClick?.();

  return (
    <button type={type} className={style.btn} onClick={onClickHandler}>
      {children}
    </button>
  );
});

export default Button;
