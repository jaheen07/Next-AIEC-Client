"use client";

import { useContext, useState } from "react";
// import { MyContext } from "../../../Context/Context";
// import Swal from "sweetalert2";
// import { AiOutlineMail } from "react-icons/ai";


export default function Subscribe(){
  const { language } = "bn";
  const [mail, setMail] = useState("");
  const [error, setError] = useState(null);

  const validateEmail = (email) => {
    // Basic email validation using a regular expression
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(mail)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError(null); // Clear any previous errors

    try {
      const response = await fetch(
        "https://ai-server-sooty.vercel.app/newsletter",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: mail }),
        }
      );

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const data = await response.json();

      if (data.insertedId) {
        setMail("");
        // Swal.fire({
        //   position: "top-end",
        //   icon: "success",
        //   title: "You've Subscribed successfully",
        //   id:"jaheen",
        //   showConfirmButton: false,
        //   timer: 1500,
        // });
      }
    } catch (error) {
      setError("An error occurred while subscribing. Please try again later.");
    }
  };

  return(
    <div className="">
        <div className="flex items-center mx-auto bg-white border rounded-lg md:mx-0 w-fit">
            {/* <AiOutlineMail className="w-10 text-red-700 md:w-16" /> */}
            <div>
            <form>
                <input
                type="email"
                placeholder={language === "bn" ? "ই-মেইল" : "Email"}
                value={mail}
                onChange={(e) => setMail(e.target.value)}
                className="w-full text-black border-none outline-none"
                />
                {/* <button type="submit">Subscribe</button> */}
            </form>
            </div>
            <button
            onClick={handleSubmit}
            className="z-20 inline-flex items-center justify-center rounded-lg h-12 text-lg w-32  bg-[#ED1B24] "
            >
            {language == "bn" ? "সাবস্ক্রাইব" : "Subscribe"}
            </button>
        </div>
        <div>{error && <p className="error-message">{error}</p>}</div>
    </div>
  );
}