import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Suspense } from "react";
export default function Layout() {
  return (
    <>
      <Navbar></Navbar>
      <Suspense>
        <Outlet></Outlet>
      </Suspense>
    </>
  );
}
