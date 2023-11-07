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
        {
          path: "",
          element: !isSigned ? <Home /> : <h1>Hello</h1>,
        },
        { path: "*", element: <NotFoundPage /> },
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
