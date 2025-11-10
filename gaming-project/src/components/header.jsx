import { useState, useEffect } from 'react';
import "boxicons/css/boxicons.min.css";
const Header = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prevState => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled state to true if user scrolls down more than 10px, else false
      setIsScrolled(window.scrollY > 10);
    };

    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <header
      className={`py-1 px-7 flex justify-between items-center fixed z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-[#0a0a0a]/80 backdrop-blur-lg border-b-[0.4px] border-[#babaff]' : 'bg-transparent border-b-[0.4px] border-transparent'
        }`}
    >
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
        className={`fixed md:hidden top-14 right-0 left-0 bg-[#0a0a0a]/80 backdrop-blur-lg h-screen p-5 transition-transform duration-300 ease-in-out transform ${
          isMobileMenuOpen
            ? "translate-x-0"
            : "translate-x-full"
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
          <button className="bg-blue-600 rounded py-3 mt-4 cursor-pointer hover:bg-green-400">Play Now</button>

          <button className="bg-purple-600 rounded py-3 cursor-pointer hover:bg-amber-400">NFT Store</button>
        </div>
      </div>
      {/* Mobile Menu Button & Nav Ends */}
    </header>
  );
};

export default Header;
