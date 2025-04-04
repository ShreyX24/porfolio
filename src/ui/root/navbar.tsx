import { Logo } from '../../components/navbar/logo';
import { NavBtns } from '../../components/navbar/nav-btns';

export const Navbar = () => {
  return (
    <div className="relative flex h-[150px] w-full items-start justify-between border-b-4 border-gray-900 px-10">
      {/* Logo*/}
      <Logo />

      <div className="flex h-full w-full items-center justify-center space-x-[100px]">
        {/* Nav items */}
        <NavBtns />
      </div>
    </div>
  );
};
