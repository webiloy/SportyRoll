export function Navbar() {
  return (
    <div className="flex justify-between p-6 px-12 fixed z-50 top-0 w-full text-white items-center child:items-center h-[5.5rem]">
      <div className="flex gap-12 ">
        <h1 className="font-extrabold text-lg cursor-pointer">Sporty Roll</h1>
        <ul className="flex gap-6 child:cursor-pointer">
          <li>Discover</li>
          <li>Diary</li>
          <li>Calculator</li>
          <li>Contact us</li>
        </ul>
      </div>

      <div className="flex gap-12 child:cursor-pointer">
        <h3>Sign Up</h3>
        <button className="bg-secondary p-2 px-10 rounded-lg font-bold text-text">
          Login
        </button>
      </div>
    </div>
  );
}
