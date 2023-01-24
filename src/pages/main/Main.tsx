import { FC, SyntheticEvent } from "react";
import { useNavigate } from "react-router-dom";
import "./Main.scss";

import menuData from "../../data/menu";

import CardMain from "../../components/cards/CardMain";

const Main: FC = () => {
  const navigate = useNavigate();
  const clickButton = (e: SyntheticEvent, url: string) => {
    e.preventDefault();
    navigate(url);
  };

  const cards = menuData.map((item) => <CardMain card={item} key={item.id} />);

  return <div className="main-wraper">{cards}</div>;
};

export default Main;
