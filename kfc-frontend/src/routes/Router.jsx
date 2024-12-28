import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Restaurents from "../pages/Restaurents";

const Router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {
                path:'r',
                element:<Restaurents/>
            }
        ]

    }
])

export default Router;