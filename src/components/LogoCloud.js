import React from "react";

function LogoCloud() {
  return (
    <div className="bg-black py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-center text-4xl font-bold text-white mb-4">
          Trusted by the world’s Our Venturs
        </h2>

        {/* Logo Grid */}
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 items-center gap-x-8 gap-y-10 sm:max-w-xl lg:mx-0 lg:max-w-none">
          {[
            {
              name: "Transistor",
              src: "https://www.maklordspharmaceutical.com/_next/image?url=%2Flogo.png&w=256&q=75",
            },
            {
              name: "Reform",
              src: "https://tailwindui.com/plus-assets/img/logos/158x48/reform-logo-gray-900.svg",
            },
            {
              name: "Tuple",
              src: "https://tailwindui.com/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg",
            },
            {
              name: "SavvyCal",
              src: "https://tailwindui.com/plus-assets/img/logos/158x48/savvycal-logo-gray-900.svg",
            },
            {
              name: "Statamic",
              src: "https://tailwindui.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg",
            },
          ].map((logo, index) => (
            <img
              key={index}
              alt={logo.name}
              src={logo.src}
              width={158}
              height={48}
              className="max-h-12 w-auto object-contain mx-auto"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LogoCloud;