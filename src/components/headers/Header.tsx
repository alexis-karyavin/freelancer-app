import { FC } from "react";
import "./Header.scss";

import HeaderAvatar from "../avatars/HeaderAvatar";
import { useNavigate } from "react-router-dom";

const Header: FC = () => {
  const navigate = useNavigate();
  return (
    <header className="header">
      <a
        href="#"
        className="header__brand"
        onClick={(e) => {
          e.preventDefault();
          navigate("/");
        }}
      >
        FREELANCER APP
      </a>

      <div className="header-content--right">
        <HeaderAvatar />
      </div>
    </header>
  );
};

export default Header;
