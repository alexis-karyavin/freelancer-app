import { FC, useState } from "react";
import "./HeaderAvatar.scss";

import RAvatar from "../../ui/components/avatar/RAvatar";

const HeaderAvatar: FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  let classNameDropdown = "avatar-dropdown";
  classNameDropdown = showDropdown
    ? classNameDropdown + " show"
    : classNameDropdown;

  return (
    <div className="avatar-header">
      <a href="#" onClick={() => setShowDropdown(!showDropdown)}>
        <RAvatar />
      </a>

      {showDropdown && (
        <ul className={classNameDropdown}>
          <li
            className="avatar-dropdown__item"
            onClick={() => console.log("exit")}
          >
            Выйти
          </li>
        </ul>
      )}
    </div>
  );
};

export default HeaderAvatar;
