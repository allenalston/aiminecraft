import Image from "next/image";
import Illustration from "@/public/images/hero-icon.png";
const Technology = () => {
  const techPoints = [
    "Real-time frame generation at 20 FPS",
    "Dynamic world interaction",
    "Sophisticated physics simulation",
  ];

  return (
    <section
      id="technology"
      className="py-20 relative bg-gray-900 bg-opacity-50"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            The Technology Behind Oasis Minecraft
          </span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-4">
              Advanced AI Architecture
            </h3>
            <p className="text-gray-300">
              Powered by Oasis AI technology, this Minecraft AI experience uses
              state-of-the-art transformer models to generate immersive gameplay
              in real-time.
            </p>
            <ul className="space-y-4">
              {techPoints.map((point, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <svg
                    className="w-5 h-5 text-green-400 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="pt-6">
              <a
                href="https://oasis-model.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors"
              >
                <span>Learn more about the technology</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-2xl hidden md:block">
            <Image
              src={Illustration}
              alt="Oasis AI Technology"
              className="object-cover rounded-xl max-w-full h-auto mx-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
