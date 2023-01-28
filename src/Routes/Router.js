import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import ShowSummery from "../Pages/ShowSummery/ShowSummery";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/showSummery/:id',

                element: <ShowSummery></ShowSummery>,
            }
        ]
    }
])