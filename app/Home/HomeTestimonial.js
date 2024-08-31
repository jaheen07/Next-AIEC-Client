"use client";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import { CheckCircleOutlined } from "@ant-design/icons";

export default function HomeTestimonial() {
    const [feedback,setfeedback] = useState([]);
    useEffect(()=> {
        fetch('https://server.aiexpertcareer.com/feedback')
        .then((res)=>res.json())
        .then(data => setfeedback(data));
    },[]);
    console.log(feedback);
  let  language  = "en";  
  var settings = {
    
    autoplay: true,
    pauseOnHover: true,
    centerMode: true,
    infinite: true,
    autoplaySpeed: 2000,
    speed: 1000,
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
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
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
    return(
    <div className="mt-[80px] mb-[35px] relative">
      <h3 className="text-center font-bold text-[30px]">
        {language === "bn" ? "শিক্ষার্থীরা যা বলছেন" : "Our Testimonial"}
      </h3>
     
      <div className="mx-auto ">
        <Slider {...settings}>
          {feedback?.map((e) => (
            e.destination_page === "home" || e.show_on_home === true ?
            (   <div key={e._id} className="">
                    <div  className="p-10 m-4 bg-slate-50 shadow-[0_-5px_30px_rgba(217,217,217,217)] rounded-[20px] text-center mt-[120px] relative">
                        <span className="absolute left-[16px] top-[-15px]">
                            <CheckCircleOutlined className="text-4xl text-black"/>
                        </span>
                        <img
                            className="w-20 h-20 mx-auto rounded-full"
                            src={e.imageURL}
                            alt="AIEC student feedbacks"
                        />
                        <h3 className="text-[20px] font-bold mt-4">{e.name}</h3>
                        <h4 className="text-[14px]   mb-[15px]">
                        {e.designation}
                        </h4>
                        <p className="text-sm">{e.feedback}</p>
                    </div>
                </div>
                
            ):""
          ))}
        </Slider>
      </div>
    </div>
    
    );
};
