import { IoMdClose, IoMdMenu } from 'react-icons/io';
import { navLinks } from '../utils/data';
import { useState } from 'react';

export const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <header className="shadow w-full bg-white fixed top-0 left-0 right-0">
      <nav className="p-4 max-w-screen-xl mx-auto">
        <div className="flex items-center justify-between">
          <a href="#">
            <img src="/src/assets/Logo.png" alt="Brand" />
          </a>

          <ul className="md:flex space-x-6 hidden ">
            {navLinks.map(({ id, link }) => (
              <li key={id} className="cursor-pointer font-Inter-[#1F1534]">
                {link}
              </li>
            ))}
          </ul>

          <div className="md:hidden">
            <button onClick={() => setIsOpenMenu(!isOpenMenu)}>
              {isOpenMenu ? <IoMdClose size={24} /> : <IoMdMenu size={24} />}
            </button>
          </div>
        </div>
        <div
          className={`space-y-4 p-4 ${
            isOpenMenu
              ? 'block fixed top-[73px] right-0 left-0 h-full bg-white md:hidden'
              : 'hidden'
          }`}
        >
          <ul className="flex flex-col gap-3 items-center border-b-2">
            {navLinks.map(({ id, link }) => (
              <li
                key={id}
                className="cursor-pointer font-Inter-[#1F1534] w-full text-center py-2 hover:bg-[#1F1534] hover:text-white transition-colors duration-10 rounded"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};
