import { FC, ReactEventHandler } from "react";
import "./LeftSidebar.scss";
import NavSidebar from "../navs/NavSidebar";
import MenuItem from "../../interfaces/MenuItem";

import menuData from "../../data/menu";

const LeftSidebar: FC = () => {
  const menuItems: Array<MenuItem> = menuData;
  return (
    <div className="left-sidebar">
      <NavSidebar items={menuItems} />
    </div>
  );
};

export default LeftSidebar;
