import Image from "next/image";
import Illustration from "@/public/images/cta-illustration.svg";

const TryNow = () => {
  return (
    <section id="try-now" className="py-20 relative border-t border-slate-800">
      <div
        className="absolute top-0 left-0 right-0 bg-gradient-to-b from-slate-800 to-transparent opacity-25 h-[25rem] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 -mt-8 pointer-events-none -z-10"
        aria-hidden="true"
      >
        <Image
          src={Illustration}
          className="max-w-none"
          alt="Try Now Illustration"
        />
      </div>
      <div className="container mx-auto px-6 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              Try AI Minecraft Today
            </span>
          </h2>
          <p className="text-xl mb-12 text-gray-300">
            Experience the future of gaming with Oasis AI Minecraft. Join
            thousands of players exploring AI-generated worlds.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 max-w-lg mx-auto">
            <a
              href="#ai-minecraft-play"
              className="inline-block px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 
                  rounded-lg font-semibold text-lg hover:from-green-600 hover:to-green-700 
                  transition-all transform hover:scale-105 shadow-lg shadow-green-500/30"
            >
              Play Demo
            </a>
            <a
              href="https://oasis-model.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-gray-800 bg-opacity-50 rounded-lg 
                  font-semibold text-lg hover:bg-opacity-70 transition-all border 
                  border-gray-700 hover:border-gray-600 backdrop-blur-sm"
            >
              Learn More
            </a>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">20+</div>
              <div className="text-gray-400">FPS Performance</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">4K</div>
              <div className="text-gray-400">Resolution Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">∞</div>
              <div className="text-gray-400">Unique Worlds</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TryNow;
