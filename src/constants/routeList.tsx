import Candidates from "../pages/Candidates";
import Dashboard from "../pages/Dashboard";
import Jobs from "../pages/Jobs";
import JobDetail from "../pages/Jobs/JobDetail";
import { PathRouteProps } from "./interfaces";

export const PUBLIC_ROUTES: PathRouteProps[] = [
  {
    key: "dashboard",
    path: "*",
    element: <Dashboard />,
  },
  {
    key: "jobs",
    path: "jobs",
    element: <Jobs />,
  },
  {
    key: "jobsdetail",
    path: "jobs/detail",
    element: <JobDetail />,
  },
  {
    key: "candidates",
    path: "candidates",
    element: <Candidates />,
  },
];
