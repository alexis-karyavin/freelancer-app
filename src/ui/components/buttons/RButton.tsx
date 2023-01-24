import "./RButton.scss";
import { FC, ReactNode, ReactEventHandler } from "react";

type ButtonProps = {
  children?: ReactNode;
  color?: string | undefined;
  onClick?: ReactEventHandler;
};

const setStyleCss = (color: string | undefined) => {
  const colorCss = color ? `r-btn__${color}` : "r-btn__primary";
  return colorCss;
};

const RButton: FC<ButtonProps> = ({ children, color, onClick }) => {
  const styleCss = setStyleCss(color);
  return (
    <button onClick={onClick} className={"r-btn " + styleCss}>
      {children}
    </button>
  );
};

export default RButton;
