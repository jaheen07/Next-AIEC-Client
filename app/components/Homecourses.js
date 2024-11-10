"use client";
import { Tab, TabGroup } from "@headlessui/react";
import { useRef } from "react";
import Link from "next/link";
import CourseCard from "../courses/CourseCard";
// import Loader from "../../common/loader/Loader";
// import { IoIosArrowBack } from "react-icons/io";
// import { IoIosArrowForward } from "react-icons/io";
import { LeftOutlined } from "@ant-design/icons";
import { RightOutlined } from "@ant-design/icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const categories = ["Free", "Fundamental", "Professional"];

export default function Homecourses({course}) {
  const courses = course;
  
  let  language  = "en";
  let sliderRef = useRef(null);
  
  const next = () => {
    sliderRef.slickNext();
  };
  
  var settings = {
    className:"center",
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    centerMode: true,
    infinite: true,
    centerPadding: "20px",
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    arrows:false,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        }
      }
    ]
  };
  const cat = [
    "Business Development",
    "Web Development",
    "Cyber Security",
    "Graphics Designing",
    "Health Care",
    "Digital marketing",
    "Real State",
    "Education",
    "Others",
  ];
  
  
//   const sortedcategory = cat?.map((e)=>(courses?.filter((course) => (course.category == e)))).sort().reverse();
  



  
//   if (isLoading) return <Loader />;
  return (
    <div className="mt-5 mb-10 md:mt-20">
      <h2 className="md:text-[40px] text-[28px] font-bold text-center">
        {language == "bn" ? "কোর্স সমূহ" : "Choose Your AI Journey"}
      </h2>
      <h3 className="text-center text-[14px] md:text-[16px] md:px-24">
        {language == "bn"? <>টেক বা নন টেক ব্যাকগ্রাউন্ড সহ যেকোনো প্রফেশন থাকুক না কেনো,<br/> আমাদের ফাউন্ডেশন লেভেল থেকে শুরু করে জব রিকোয়ারমেন্ট বেইজড হ্যান্ডস অন কোর্সের মাধ্যমে নিজেকে এগিয়ে রাখুন এ আই ফিল্ডে।</> : "We are the first-ever Artificial Intelligence based Ed-tech and Consultancy Service Platform in Bangladesh" }
      </h3>

      <div className="px-2 py-5 mx-auto md:py-16 sm:px-0">
        <TabGroup>
          <div className="justify-between md:flex">
            <Tab.List className="flex p-1 mx-auto overflow-x-auto text-black border rounded-lg md:space-x-5 md:w-10/12 whitespace-nowrap">
              {cat.map((cat, idx) =>(
                <Tab
                  key={idx}
                  className={({ selected }) =>
                    `w-full rounded-lg py-2 text-sm  leading-5 text-black
                  ring-white/60 focus:outline-none font-semibold mr-2
                  ${
                    selected
                      ? "bg-black shadow text-white px-2"
                      : "text-black hover:bg-black hover:text-white px-2"
                  }`
                  }
                >
                  {cat}
                </Tab>
              ))}
            </Tab.List>
            <Link
              href="/courses"
              className="flex justify-center mt-5 normal-case border-black btn btn-md btn-ghost btn-outline hover:shadow-lg hover:bg-black hover:text-white md:mt-0"
            >
              {language == "bn" ? "সকল কোর্স দেখুন" : "View All Courses"}
              
            </Link>
          </div>
          <Tab.Panels className="mt-2 ">
            {
              cat.map((cat, index) => (
                <Tab.Panel
                  key={index}
                  className=" md:p-3 focus:outline-none w-[100%] "
                >
                  
                  
                  <div className="relative grid justify-center grid-cols-1 gap-4 px-4">
                    <button className="absolute p-2 md:p-3 left-[-5.4%] border border-red-500 text-red-500 z-[1] top-[45%] rounded-full" onClick={()=>{sliderRef.slickPrev()}}> <LeftOutlined /> </button>
                    <button className="absolute p-2 md:p-3 right-[-5.4%] border border-red-500 text-red-500 z-[1] top-[45%] rounded-full" onClick={()=>{sliderRef.slickNext()}}><RightOutlined /></button>
                    <Slider 
                      ref={slider => {sliderRef = slider;}}
                      {...settings}
                    >
                      {courses
                      .filter((course) => course.category === cat)
                      .slice(0, 8)
                      .map((filteredCourse, idx) => (
                        <div className="px-1 my-3 md:px-4" key={idx}>
                        <CourseCard
                          key={idx}
                          course={filteredCourse}
                        ></CourseCard>
                        </div>
                      ))}
                      
                    </Slider>
                    
                    {courses.filter((course) => course.category === cat)
                      .length === 0 && (
                      <div
                        className="flex items-center justify-center text-center col-span-full"
                        style={{ gridColumn: "1 / -1" }}
                      >
                        <p className="text-lg">Courses are Coming Soon</p>
                      </div>
                    )} 
                  
                  </div>
                  
                  
                  <Link
                    state={courses}
                    href={`/all-courses/${cat}`} // Use the selected category to generate the link
                    className="flex justify-center mx-auto mt-6 btn-view w-fit"
                  >
                     {language == "bn" ? "আরো দেখুন" : "View More"}
                    
                  </Link>
                </Tab.Panel>
              ))
            }
          </Tab.Panels>
        </TabGroup>
      </div>
    </div>
    
  );
};


