import { useEffect, useState, lazy } from "react";
import { Routes } from "react-router-dom";
import Loading from "./components/animations/Loading";
import { useQuery } from "@tanstack/react-query";
import { Toaster, toast } from "sonner";
import Getuserinfo from "./hooks/information/Getuserinfo";
import { WebsiteContext } from "./context/WebsiteContext";
// Pages
import { Home } from "./pages/home/Home";
import { Login } from "./pages/UserAuth/login/Login";
import { Signup } from "./pages/UserAuth/signup/Signup";
import { Exercises } from "./pages/Library/Exercises";
import { Workouts } from "./pages/Library/Workouts";
import { NotFoundPage } from "./pages/404/404";
import UserSettings from "./pages/UserSettings/UserSettings";
import Diray from "./pages/Diray/Diray";
// Router
import { RouterRender } from "./RoutesConfig/RouterRender";
import Layout from "./RoutesConfig/Layout";
import { AnimatePresence } from "framer-motion";
import { element } from "prop-types";
function MainRoutes() {
  // is Logged In
  const [auth, setAuth] = useState(null);
  const { data, status } = useQuery({
    queryKey: ["UserData"],
    queryFn: Getuserinfo,
    retry: false,
    enabled: auth === null,
  });
  useEffect(() => {
    if (status === "success") setAuth(data ? true : false);
  }, [status, data]);
  useEffect(() => {
    if (auth?.message) toast.success(auth?.message);
  }, [auth]);
  // Paths
  const routePaths = [
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "", element: <Home /> },
        { path: "diary", element: <Diray /> },
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
  const Contextobject = {
    setAuth,
    auth,
    data,
  };
  return (
    <WebsiteContext.Provider value={Contextobject}>
      <Toaster richColors />
      <AnimatePresence mode="wait">
        {auth === null && (
          <Loading
            size={"w-screen h-screen"}
            color={"stroke-secondary"}
          ></Loading>
        )}
        {auth !== null && <Routes>{RouterRender(routePaths)}</Routes>}
      </AnimatePresence>
    </WebsiteContext.Provider>
  );
}
export default MainRoutes;
