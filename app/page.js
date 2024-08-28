import HeroAria from "./Home/HeroAria";
import HomeAbout from "./Home/HomeAbout";
import Roadmap from "./Home/Roadmap";
export default function Home() {
  return (
    <main>
      <HeroAria />
      <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-8">
        <HomeAbout />
        {/* <HomeCourseSection /> */}
        <Roadmap />
        {/* <HomeConsultantSection /> */}
        {/* <HomeBlogsSection /> */}
        {/* <div>
          <HomeTestimonial />  
        </div> */}
        {/* <HomePartnership /> */}
      </div>
    </main>
  );
}
