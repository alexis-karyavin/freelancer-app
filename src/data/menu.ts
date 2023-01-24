import MenuItem from "../interfaces/MenuItem";
import { folderIcon, settingsIcon, poundIcon } from "../ui/icons";

const menu: Array<MenuItem> = [
  {
    id: "item-1",
    text: "Мои работы",
    url: "/works",
    icon: folderIcon,
    onClick: () => {},
  },
  {
    id: "item-2",
    text: "Весь заработок",
    url: "/cash",
    icon: poundIcon,
    onClick: () => {},
  },
  {
    id: "item-3",
    text: "Настройки",
    url: "settings",
    icon: settingsIcon,
    onClick: () => {},
  },
];

export default menu;
