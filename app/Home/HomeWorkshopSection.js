"use client";
import { useRef,useState,useEffect } from "react";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WorkshopCard from "../workshops/WorkshopCard";


export default function HomeWorkshopSection() {
  const [workshop,setworkshop] = useState([]);
  const  language  = "en";

  let sliderRef = useRef(null);
  
  const next = () => {
    sliderRef.slickNext();
  };
  
  var settings = {
    className:"center",
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    centerMode: true,
    infinite: true,
    centerPadding: "20px",
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    arrows:false,
    
    
  };
    

  useEffect(()=>{
    fetch("https://server.aiexpertcareer.com/workshops")
      .then((res)=>res.json())
      .then((data)=> setworkshop(data))
  },[]);

// if(!workshop) return <Loader/>;
  return (
    <div className="py-5 my-5 rounded-md md:my-20 bg-slate-100 md:py-7 md:px-6">
      <div className="items-stretch grid-cols-2 gap-3 mt-4 md:grid md:mt-0">
        <div className="flex flex-col px-4 text-center md:text-start md:justify-center md:ml-6 ">
          <p className="pb-3 text-red-500">{language === 'bn'?"প্রোজেক্ট বেজড ওয়ার্কশপ" :"Project Based Workshop"}</p>
          <h2 className="text-2xl font-bold md:text-4xl">
            {language === "bn"
              ? <p>প্র্যাক্টিক্যাল স্কিল বৃদ্ধি করুন আমাদের <span className="text-red-500">প্রোজেক্ট বেজড ওয়ার্কশপের মাধ্যমে!</span> </p>
              : <p>Enhance your practical skill with our<span className="text-red-500"> project based workshop</span> </p>}
          </h2>
          <p className="mt-6 md:w-[80%]">
            {language === "bn"
              ? "আপনার কোডিং দক্ষতা বাড়ান আমাদের এই ৪ দিন ব্যাপী ওয়ার্কশপ থেকে শিখে নিয়ে!"
              : "broaden all your coding skill in our 4 days hand-to-hand workshops."}
          </p>
          <div className="mt-5">
            <Link href="/workshops">
              <button className="w-full btn-view md:w-fit">
                {language == "bn" ? "ওয়ার্কশপ গুলো দেখুন" : "See all the workshops "} 
              </button>
            </Link>
          </div>
        </div>
        <div className="p-7">
          <Slider 
            {...settings}      
          >
            {workshop?.slice(0,5).map((c,i) => (
              
                <div key={i}  className="w-full px-5">
                  
                    <WorkshopCard key={c._id} workshop={c}></WorkshopCard>
                  
                </div>
              
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

