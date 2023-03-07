import Candidates from "../pages/candidates";
import Dashboard from "../pages/dashboard";
import Jobs from "../pages/jobs";
import JobDetail from "../pages/jobs/detail";
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
    },
    {
        key : "jobsdetail",
        path : "jobs/detail",
        element : <JobDetail/>
    },
    {
        key : "candidates",
        path : "candidates",
        element : <Candidates/>
    }
]