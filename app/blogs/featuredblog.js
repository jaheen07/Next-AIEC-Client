/* eslint-disable react/prop-types */
"use client";
import { ArrowsAltOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FeaturedBlogs = () => {
    const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("https://server.aiexpertcareer.com/blogs")
        .then((response) => response.json())
        .then((data) => {
        setBlogs(data);
        });
    }, []);

    const featuredBlogs = blogs.filter((b) => b.category === "Featured");
    
  const language  = "en";
  
  var settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    arrows:false,
  }
  
  return (
    <div>
      <Slider {...settings}>
        {featuredBlogs?.map((b, i) => (
            
          <div key={i} className="bg-[#de858500] pb-10 ">
            <div className=" mb-[35px] relative">
              <div className="grid lg:grid-cols-2 items-center gap-4 mt-[100px]">
                <div>
                  <img className="rounded-lg " src={b.imageURL} alt="blog"/>
                </div>
                <div className="space-y-4 ">
                  <Link
                    href={`/blogs/${b.blogName}`}
                    className="text-xl md:text-[40px] leading-[40px] font-bold"
                  >
                    {b.blogName}
                  </Link>
                  <div
                    className=""
                    dangerouslySetInnerHTML={{
                      __html:
                        b.description.length > 250
                          ? b.description.substring(0, 350) + " ..."
                          : b.description,
                    }}
                  ></div>
                  <button className="">
                    <Link
                      className="flex items-center btn-view "
                      href={`/blogs/${b.blogName}`}
                    >
                      <ArrowsAltOutlined />  {language == "bn" ? "আরো পড়ুন" : "Read More"}
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
        ))}
      </Slider>
    </div>
  );
};

export default FeaturedBlogs;
