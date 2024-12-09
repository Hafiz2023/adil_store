import HeroPage from "./Components/HeroPage";
import Navbar_page from "./Components/navbar";
import HomeImage from "./HomeImage/page";


export default function Home() {
  return (
    <div>
      <Navbar_page/>
      <HomeImage/>
      <HeroPage />
    </div>
  );
}
