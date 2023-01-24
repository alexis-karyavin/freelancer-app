import { Key, ReactEventHandler } from "react";

export default interface MenuItem {
  type?: String;
  text: String;
  icon?: string;
  onClick?: ReactEventHandler;
  url: string;
  id: Key;
}
