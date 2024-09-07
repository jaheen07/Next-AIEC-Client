// import CategoryCard from "./CategoryCard";
// import BlogCard from "./BlogCard";
// import Loader from "../../common/loader/Loader";
import Link from "next/link";
import NewsLetter from "./NewsLetter";
import FeaturedBlogs from "./featuredblog";
import Middlepart from "./middlepart";
// import ReactGA from "react-ga4";


const Blog = () => {
  const  language  = "en";

  return (
    <div className="px-4 py-5 mx-auto mt-20 overflow-hidden md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
        <div>
           <FeaturedBlogs/>
           
        </div>

        <Middlepart/>

        
      
      
      <div className="md:my-10">
      <NewsLetter/>
      </div>
    </div>
  );
};

export default Blog;
