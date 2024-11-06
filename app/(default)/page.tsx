import Hero from "@/components/hero";
import Testimonials from "@/components/testimonials";
import Features from "@/components/features";
import Features02 from "@/components/features-02";
import Integrations from "@/components/integrations";
import Pricing from "@/components/pricing";
import Faqs from "@/components/faqs";
import Cta from "@/components/cta";
import Technology from "@/components/Technology";
import TryNow from "@/components/TryNow";
import FAQ from "@/components/FAQ";
import GameplayResults from "@/components/GameplayResults";
export default function Home() {
  return (
    <>
      <Hero />
      {/* <Testimonials /> */}
      <Features />
      <GameplayResults />
      <Technology />
      {/* <Integrations /> */}
      <FAQ />
      <TryNow />
    </>
  );
}
