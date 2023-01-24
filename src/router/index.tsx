import { createBrowserRouter } from "react-router-dom";

import Main from "../pages/main/Main";
import WorksPage from "../pages/works/WorksPage";
import CashPage from "../pages/cash/CashPage";
import SettingsPage from "../pages/settings/SettingsPage";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/works",
        element: <WorksPage />,
      },
      {
        path: "/cash",
        element: <CashPage />,
      },
      {
        path: "/settings",
        element: <SettingsPage />,
      },
    ],
  },
]);

export default router;
