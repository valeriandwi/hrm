import Dashboard from "../pages/dashboard";
import Jobs from "../pages/jobs";
import { PathRouteProps } from "./interfaces";

export const PUBLIC_ROUTES : PathRouteProps[] = [
    {
        key : "dashboard",
        path : "*",
        element : <Dashboard/>
    },
    {
        key : "jobs",
        path : "jobs",
        element : <Jobs/>
    }
]