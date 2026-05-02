import FeaturedBooks from "@/components/homePage/FeaturedBooks";
import Hero from "@/components/homePage/Hero";
import MarqueeDesign from "@/components/homePage/Marquee";
import MembershipSection from "@/components/homePage/MembershipSection";
import ReviewSection from "@/components/homePage/ReviewSection";


export default function Home() {
  return (
    <div>
      <Hero />
      <MarqueeDesign />
      <FeaturedBooks/>
      <MembershipSection/>
      <ReviewSection/>
    </div>

  );
}
