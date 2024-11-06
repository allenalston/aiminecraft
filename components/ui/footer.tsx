import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Blocks */}
        <div className="grid sm:grid-cols-12 lg:grid-cols-10 gap-8 py-8 md:py-12 border-t border-slate-800">
          {/* 1st block - Logo */}
          <div className="sm:col-span-6 lg:col-span-3">
            <div className="mb-2">
              {/* Logo */}
              <Link
                className="flex items-center gap-4"
                href="/"
                aria-label="AI Minecraft"
              >
                <svg
                  className="w-8 h-8"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient
                      x1="0%"
                      y1="32.443%"
                      x2="104.18%"
                      y2="50%"
                      id="hlogo-a"
                    >
                      <stop stopColor="#FFF" stopOpacity=".299" offset="0%" />
                      <stop stopColor="#22C55E" stopOpacity="0" offset="100%" />
                    </linearGradient>
                    <linearGradient
                      x1="18.591%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                      id="hlogo-b"
                    >
                      <stop stopColor="#4ADE80" offset="0%" />
                      <stop stopColor="#BBF7D0" offset="100%" />
                    </linearGradient>
                  </defs>
                  <g fill="none" fillRule="evenodd">
                    <path fill="#166534" d="M16 18.5V32l15.999-9.25V9.25z" />
                    <path fill="#16A34A" d="m0 23 16 9V18.501L0 9.251z" />
                    <path
                      fillOpacity=".64"
                      fill="url(#hlogo-a)"
                      d="M16 13 0 23l16 9 16-9z"
                    />
                    <path
                      fill="url(#hlogo-b)"
                      d="M16 0 0 9.25l16 9.25 15.999-9.25z"
                    />
                  </g>
                </svg>

                <span className="text-white text-xl font-bold">
                  AI Minecraft
                </span>
              </Link>
            </div>
            {/* Social links */}
            {/* <ul className="flex mb-4 md:order-1 md:mb-0">
              <li>
                <a
                  className="flex justify-center items-center text-green-500 hover:text-green-300 transition duration-150 ease-in-out"
                  href="#"
                  aria-label="Twitter"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
                  </svg>
                </a>
              </li>
            </ul> */}
            {/* Links */}
          </div>

          {/* Product menu - pushed to right */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-3 lg:col-start-10">
            <h6 className="text-xs text-slate-200 font-semibold uppercase underline mb-3">
              Product
            </h6>
            <ul className="text-sm space-y-2">
              <li>
                <a
                  className="text-slate-500 hover:text-slate-300 transition duration-150 ease-in-out"
                  href="#features"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  className="text-slate-500 hover:text-slate-300 transition duration-150 ease-in-out"
                  href="#technology"
                >
                  Technology
                </a>
              </li>
              <li>
                <a
                  className="text-slate-500 hover:text-slate-300 transition duration-150 ease-in-out"
                  href="#ai-minecraft-play"
                >
                  Demo
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between pb-4 md:pb-8">
          <div className="text-sm text-slate-600">
            <span className="text-sm text-gray-500">
              &copy; 2024 Oasis AI Minecraft. All rights reserved.
            </span>
            {/* 
            <a
              className="text-slate-500 hover:text-slate-300 transition duration-150 ease-in-out"
              href="#0"
            >
              Terms
            </a>{" "}
            ·{" "}
            <a
              className="text-slate-500 hover:text-slate-300 transition duration-150 ease-in-out"
              href="#0"
            >
              Privacy Policy
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
