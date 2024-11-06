import Link from "next/link";

export default function Header({ nav = true }: { nav?: boolean }) {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
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

              <span className="text-white text-2xl font-bold">
                AI Minecraft
              </span>
            </Link>
          </div>
          {/* Desktop navigation */}
          {nav && (
            <nav className="flex grow">
              {/* Desktop sign in links */}
              <ul className="flex grow justify-end flex-wrap items-center">
                <li className="ml-3">
                  <Link
                    className="btn-sm text-white bg-green-500 hover:bg-green-600 w-full shadow-sm group"
                    href="#ai-minecraft-play"
                  >
                    Play Now
                  </Link>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
