import { FC } from "react";
import "./NavSidebar.scss";
import MenuItem from "../../interfaces/MenuItem";
import { useNavigate } from "react-router-dom";

type NavSidebarProps = {
  items: Array<MenuItem>;
};

const NavSidebar: FC<NavSidebarProps> = ({ items }) => {
  const navigate = useNavigate();

  const itemsList = items.map((item) => (
    <li className="nav-sidebar__item" key={item.id}>
      <a
        href="#"
        className="nav-sidebar__link"
        onClick={(e) => {
          e.preventDefault();
          navigate(item.url);
        }}
      >
        <img src={item.icon} alt="icon menu" className="nav-sidebar__icon" />
        {item.text}
      </a>
    </li>
  ));

  return <ul className="nav-sidebar">{itemsList}</ul>;
};

export default NavSidebar;
