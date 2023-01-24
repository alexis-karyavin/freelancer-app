import { FC, ReactEventHandler } from "react";
import "./RInput.scss";

type InputProps = {
  type?: string;
  onChange?: ReactEventHandler;
  value?: string | number;
  className?: string;
};

const RInput: FC<InputProps> = ({
  type = "text",
  value = "",
  onChange = () => {},
  className,
}) => {
  return (
    <input
      className={className}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
};

export default RInput;
