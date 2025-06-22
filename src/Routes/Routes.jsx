import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Error from "../Components/Error/Error";
import Home from "../Pages/Home/Home/Home";
import TopUpForm from "../Pages/TopUpForm/TopUpForm";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ],
    },
    {
        path: '/top-up',
        element: <TopUpForm />
    }
])