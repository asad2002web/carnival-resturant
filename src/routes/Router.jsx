import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import NotFound from "../pages/notFound/NotFound";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";



export const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <NotFound/>,
        element:<MainLayout/>,
        children: [
            {
                path: "/",
                element: <div>Home</div>
            }
        ],
    },
    {
        path: "login",
        element: <Login/>
    },
    {
        path: "register",
        element: <Register/>
    }
]);