import { Outlet } from "react-router-dom";
import "./App.scss";

import Header from "./components/headers/Header";
import LeftSidebar from "./components/sidebars/LeftSidebar";
import Main from "./pages/main/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="body-app">
        <LeftSidebar />
        <div className="content">
          <div className="content-wrapper">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
