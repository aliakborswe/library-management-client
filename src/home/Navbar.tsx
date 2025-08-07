import { useEffect, useState, type ReactNode } from "react";
import { BookOpenText, Menu, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link, NavLink, useLocation } from "react-router";

const navItems = [
  { name: "Home", to: "/" },
  { name: "All Books", to: "/all-books" },
  { name: "Add Book", to: "/add-book" },
  { name: "Borrow Summary", to: "borrow-summary" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Modified navbar scrolling effect
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // New: Track if scrolled for home page
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (pathname !== "/") {
      setScrolled(false);
      return;
    }
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        // Show navbar when scrolling up or near top
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  // Render navigation links (used for both desktop and mobile)
  const renderNavLinks = () => {
    return (
      <div className='flex flex-col items-start gap-5 lg:flex-row lg:items-center lg:gap-9 '>
        {navItems.map((item) => (
          <div key={item.name} className='relative'>
            <ActiveLink to={item.to}>{item.name}</ActiveLink>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <header
        className={`w-full h-[78px] fixed flex items-center top-0 left-0 z-50 transition-transform duration-300 bg-background
        ${isVisible ? "translate-y-0" : "-translate-y-full"} ${
          pathname === "/"
            ? scrolled
              ? "shadow-2xs"
              : "shadow-2xs"
            : "shadow-2xs"
        }
      `}
      >
        <nav
          id='header'
          className={`container mx-auto px-2.5 flex items-center justify-between relative`}
        >
          {/* Logo */}
          <Link to='/' className='flex items-center gap-1'>
            <BookOpenText className='text-chart-2 w-8 h-8' />
            <div className='text-chart-2 font-bold text-2xl'>BookFlow</div>
          </Link>

          {/* Desktop Nav */}
          <div className='hidden lg:block'>{renderNavLinks()}</div>

          {/* Right Actions */}
          <div className='block lg:hidden'>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <div className='text-black'>
                  {open ? (
                    <X className='h-8 w-8' />
                  ) : (
                    <Menu className='h-8 w-8' />
                  )}
                </div>
              </SheetTrigger>
              <SheetTitle>{""}</SheetTitle>
              <SheetDescription>{""}</SheetDescription>
              <SheetContent
                side='left'
                className='w-3/4 sm:w-1/2 rounded-r bg-background border-none text-primary overflow-auto'
              >
                <div className='flex flex-col gap-2 mt-10 mx-2.5'>
                  {renderNavLinks()}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </header>
    </>
  );
};
export default Navbar;

interface IActiveLink {
  to: string;
  children: ReactNode;
}

export const ActiveLink = ({ to, children }: IActiveLink) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => `text-md font-semibold text-primary ${isActive ? "text-chart-2" : ""}`}
    >
      {children}
    </NavLink>
  );
};
