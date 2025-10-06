import { createBrowserRouter } from "react-router-dom";
import {FormForEntries} from "../components/DiaryPanel/pages/FormPage/FormPage.tsx";
import {ListOfEntries} from "../components/DiaryPanel/pages/EntriesListPage/EntriesListPage.tsx";
import {SearchEntries} from "../components/DiaryPanel/pages/EntriesSearchPage/EntriesSearchPage.tsx";
import Root from "./root.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <FormForEntries />},
      { path: "list", element: <ListOfEntries />},
      { path: "search", element: <SearchEntries />}
    ]
  }
])

export default router