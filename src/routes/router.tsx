import { createBrowserRouter } from "react-router-dom";
import {FormForEntries} from "../components/DiaryPanel/pages/FormForEntries/FormForEntries.tsx";
import {ListOfEntries} from "../components/DiaryPanel/pages/ListOfEntries/ListOfEntries.tsx";
import Root from "./root.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <FormForEntries />},
      { path: "list", element: <ListOfEntries />}
    ]
  }
])

export default router