/* eslint-disable react/prop-types */
"use client";
import { useContext, useState } from "react";
import { MyContext } from "../../../Context/Context";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";


const CourseCard = ({ course }) => {
  const { language } = useContext(MyContext);
  const [openPicModalIndex, setPicOpenModalIndex] = useState("");
  const {courseFee, discount , spdiscount} = course;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const discountAmount = courseFee * ( 1 - discount / 100);





  const onSubmit = async (data) => {

    if (data !== "null") {
      const info = {
        name: data.name,
        phone: data.phone,
        email: data.email,
        course: course.title,
      };
      try {
        // Send Data to API
        const apiResponse = await fetch(
          "https://ai-server-sooty.vercel.app/bookCourse",
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(info),
          }
        );

        if (!apiResponse.ok) {
          throw new Error("Request failed");
        }

        const responseData = await apiResponse.json();

        if (responseData.insertedId) {
          if (openPicModalIndex) {
            openPicModalIndex.close();
          }
          toast.success("You'll be notified");
          reset();
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };
  return (
    
    <div className="relative w-[100%] md:w-full bg-white rounded-xl flex flex-col shadow-md hover:shadow-xl md:h-96">
      {
        discount ? 
        <div className="absolute w-10 h-10 p-1 py-3 text-xs font-semibold text-white rounded-full bg-primary -top-3 -right-3">-{discount}%</div> : ""
      }
      {course?.description ?
        (<Link
        to={`/courses/${course.title.trim().replace(/\s+/g, '-')}`}
        key={course._id}   
        >
          <img className="md:w-[100%] rounded-t-xl pt-0" src={course?.cover} alt="" width="100%" height="1"/>
        </Link>
        ):
      <img className="md:w-[100%] rounded-t-xl pt-0" src={course?.cover} alt="" width="100%" height="1"/>
      }
      
      <div className="p-2 mb-12">
        <p className="pt-[10px] md:text-[17px] font-bold"><Link to={`/courses/${course.title.trim().replace(/\s+/g, '-')}`}>{course?.title}</Link>
        </p>  

        <p className="text-[14px] text-[#818181]">
          {course?.subtitle?.slice(0, 115)}...
        </p>

        <div className="absolute bottom-0 flex items-center justify-between w-full mb-3">
          {course?.description ? (
            <Link to={`/courses/${course.title.trim().replace(/\s+/g, '-')}`} className="btn-black">
              {language == "bn" ? "বিস্তারিত দেখুন" : "View Details"}
            </Link>
          ) : (
            <p className="p-1 font-semibold">Coming Soon...</p>
          )}
          {course?.description ? (
            <p className="mr-4 font-semibold">
              {course?.courseFee > 0 ? <>{discount ? discount != 0 ? <><span className="text-gray-500 line-through text-md">৳ {courseFee}
              
              </span> <span className="text-xl">৳{discountAmount}</span></>:"": <>{spdiscount?<span className="mr-3 text-gray-500 line-through text-md">৳ {courseFee}</span>  :""}<span className="text-xl">৳{courseFee - spdiscount}</span></>}
              </>: "Free"}
            </p>
             
          ) : (
            <button
              onClick={() => {
                const modalId = `${course._id}`;
                const modal = document.getElementById(modalId);
                setPicOpenModalIndex(modal);
                if (modal) {
                  modal.showModal();
                }
              }}
              className="mr-4 btn-black"
            >
              Book your seat
            </button>
          )}
        </div>
      </div>
      
      <dialog id={`${course?._id}`} className="modal">
        <form
          onSubmit={handleSubmit(onSubmit)}
          method="dialog"
          className="text-black modal-box "
        >
          <button
            className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2"
            onClick={() => {
              const modalId = `${course._id}`;
              const modal = document.getElementById(modalId);
              if (modal) {
                modal.close();
              }
            }}
          >
            ✕
          </button>

          <div className="mb-2">
            <p className="mb-3 text-lg">
              Book Your Seat for the course : <br />{" "}
              <span className="text-2xl font-bold">{course.title}</span>{" "}
            </p>
            <p className="">Your Name:</p>
            <input
              type="text"
              {...register("name", { required: true })}
              className="block w-full mt-2 bg-white border rounded-md focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40 input file-input file-input-bordered file-input-error"
            />
          </div>
          <div className="mb-2">
            <p className="">Phone Number:</p>
            <input
              type="tel"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^01\d{9}$/,
                  message: "Please enter a valid phone number",
                },
              })}
              className="block w-full mt-2 bg-white border rounded-md focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40 input file-input file-input-bordered file-input-error"
            />
          </div>
          <div className="mb-2">
            <p className="">Email:</p>
            <input
              type="email"
              {...register("email", { required: true })}
              className="block w-full mt-2 bg-white border rounded-md focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40 input file-input file-input-bordered file-input-error"
            />
          </div>
          {errors.phone ? (
            <p className="text-sm text-red-500">{errors.phone.message}</p>
          ) : (
            ""
          )}
          <div className="mt-6">
            <button type="submit" className="btn-add">
              Confirm
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default CourseCard;
