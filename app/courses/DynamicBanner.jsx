/* eslint-disable react/prop-types */
"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ExportedImage from "next-image-export-optimizer";




const DynamicBanner = ({ banners }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  
  const settings = {
    autoplay: false,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    arrows:false,
  }
  const [openPicModalIndex, setPicOpenModalIndex] = useState("");


  const onSubmit = async (data) => {

    if (data !== "null") {
      try {
        // Send Data to API
        const apiResponse = await fetch(
          "https://ai-server-sooty.vercel.app/seminar",
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(data),
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
    <div className="order-1 w-full mt-6 space-y-3 md:w-1/2 lg:order-2 bg-slate-50">
      {banners.length === 1 ? (
        banners?.map((banner) => (
          <div key={banner._id}>
          <div className="border-[1px] border-black/25 mx-auto rounded-lg p-3">
            <ExportedImage src={banner?.banner} alt="event image" width={1000} height={100}/>
            <h1 className="my-2 ml-2 text-2xl font-bold">{banner?.title}</h1>
            <h2 className="my-2 mb-4 ml-2 text-lg">{banner?.date}</h2>
            <button
              onClick={() => {
                const modalId = `${banner._id}`;
                const modal = document.getElementById(modalId);
                setPicOpenModalIndex(modal);
                if (modal) {
                  modal.showModal();
                }
              }}
              className="w-full py-3 text-xl text-white bg-black rounded-xl"
            >
              Get your Seat
            </button>

            <dialog id={`${banner?._id}`} className="modal">
              <form
                onSubmit={handleSubmit(onSubmit)}
                method="dialog"
                className="text-black bg-white modal-box"
              >
                <button
                  className="absolute text-white bg-red-500 btn btn-sm btn-circle btn-ghost right-2 top-2"
                  onClick={() => {
                    const modalId = `${banner._id}`;
                    const modal = document.getElementById(modalId);
                    if (modal) {
                      modal.close();
                    }
                  }}
                >
                  ✕
                </button>

                <div className="mb-2">
                  <h1 className="mb-3 text-2xl font-bold text-center">
                    Join Free seminar
                  </h1>
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
                <div className="mt-6 text-center">
                  <button type="submit" className="text-white btn">
                    Confirm
                  </button>
                </div>
              </form>
            </dialog>
          </div>
          </div>
        ))
      ):
      <Slider {...settings}>
        {banners?.map((banner) => (
          <div key={banner._id}>
          <div className="border-[1px] border-black/25 mx-auto rounded-lg p-3">
            <ExportedImage src={banner?.banner} alt="event image" width={100} height={100}/>
            <h1 className="my-2 ml-2 text-2xl font-bold">{banner?.title}</h1>
            <h2 className="my-2 mb-4 ml-2 text-lg">{banner?.date}</h2>
            <button
              onClick={() => {
                const modalId = `${banner._id}`;
                const modal = document.getElementById(modalId);
                setPicOpenModalIndex(modal);
                if (modal) {
                  modal.showModal();
                }
              }}
              className="w-full py-3 text-xl text-white bg-black rounded-xl"
            >
              Get your Seat
            </button>

            <dialog id={`${banner?._id}`} className="modal">
              <form
                onSubmit={handleSubmit(onSubmit)}
                method="dialog"
                className="text-black bg-white modal-box"
              >
                <button
                  className="absolute bg-red-500 btn btn-sm btn-circle btn-ghost right-2 top-2text-white"
                  onClick={() => {
                    const modalId = `${banner._id}`;
                    const modal = document.getElementById(modalId);
                    if (modal) {
                      modal.close();
                    }
                  }}
                >
                  ✕
                </button>

                <div className="mb-2">
                  <h1 className="mb-3 text-2xl font-bold text-center">
                    Join Free seminar
                  </h1>
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
                <div className="mt-6 text-center">
                  <button type="submit" className="btn">
                    Confirm
                  </button>
                </div>
              </form>
            </dialog>
          </div>
          </div>
        ))}
      </Slider>}
    </div>
    

  );
};

export default DynamicBanner;
