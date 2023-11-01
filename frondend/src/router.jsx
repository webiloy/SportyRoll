import { Routes } from "react-router-dom";
import { RouterRender } from "./RoutesConfig/RouterRender";
import Layout from "./RoutesConfig/Layout";
import { AnimatePresence } from "framer-motion";
import { Home } from "./pages/home/Home";
import { Login } from "./pages/UserAuth/login/Login";
import { Signup } from "./pages/UserAuth/signup/Signup";
import { NotFoundPage } from "./pages/404/404";
// Paths
const routePaths = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
  { path: "signup", element: <Signup /> },
  { path: "login", element: <Login /> },
];
function MainRoutes() {
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes>{RouterRender(routePaths)}</Routes>
      </AnimatePresence>
    </>
  );
}
export default MainRoutes;
