import Logo1 from "../assets/comimgs/1 copy.png";
import Logo2 from "../assets/comimgs/3 copy.png";
import Logo4 from "../assets/comimgs/Project.png";

export default function LogoCloud() {
  return (
    <div className="bg-black py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl sm:text-3xl font-semibold text-white">
          Meets Our Brands
        </h2>
        <div className="mx-auto mt-8 grid max-w-lg grid-cols-2 items-center gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-3 sm:gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {/* Logo 1 */}
          <img
            alt="Brand 1"
            src={Logo1}
            className="col-span-1 max-h-10 sm:max-h-12 w-full object-contain"
          />
          {/* Logo 2 */}
          <img
            alt="Brand 2"
            src={Logo2}
            className="col-span-1 max-h-10 sm:max-h-12 w-full object-contain"
          />
          {/* Logo 3 */}
          <img
            alt="Brand 3"
            src={Logo4}
            className="col-span-1 max-h-10 sm:max-h-12 w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}