import { useRoutes } from "react-router-dom";
import {Main} from "./Components/Main";
import {Login} from "./Components/Login";
import {Reservation} from "./Components/Sales/Reservation";
import {Order} from "./Components/Sales/Order";

const Router = () => {
    return useRoutes([
        {path: "/",element: <Login/>},
        {path:"/Main", element:<Main/>},
        {path: "/Reservation", element:<Reservation/>},
        {path:"/Order", element:<Order/>},
    ])
}
export default Router