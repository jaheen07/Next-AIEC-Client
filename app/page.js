import HeroAria from "./Home/HeroAria";
import HomeAbout from "./Home/HomeAbout";
import Roadmap from "./Home/Roadmap";
import HomePartners from "./Home/HomePartners";
import HomeCourseSection from "./Home/HomeCourseSection";
import HomeWorkshopSection from "./Home/HomeWorkshopSection";
import HomeTestimonial from "./Home/HomeTestimonial";
import HomeBlogsSection from "./Home/HomeBlogsSection";

export default function Home() {
  
  return (
    <main>
      <HeroAria />
      <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-8">
        <HomeAbout />
        <HomeCourseSection/>
        <Roadmap />
        <HomeBlogsSection />
        <HomeWorkshopSection />
        <HomeTestimonial /> 
        <HomePartners />
        
        
      </div>
    </main>
  );
}
