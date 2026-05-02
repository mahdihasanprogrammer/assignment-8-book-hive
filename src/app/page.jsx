import FeaturedBooks from "@/components/homePage/FeaturedBooks";
import Hero from "@/components/homePage/Hero";
import MarqueeDesign from "@/components/homePage/Marquee";
import ReviewSection from "@/components/homePage/ReviewSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <MarqueeDesign />
      <FeaturedBooks/>
      <ReviewSection/>
    </div>

  );
}
