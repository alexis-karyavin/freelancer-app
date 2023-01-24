import { ChangeEvent, FC, useState } from "react";
import "./WorksPage.scss";
import RButton from "@/ui/components/buttons/RButton";
import RInput from "@/ui/components/inputs/RInput";
import IWorksItem from "@/interfaces/IWorksItem";
import RTable from "@/ui/components/tables/RTable";

interface IRowWork {
  id: string;
  data: any;
}
interface ICol {
  id: string;
  text?: string;
  data: Function;
}

const WorksPage: FC = () => {
  const [searchText, setSearchText] = useState<string>("");

  const colsWorks = [
    {
      id: "num",
      text: "#",
    },
    {
      id: "name",
      text: "Название работы",
    },
    {
      id: "customer",
      text: "Заказчик",
      data: (data: IWorksItem) => {
        const { customer } = data;
        return `${customer.firstName} ${customer.lastName}`;
      },
    },
    {
      id: "executor",
      text: "Исполнитель",
    },
    {
      id: "stage",
      text: "Стадия",
    },

    {
      id: "startDate",
      text: "Начало работ",
    },
    {
      id: "endDate",
      text: "Окончание работ",
    },
  ];

  const works: Array<IRowWork> = [
    {
      id: "name",
      data: {
        num: 1,
        customer: {
          firstName: "Alex",
          lastName: "Petrov",
        },
        name: "Frontend",
      },
    },
  ];

  const handleInputSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  // const contentWorksPage =

  return (
    <div className="works-page">
      <div className="works-page__header">
        <RInput
          className="works-page__search"
          value={searchText}
          onChange={handleInputSearch}
          type="search"
        />
        <RButton>Создать заказ</RButton>
      </div>
      <div className="works-page__content">
        {works.length ? (
          <RTable cols={colsWorks} rows={works} />
        ) : (
          <p>Позиций нет</p>
        )}
      </div>
    </div>
  );
};

export default WorksPage;
