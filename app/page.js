import HeroSection from "@/components/hero/HeroSection";
import CardsSection from "@/components/projects/CardsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="flex justify-center py-5 mt-10">
        <CardsSection />
      </div>
    </>
  );
}
