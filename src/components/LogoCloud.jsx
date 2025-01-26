import Logo1 from "../assets/comimgs/1 copy.png";
import Logo2 from "../assets/comimgs/3 copy.png";
import Logo4 from "../assets/comimgs/Project.png";

export default function LogoCloud() {
    return (
      <div className="bg-black py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-4xl font-semibold text-white">
            Meets Our Brands
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-3 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <img
              alt="Transistor"
              src={Logo1}
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />
            <img
              alt="Reform"
              src={Logo2}
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />
            <img
              alt="SavvyCal"
              src={Logo4}
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            />
          </div>
        </div>
      </div>
    )
  }
  