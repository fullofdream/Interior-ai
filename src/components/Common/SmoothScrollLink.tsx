"use client";

import Link from 'next/link';
import { Menu } from "@/types/menu";
import { usePathname } from "next/navigation";

interface SmoothScrollLinkProps {
  menuItem: Menu;
}

const SmoothScrollLink: React.FC<SmoothScrollLinkProps> = ({ menuItem }) => {
  const pathname = usePathname();

  const handleClick = (e) => {
    if (pathname === "/") {
      e.preventDefault();
      document.querySelector(menuItem.path)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      setTimeout(() => {
        document.querySelector(menuItem.path)?.scrollIntoView({ behavior: 'smooth' });
      }, 200);
    }
  };

  return (
    <Link
      href="/"
      onClick={handleClick}
      passHref
      className="flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
    >
      {menuItem.title}
    </Link>
  );
};

export default SmoothScrollLink;