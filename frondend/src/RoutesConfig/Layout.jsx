import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navigation/Navbar";
import { Suspense } from "react";
import { Footer } from "../components/Footer/Footer";
export default function Layout() {
  return (
    <>
      <Navbar></Navbar>
      <Suspense>
        <Outlet></Outlet>
      </Suspense>
      <Footer></Footer>
    </>
  );
}
