export function Footer() {
  return (
    <>
      {/* Contact us section */}
      <div className="flex justify-between p-6 bg-gradient-to-br from-secondary to-[#13EA4F] items-center">
        <h2 className="text-text text-lg font-semibold ">Have a Question?</h2>
        <button className="rounded-full p-3 px-5 bg-text">
          <span className="bg-gradient-to-r from-secondary to-[#13EA4F] bg-clip-text text-transparent">
            Contact us
          </span>
        </button>
      </div>
      {/* Footer */}

      <div className="p-6 bg-[#0A0A0A] text-secondary-text text-xs">
        <h4 className="text-[#9A9A9A] mt-8">
          © 2023 Ferrisport. All rights resereved
        </h4>
        <ul className="flex gap-3 flex-wrap child:flex child:gap-3 my-6 border-b pb-6 border-[#5e5e5e]">
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
        <ul className="flex gap-3 flex-wrap child:flex child:gap-3 my-6">
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
    </>
  );
}
