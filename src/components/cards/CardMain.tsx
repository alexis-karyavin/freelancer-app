import { FC, Key, SyntheticEvent } from "react";
import "./CardMain.scss";
import { useNavigate } from "react-router-dom";

import Card from "../../ui/components/cards/Card";
import RButton from "../../ui/components/buttons/RButton";

import MenuItem from "../../interfaces/MenuItem";

type CardProps = {
  card: MenuItem;
  className?: string;
  key?: Key;
};

const CardMain: FC<CardProps> = ({ card, className }) => {
  const navigate = useNavigate();

  const classCss = "main__card " + className;

  const clickButton = (e: SyntheticEvent, url: string) => {
    e.preventDefault();
    navigate(url);
  };

  return (
    <Card
      className={classCss}
      key={card.id}
      body={card.text}
      footer={
        <div className="main__card__footer">
          <RButton onClick={(e) => clickButton(e, card.url)}>Открыть</RButton>
        </div>
      }
    />
  );
};

export default CardMain;
