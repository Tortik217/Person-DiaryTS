import {Header} from "../components/Header/Header";
import {Outlet} from "react-router-dom";

export function Root() {

  return (
    <div className="main d-flex flex-column justify-content-center align-items-center">
      <div className="header">
        <Header/>
      </div>
      <Outlet/>
    </div>
  );
}