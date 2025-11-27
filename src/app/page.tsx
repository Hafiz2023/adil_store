import AboutSection from "@/components/home/AboutSection";
import BestSellers from "@/components/home/BestSellers";
import CustomerReviews from "@/components/home/CustomerReviews";
import HeroSection from "@/components/home/HeroSection";
import HomeImage from "@/components/home/HomeImage";
import Newsletter from "@/components/home/Newsletter";

export default function Home() {
  return (
    <div>
      <HomeImage />
      <HeroSection />
      <BestSellers />
      <CustomerReviews />
      <Newsletter />
      <AboutSection />
    </div>
  );
}
