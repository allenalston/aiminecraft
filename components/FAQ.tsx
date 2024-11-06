"use client";

const FAQ = () => {
  const faqs = [
    {
      question: "What is AI Minecraft by Oasis?",
      answer:
        "AI Minecraft powered by Oasis AI is the world's first playable, real-time AI-generated Minecraft-style game. It uses advanced transformer technology to generate gameplay, physics, and graphics in real-time, creating an interactive and dynamic gaming experience.",
    },
    {
      question: "How is Oasis AI Minecraft different from regular Minecraft?",
      answer:
        "Unlike traditional Minecraft, every aspect of Oasis AI Minecraft is generated in real-time by artificial intelligence. This means each world, interaction, and experience is unique and dynamically created as you play, offering endless possibilities for exploration and creativity.",
    },
    {
      question: "What are the system requirements for Oasis Minecraft?",
      answer:
        "Currently, Oasis AI Minecraft runs at 360p at 20fps on modern hardware. With the upcoming Sohu hardware, you'll be able to experience the game in stunning 4K resolution. A stable internet connection is required for the real-time AI generation.",
    },
    {
      question: "Can I play Oasis AI Minecraft with friends?",
      answer:
        "Currently, Oasis AI Minecraft is focused on delivering an amazing single-player experience. Multiplayer features are part of our future development roadmap as we continue to push the boundaries of AI-generated gaming.",
    },
    {
      question: "How does Oasis Decart AI generate the game world?",
      answer:
        "Oasis uses advanced transformer technology and real-time AI generation to create the game world. The system processes your inputs and generates appropriate responses, creating a dynamic and interactive environment that follows consistent physics and game rules.",
    },
  ];

  return (
    <section className="py-20 relative bg-gray-900 bg-opacity-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            Frequently Asked Questions
          </span>
        </h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden"
            >
              <div className="w-full px-8 py-6">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold">{faq.question}</span>
                </div>
                <div className="mt-4 text-gray-400">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
