import { createBrowserRouter } from "react-router";
import Mainlayout from "../Layout/Mainlayout";
import Homepage from "../page/Homepage/Homepage";
import Book from "../page/Books/Book";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      {
        index: true,
        element: <Homepage />
      },
      {
        path: "/Books",
        element: <Book />
      }
    ]
  }
  
]);