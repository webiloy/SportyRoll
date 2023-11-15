import { Routes } from "react-router-dom";
import { RouterRender } from "./RoutesConfig/RouterRender";
import Layout from "./RoutesConfig/Layout";
import { AnimatePresence } from "framer-motion";
import { Home } from "./pages/home/Home";
import { Login } from "./pages/UserAuth/login/Login";
import { Signup } from "./pages/UserAuth/signup/Signup";
import { NotFoundPage } from "./pages/404/404";
import { useState } from "react";
import { WebsiteContext } from "./context/WebsiteContext";
import { getCookie } from "./utils/cookies";
import { Exercises } from "./pages/Library/Exercises";
import { Workouts } from "./pages/Library/Workouts";
import UserSettings from "./pages/UserSettings/UserSettings";
function MainRoutes() {
  // is Logged In
  const [isSigned, setIsSigned] = useState(
    getCookie("access_token") ? true : false
  );
  // Paths
  const routePaths = [
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "", element: !isSigned ? <Home /> : <h1>Hello</h1> },
        { path: "*", element: <NotFoundPage /> },
      ],
    },
    {
      path: "library",
      element: <Layout />,
      children: [
        { path: "exercises", element: <Exercises /> },
        { path: "workouts", element: <Workouts /> },
        { path: "*", element: <NotFoundPage /> },
      ],
    },
    {
      path: "user",
      element: <Layout />,
      children: [
        { path: "profile", element: <UserSettings page={"profile"} /> },
        { path: "password", element: <UserSettings page={"password"} /> },
      ],
    },
    { path: "signup", element: <Signup /> },
    { path: "login", element: <Login /> },
  ];
  return (
    <WebsiteContext.Provider value={{ setIsSigned, isSigned }}>
      <AnimatePresence mode="wait">
        <Routes>{RouterRender(routePaths)}</Routes>
      </AnimatePresence>
    </WebsiteContext.Provider>
  );
}
export default MainRoutes;
