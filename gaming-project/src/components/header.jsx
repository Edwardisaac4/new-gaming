import { useState } from 'react';
import "boxicons/css/boxicons.min.css";
const Header = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prevState => !prevState);
  };

  return (
    <header className="py-1 px-7 flex justify-between border-b-[0.4px] items-center fixed z-50 w-full bg-[#0a0a0a] border-[#babaff]">
      {/* Desktop Menu */}

      <div className="lg:gap-14 items-center flex gap-4 ">
        <img className="md:w-16 w-12" src="images/logo.png" alt="" />

        <div className="hidden md:flex gap-5 items-center">
          <button
            className="h-8 px-6 bg-linear-to-r from bg-purple-500 to rounded-lg font-medium text-nowrap hover:from-purple-600 hover:to-indigo-700 text-white
                 transition-colors duration-300"
          >
            Play Now
          </button>

          <button
            className="h-8 px-6 bg-linear-to-r from to
                 bg-gray-600 rounded-lg font-medium text-nowrap hover:from-blue-600 hover:to-gray-700 text-white
                 transition-colors duration-300"
          >
            Play Now
          </button>
        </div>
      </div>

      <nav className="md:flex hidden lg:gap-8 gap-4">
        <a
          href="#"
          className='relative py-1 text-lg hover:text-purple-600 transition-colors duration-300
           after:content-[""] after:absolute after:w-0 h-0.5 after:bg-purple-700 after:bottom-0 after:left-0
           after:transition-all hover:after:w-full text-nowrap
        '
        >
          <i class="bx bxs-user"></i> AVATAR
        </a>

        <a
          href="#"
          className='relative py-1 text-lg hover:text-purple-600 transition-colors duration-300
           after:content-[""] after:absolute after:w-0 h-0.5 after:bg-purple-700 after:bottom-0 after:left-0
           after:transition-all hover:after:w-full text-nowrap
        '
        >
          <i class="bx bxs-user"></i> AVATAR
        </a>

        <a
          href="#"
          className='relative py-1 text-lg hover:text-purple-600 transition-colors duration-300
           after:content-[""] after:absolute after:w-0 h-0.5 after:bg-purple-700 after:bottom-0 after:left-0
           after:transition-all hover:after:w-full text-nowrap
        '
        >
          <i class="bx bxs-user"></i> AVATAR
        </a>

        <a
          href="#"
          className='relative py-1 text-lg hover:text-purple-600 transition-colors duration-300
           after:content-[""] after:absolute after:w-0 h-0.5 after:bg-purple-700 after:bottom-0 after:left-0
           after:transition-all hover:after:w-full text-nowrap
        '
        >
          <i class="bx bxs-user"></i> AVATAR
        </a>
      </nav>
      {/* Desktop Menu Ends */}

      {/* Mobile Menu Button & Nav */}
      <button className="md:hidden text-3xl text-white" onClick={toggleMobileMenu}>
        <i className={isMobileMenuOpen ? "bx bx-x" : "bx bx-menu"}></i>
      </button>

      <div
        id="mobileMenu"
        className={`fixed md:hidden top-14 right-0 left-0 bg-black p-5 transition-all duration-300 ease-in-out transform ${
          isMobileMenuOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-4"
        }`}
      >
        <nav className="flex-col flex items-center gap-9">
          <a
            href="#"
            className='relative py-1 text-lg hover:text-purple-600 transition-colors duration-300
           after:content-[""] after:absolute after:w-0 h-0.5 after:bg-purple-700 after:bottom-0 after:left-0
           after:transition-all hover:after:w-full text-nowrap
        '
          >
            <i class="bx bxs-user"></i> AVATAR
          </a>

          <a
            href="#"
            className='relative py-1 text-lg hover:text-purple-600 transition-colors duration-300
           after:content-[""] after:absolute after:w-0 h-0.5 after:bg-purple-700 after:bottom-0 after:left-0
           after:transition-all hover:after:w-full text-nowrap
        '
          >
            <i class="bx bxs-user"></i> AVATAR
          </a>

          <a
            href="#"
            className='relative py-1 text-lg hover:text-purple-600 transition-colors duration-300
           after:content-[""] after:absolute after:w-0 h-0.5 after:bg-purple-700 after:bottom-0 after:left-0
           after:transition-all hover:after:w-full text-nowrap
        '
          >
            <i class="bx bxs-user"></i> AVATAR
          </a>

          <a
            href="#"
            className='relative py-1 text-lg hover:text-purple-600 transition-colors duration-300
           after:content-[""] after:absolute after:w-0 h-0.5 after:bg-purple-700 after:bottom-0 after:left-0
           after:transition-all hover:after:w-full text-nowrap
        '
          >
            <i class="bx bxs-user"></i> AVATAR
          </a>
        </nav>

        <div className="flex flex-col gap-4 mt-6">
          <button className="bg-blue-600 rounded py-3 mt-4">Play Now</button>

          <button className="bg-purple-600 rounded py-3">NFT Store</button>
        </div>
      </div>
      {/* Mobile Menu Button & Nav Ends */}
    </header>
  );
};

export default Header;
