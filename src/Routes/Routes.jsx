import { createBrowserRouter } from "react-router";
import Mainlayout from "../Layout/Mainlayout";
import Homepage from "../page/Homepage/Homepage";
import Book from "../page/Books/Book";
import Errorelement from "../ErrorElement/Errorelement";
import Bookdetails from "../page/Bookdetails/Bookdetails";

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
                element: <Book />,
                loader: () => fetch('/booksData.json')
            },
            {
                path: "/Bookdetails/:id",
                element: <Bookdetails />,
                loader: () => fetch('/booksData.json')
            }
        ],
        errorElement: <Errorelement />
    }
]);