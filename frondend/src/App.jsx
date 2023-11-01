import "./App.css";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="bg-[url('./assets/Heroimage.png')] h-screen w-screen z-40"></div>
    </>
  );
}

export default App;
