import { useState, useEffect } from "react";
import logo from "../assets/favicon.png"; // Ensure the correct path
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

// Navigation Links
const navigation = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Services", href: "/our-services" },
  { name: "About Us", href: "/about" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Change background color on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-20 transition-all duration-300 ${
        isScrolled ? "bg-black shadow-lg" : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 text-white"
      >
        {/* Logo */}
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">KRAF TECHNOLOGY</span>
            <img src={logo} alt="Logo" className="h-6 w-auto" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative text-sm font-normal hover:text-[#18CB96] group"
            >
              <span className="relative">
                {item.name}
                <span className="absolute bottom-0 left-0 h-px w-0 bg-[#18CB96] transition-all duration-300 group-hover:w-full"></span>
              </span>
            </a>
          ))}
        </div>

        {/* #KrafThink2025 */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="/kraf-think-2025" className="text-sm font-normal hover:text-[#18CB96] group">
            <span className="relative">
              #KrafThink2025
              <span className="absolute bottom-0 left-0 h-px w-0 bg-[#18CB96] transition-all duration-300 group-hover:w-full"></span>
            </span>
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <img src={logo} alt="Logo" className="h-6 w-auto" />
            </a>
            <button type="button" onClick={() => setMobileMenuOpen(false)} className="-m-2.5 rounded-md p-2.5 text-gray-700">
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="block px-3 py-2 text-gray-900 hover:text-[#18CB96]">
                {item.name}
              </a>
            ))}
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}