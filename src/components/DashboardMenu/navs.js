import { ReactComponent as Evaluations } from "../../assets/icons/evaluations-sidebar-icon.svg";
import { ReactComponent as Profile } from "../../assets/icons/myprofile-sidebar-icon.svg";
import { ReactComponent as People } from "../../assets/icons/people-side-icon.svg";

export const navs = [
    { path: "/dashboard", name: "Dashboard", icon: <Evaluations /> },
    { path: "/profile", name: "My Profile", icon: <Profile /> },
    { path: "/read", name: "Read Center", icon: <People /> },
];
