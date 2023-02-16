import Dashboard from "../pages/dashboard";
import { PathRouteProps } from "./interfaces";

export const PUBLIC_ROUTES : PathRouteProps[] = [
    {
        path : "*",
        element : <Dashboard/>
    }
]