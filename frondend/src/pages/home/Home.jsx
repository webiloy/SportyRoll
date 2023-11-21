import { HeroSec } from "./components/HeroSec";
import { Features } from "./components/Features";
import { Hiw } from "./components/Hiw";
import { Cfa } from "./components/Cfa";
import { Faq } from "./components/Faq";
import { useContext } from "react";
import { WebsiteContext } from "../../context/WebsiteContext";
export function Home() {
  const { auth } = useContext(WebsiteContext);
  if (auth) window.location.href = "/discovery";
  return (
    <>
      {!auth && (
        <>
          <HeroSec></HeroSec> <Features></Features> <Hiw></Hiw> <Cfa></Cfa>
          <Faq></Faq>
        </>
      )}
    </>
  );
}
