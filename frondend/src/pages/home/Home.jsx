import { HeroSec } from "./components/HeroSec";
import { Features } from "./components/Features";
import { Hiw } from "./components/Hiw";
import { Cfa } from "./components/Cfa";
import { Faq } from "./components/Faq";
import { Footer } from "./components/Footer";
export function Home() {
  return (
    <>
      <HeroSec></HeroSec> <Features></Features> <Hiw></Hiw> <Cfa></Cfa>
      <Faq></Faq>
      <Footer></Footer>
    </>
  );
}
