import React from 'react';

const NavbarSkeleton = () => {
  return (
    <>
      <nav
        className={`hidden lg:flex z-50 fixed py-2 shadow-lg w-full items-center justify-between px-6 bg-white dark:text-white dark:bg-zinc-950 animate-pulse`}
      >
      </nav>

      <nav
        className={`flex flex-col lg:hidden z-50 fixed py-2 shadow-lg w-full px-6 bg-white dark:bg-zinc-950 animate-pulse`}
      >
      </nav>
    </>
  );
};

export default NavbarSkeleton;
