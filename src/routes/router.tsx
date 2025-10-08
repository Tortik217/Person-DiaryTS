import { createBrowserRouter } from "react-router-dom";
import {FormPage} from "../pages/FormPage/FormPage.tsx";
import {ListPage} from "../pages/ListPage/ListPage.tsx";
import {SearchPage} from "../pages/SearchPage/SearchPage.tsx";
import {Root} from "./root.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <FormPage />},
      { path: "list", element: <ListPage />},
      { path: "search", element: <SearchPage />}
    ]
  }
])

export default router