import { createBrowserRouter } from "react-router-dom";
import {FormPage} from "../pages/FormPage/FormPage.tsx";
import {EntriesListPage} from "../pages/EntriesListPage/EntriesListPage.tsx";
import {EntriesSearchPage} from "../pages/EntriesSearchPage/EntriesSearchPage.tsx";
import {Root} from "./root.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <FormPage />},
      { path: "list", element: <EntriesListPage />},
      { path: "search", element: <EntriesSearchPage />}
    ]
  }
])

export default router