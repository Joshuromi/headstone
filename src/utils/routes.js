import SignIn from "../pages/SignIn/SignIn";
import Dashboard from "../pages/Dashboard/Dashboard";
import Profile from "../pages/Profile/Profile";
import Read from "../pages/Read/Read";

const routes = [
    { path: "/sign_in", component: SignIn },
    { path: "/dashboard", component: Dashboard },
    { path: "/profile", component: Profile },
    { path: "/read", component: Read },
];

export default routes;