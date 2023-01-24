import { FC, ReactNode } from "react";
import "./Card.scss";

type CardProps = {
  header?: ReactNode;
  body?: ReactNode;
  footer?: ReactNode;
  className?: string;
};

const Card: FC<CardProps> = ({ header, body, footer, className }) => {
  const stylesCss = "r-card " + className;

  return (
    <div className={stylesCss}>
      {header && <div className="r-card__header">{header}</div>}
      {body && <div className="r-card__body">{body}</div>}
      {footer && <div className="r-card__footer">{footer}</div>}
    </div>
  );
};

export default Card;
