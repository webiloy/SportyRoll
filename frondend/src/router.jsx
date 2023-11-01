import { Route, Routes } from "react-router-dom";
import transition from "./transition";
import { lazy } from "react";
import Layout from "./Layout";
import { AnimatePresence } from "framer-motion";
import { Home } from "./pages/home/Home";
// LogIn
// const Login = lazy(() => import("./pages/Login/Login"));

// Paths
const routeConfig = [
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "", element: <Home /> }],
  },
];
function MainRoutes() {
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes>
          {routeConfig.map((route, index) => (
            <Route key={index} path={route.path} element={route.element}>
              {route.children &&
                route.children.map((childRoute, childIndex) => (
                  <Route
                    key={childIndex}
                    path={childRoute.path}
                    element={transition(
                      childRoute.element,
                      `${route.path}+${childIndex}`
                    )}
                  />
                ))}
            </Route>
          ))}
        </Routes>
      </AnimatePresence>
    </>
  );
}
export default MainRoutes;
