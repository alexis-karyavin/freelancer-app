import { FC, ReactEventHandler } from "react";
import "./RAvatar.scss";
import { userIcon } from "../../icons";

type AvatarProps = {
  image?: string;
};

const RAvatar: FC<AvatarProps> = ({ image = userIcon }) => {
  return (
    <div className="r-avatar">
      <img src={image} alt="User Avatar" className="r-avatar__image" />
    </div>
  );
};

export default RAvatar;
