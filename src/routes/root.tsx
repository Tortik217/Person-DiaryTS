import {Header} from "../components/Header/Header.tsx";
import {Outlet} from "react-router-dom";

function Root() {

  return (
    <div className="main d-flex flex-column justify-content-center align-items-center">
      <div className="header">
        <Header/>
      </div>
      <Outlet/>
    </div>
  );
}

export default Root;
