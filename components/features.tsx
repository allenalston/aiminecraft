import Image from "next/image";
import Illustration from "@/public/images/features-illustration.svg";

const features = [
  {
    title: "Real-time Generation",
    description:
      "Experience Oasis AI Minecraft in real-time with 20 FPS gameplay, powered by advanced transformer technology.",
    icon: (
      <svg
        className="w-8 h-8 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: "Interactive World",
    description:
      "Build, break blocks, and explore in this AI-generated Minecraft universe created by Oasis Decart AI.",
    icon: (
      <svg
        className="w-8 h-8 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
        />
      </svg>
    ),
  },
  {
    title: "Next-Gen Graphics",
    description:
      "Experience Minecraft AI with stunning 4K resolution support on upcoming Sohu hardware.",
    icon: (
      <svg
        className="w-8 h-8 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 relative">
      <div
        className="absolute left-1/2 -translate-x-1/2 pointer-events-none -mt-[10rem] -z-10"
        aria-hidden="true"
      >
        <Image
          src={Illustration}
          className="max-w-none"
          width="1440"
          height="440"
          alt="AI Minecraft Illustration"
        />
      </div>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            Revolutionary AI Minecraft Technology
          </span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 bg-opacity-50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-green-500/50 transition-all transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg mb-6 flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
