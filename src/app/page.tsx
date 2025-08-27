import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home() {
  return (
    
    <main className="py-2.5 min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <h1 className="text-4xl text-center text-white">MUSIC WORLD</h1>
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
    </main>
  );
}
