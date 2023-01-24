import { Key } from "react";
import IUser from "./IUser";

export default interface IWorksItem {
  id: Key;
  name: string;
  startDate?: Date;
  endDate?: Date;
  activeHours?: number;
  stage?: string;
  customer: IUser;
  executor?: IUser;
}
