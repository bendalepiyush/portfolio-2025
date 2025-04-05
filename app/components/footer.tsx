export default function Footer() {
  return (
    <footer className="container py-24 px-4 md:px-0">
      <div className="py-12 relative w-full">
        <p className="text-[7rem] md:text-[200px] tracking-tighter leading-none">
          Piyush Bendale<sup>*</sup>
        </p>

        <img
          src="/piyush-bendale.png"
          alt="Piyush Bendale"
          className="absolute top-0 right-0 w-72 rotate-12 hidden md:block"
        />
      </div>

      <div className="flex flex-col md:flex-row gap-12 justify-between">
        <div>
          <ul className="text-xl md:text-2xl font-light w-96">
            <li className="py-4 border-y border-[rgba(0,0,0,0.1)] w-full display-block">
              LinkedIn
            </li>
            <li className="py-4 border-y border-[rgba(0,0,0,0.1)] w-full display-block">
              Dribbble
            </li>
            <li className="py-4 border-y border-[rgba(0,0,0,0.1)] w-full display-block">
              Instagram
            </li>
          </ul>
        </div>
        <div className="text-2xl md:text-3xl font-light md:text-right space-y-4 md:w-1/3 leading-normal">
          <p>Boost your user retention and user engagement</p>
          <p className="font-medium">bendalepiyush73@gmail.com</p>
        </div>
      </div>

      <p className="mt-24 mb-12">&copy; 2025, All Rights Reserved</p>
    </footer>
  );
}
