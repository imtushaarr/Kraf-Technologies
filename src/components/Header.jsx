'use client';
import logo from '../assets/favicon.png';
import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Add your current path detection logic here
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/';

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Services', href: '/services' },
    { name: 'About Us', href: '/about-us' },
  ];

  return (
    <header className="bg-black">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">KRAF TECHNOLOGY</span>
            <img src={logo} alt="" className="h-6 w-auto" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`relative text-sm font-normal text-white hover:text-[#18CB96] group ${
                currentPath === item.href ? 'active' : ''
              }`}
            >
              <span className="relative">
                {item.name}
                <span className="absolute bottom-0 left-0 h-px w-0 bg-[#18CB96] transition-all duration-300 group-hover:w-full group-[.active]:w-full"></span>
              </span>
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="/kraf-think-2025"
            className="text-sm font-normal text-white hover:text-[#18CB96] group"
          >
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
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Kraf Technologies</span>
              <img src={logo} alt="" className="h-6 w-auto" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`-mx-3 block rounded-lg px-3 py-2 text-base font-normal text-gray-900 hover:text-[#18CB96] group ${
                      currentPath === item.href ? 'active' : ''
                    }`}
                  >
                    <span className="relative">
                      {item.name}
                      <span className="absolute bottom-0 left-0 h-px w-0 bg-[#18CB96] transition-all duration-300 group-hover:w-full group-[.active]:w-full"></span>
                    </span>
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="/kraf-think-2025"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-normal text-gray-900 hover:text-[#18CB96] group"
                >
                  <span className="relative">
                    #KrafThink2025
                    <span className="absolute bottom-0 left-0 h-px w-0 bg-[#18CB96] transition-all duration-300 group-hover:w-full"></span>
                  </span>
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}