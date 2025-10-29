import About from "./About/page";
import BestSellers from "./BestSellers/page";

import CustomerReviews from "./CustomerReviews/page";
import Hero_page from "./HeroPage/page";
import HomeImage from "./HomeImage/page";
import Newsletter from "./Newsletter/page";

export default function Home() {
  return (
    <div>
   
      <HomeImage />
      <Hero_page />
      <BestSellers />
      <CustomerReviews />
      <Newsletter />
      <About />
    </div>
  );
}
