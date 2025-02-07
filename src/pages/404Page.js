import React from "react";

export default function NotFound() {
  return (
    <div className="h-full flex items-center justify-center bg-black px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-[#18CB96]">404</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-white sm:text-7xl">
          Page not found
        </h1>
        <p className="mt-6 text-lg text-gray-300 sm:text-xl">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="/"
            className="rounded-md bg-[#18CB96] px-4 py-2 text-sm font-semibold text-black shadow hover:bg-[#18CB96]/80 focus:outline focus:ring-2 focus:ring-indigo-600"
          >
            Go back home
          </a>
          <a href="/contact-us" className="text-sm font-semibold text-gray-200">
            Contact support <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
}