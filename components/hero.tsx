"use client";

export default function Hero() {
  return (
    <section className="relative">
      <div className="relative w-full mx-auto ">
        <div className="pt-32 md:pt-40">
          {/* Hero content */}
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6" data-aos="fade-up">
              Experience{" "}
              <span className="bg-gradient-to-r from-green-500 to-green-100 bg-clip-text text-transparent">
                AI Minecraft
              </span>{" "}
              Like Never Before
            </h1>
            <p
              className="text-xl text-slate-300 mb-10"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              The world's first playable, real-time AI-generated Minecraft-style
              game powered by Oasis AI technology
            </p>
          </div>
          {/* Iframe */}
          <div
            className="pt-16 md:pt-20 relative group"
            data-aos="fade-up"
            id="ai-minecraft-play"
            data-aos-delay="300"
          >
            {/* Fullscreen button */}
            <button
              className="absolute top-[64px] right-2 md:top-[80px] md:right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-lg transition-colors"
              onClick={() => {
                const iframe = document.querySelector(
                  "#minecraft-iframe"
                ) as HTMLIFrameElement;
                if (iframe) {
                  iframe.requestFullscreen().catch((err) => {
                    console.log("Error attempting to enable fullscreen:", err);
                  });
                }
              }}
              aria-label="Fullscreen"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                />
              </svg>
            </button>

            <iframe
              id="minecraft-iframe"
              src="https://oasis.decart.ai/welcome"
              className="w-full md:aspect-video h-[800px] md:h-auto"
              title="AI Minecraft"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
