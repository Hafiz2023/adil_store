import Navbar_page from "./Components/navbar";
import Hero_page from "./HeroPage/page";
import HomeImage from "./HomeImage/page";

export default function Home() {
  return (
    <div>
      <Navbar_page />

      <HomeImage />
      <Hero_page />
    </div>
  );
}
