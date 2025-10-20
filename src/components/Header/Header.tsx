import {NavLink} from "react-router-dom";

export function Header() {
  return (
      <div className="header d-flex gap-2 align-items-center mb-3">
        <h2 className="logo fst-italic" aria-current="page">
          Person Diary
        </h2>
        <ul className="nav nav-underline m-3">
          <li className="nav-item">
            <NavLink className="nav-link" to={"/"}>
              Main
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={"/"}>
              Form for Entries
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={"/list"}>
              List of Entries
            </NavLink>
          </li>
        </ul>
      </div>
  );
}