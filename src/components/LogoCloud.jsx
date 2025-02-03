import Logo1 from "../assets/comimgs/1 copy.png";
import Logo2 from "../assets/comimgs/3 copy.png";
import Logo4 from "../assets/comimgs/Project.png";
import Logo5 from '../assets/comimgs/1 copy.png';
import Logo6 from '../assets/comimgs/3 copy.png';

export default function LogoCloud() {
  return (
    <div className="bg-black py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl sm:text-3xl font-semibold text-white">
        Our Ventures
        </h2>
        <div className="mx-auto mt-8 grid grid-cols-5 items-center gap-x-4 sm:gap-x-8 opacity-50">
          {/* Logo 1 */}
          <img
            alt="Brand 1"
            src={Logo1}
            className="max-h-8 sm:max-h-12 w-full object-contain opacity-80 hover:opacity-100"
          />
          {/* Logo 2 */}
          <img
            alt="Brand 1"
            src={Logo5}
            className="max-h-8 sm:max-h-12 w-full object-contain opacity-80 hover:opacity-100"
          />
          {/* Logo 3 */}
          <img
            alt="Brand 1"
            src={Logo6}
            className="max-h-8 sm:max-h-12 w-full object-contain opacity-80 hover:opacity-100"
          />
          {/* Logo 4 */}
          <img
            alt="Brand 2"
            src={Logo2}
            className="max-h-8 sm:max-h-12 w-full object-contain opacity-80 hover:opacity-100"
          />
          {/* Logo 5 */}
          <img
            alt="Brand 3"
            src={Logo4}
            className="max-h-8 sm:max-h-12 w-full object-contain opacity-80 hover:opacity-100"
          />
        </div>
      </div>
    </div>
  );
}