export function Footer() {
  return (
    <>
      {/* Contact us section */}
      <div className="flex justify-between p-6 bg-gradient-to-br from-secondary to-[#13EA4F] items-center md:px-16 lg:px-28 max-w-[2000px] m-auto">
        <h2 className="text-text text-lg lg:text-xl font-semibold ">
          Have a Question?
        </h2>
        <button className="rounded-full p-3 px-5 bg-text">
          <span className="bg-gradient-to-r from-secondary to-[#13EA4F] bg-clip-text text-transparent lg:text-lg">
            Contact us
          </span>
        </button>
      </div>
      {/* Footer */}

      <div className="p-6 bg-[#0A0A0A] text-secondary-text text-xs md:px-16 lg:px-28 max-w-[2000px] m-auto ">
        <h4 className="text-[#9A9A9A] mt-8 lg:hidden">
          © 2023 Sporty Roll. All rights resereved
        </h4>
        <div className="flex flex-col lg:flex-row justify-between lg:w-1/3">
          <ul className="flex lg:flex-col lg:gap-4 gap-3 flex-wrap child:flex child:gap-3 my-6 border-b pb-6 lg:pb-0  border-[#5e5e5e] lg:child:child:hidden lg:border-none">
            <li>
              Home <span>|</span>
            </li>
            <li>
              How it Works <span>|</span>
            </li>
            <li>
              FAQ <span>|</span>
            </li>
            <li>
              Get Started <span>|</span>
            </li>
            <li>Join the Discord</li>
          </ul>
          <ul className="flex lg:flex-col lg:gap-4 gap-3 flex-wrap child:flex child:gap-3 mb-6 lg:my-6 lg:child:child:hidden">
            <li>
              Terms of Use <span>|</span>
            </li>
            <li>
              Privacy Policy <span>|</span>
            </li>
            <li>
              About Us <span>|</span>
            </li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
      <h4 className="text-[#9A9A9A] lg:block hidden bg-black py-10 px-28 max-w-[2000px] m-auto text-xs">
        © 2023 Sporty Roll. All rights resereved
      </h4>
    </>
  );
}
