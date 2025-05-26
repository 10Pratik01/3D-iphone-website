import { appleImg, bagImg, searchImg } from '../utils';
import { navLists } from '../constants';

const Navbar = () => {
  return (
    <header className="flex justify-center">
      <nav className="flex justify-around w-full screem-max-width">
        <img src={appleImg} alt="Apple" width={14} height={18} />

        <div className="flex gap-x-5 ">
          {navLists.map((nav) => (
            <div key={nav} className="cursor-pointer text-gray-500 hover:text-white transition-all">
              {nav}
            </div>
          ))}
        </div>

        <div className="flex gap-7 cursor-pointer">
          <img src={searchImg} alt="search" width={18} height={18} />
          <img src={bagImg} alt="bag" width={18} height={18} />
        </div>
      </nav>
    </header>
  )
}

export default Navbar