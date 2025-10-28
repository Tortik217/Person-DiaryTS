import { createBrowserRouter } from "react-router-dom";
import {FormPage} from "../pages/FormPage/FormPage.tsx";
import {ListPage} from "../pages/ListPage/ListPage.tsx";
import {Root} from "./root.js";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      children: [
        { index: true, element: <FormPage /> },
        { path: "list", element: <ListPage /> },
      ],
    },
  ],
  {
    basename: "/Person-DiaryTS",
  }
);

export default router