import AboutUs from "@/components/about/about";
import Blog from "@/app/blog/page";
import Slider from "@/components/Slider/slider";
import Level from "@/components/levels/page";
import Partner from "@/components/partner/partner";
import Chart from "@/components/chart/chart";

function Home() {
  return (
    <>
      <Slider/>
      <AboutUs/>
      <Blog/>
      <Level/>
      <Partner/>
      <Chart />
    </>
  );
}




export default Home