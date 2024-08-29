import HeroAria from "./Home/HeroAria";
import HomeAbout from "./Home/HomeAbout";
import Roadmap from "./Home/Roadmap";
import HomePartners from "./Home/HomePartners";
import HomeCourseSection from "./Home/HomeCourseSection";
// import getcourses from "@/lib/getcourses";
export default function Home() {
  // const course = await getcourses();
  return (
    <main>
      <HeroAria />
      <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-8">
        <HomeAbout />
        <HomeCourseSection/>
        <Roadmap />
        <HomePartners />
        {/* 
        
        <HomeWebinarSection />
        <HomeBlogsSection />
        <div>
          <HomeTestimonial />  
        </div>
        */}
      </div>
    </main>
  );
}
