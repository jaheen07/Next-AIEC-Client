"use client";
import WorkshopCard from "./WorkshopCard";
import { useEffect, useState } from "react";
import Testing from "../Home/Testing";


export default function Allworkshops(){
  const [workshop,setWorkshop] = useState([]);
const language = "en";
  // const courses = location.state;
  // const filteredCourses = courses?.filter(
  //   (course) => course.category == category
  // );
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;


  useEffect(() => {
    fetch(" https://server.aiexpertcareer.com/workshops")
      .then((response) => response.json())
      .then((data) => setWorkshop(data));
  }, [workshop]);


  // Pagination
  const totalPages = Math.ceil(workshop.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the sorted and filtered data for pagination
  const paginatedWorkshop = workshop.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  
  return (
    <div className="w-11/12 mx-auto mb-10 md:w-9/12 mt-28">
      
      <div className="w-full p-4 mx-auto mb-12 text-center rounded-md bg-slate-50">
          <h1 className="mb-8 text-3xl font-semibold text-center md:text-4xl">
            {language == "bn"
              ? "প্রোজেক্ট বেজড "
              :"Project-based " }{language == "bn"? <span className="mb-4 text-red-500 curved-underline">ওয়ার্কসপ</span> : <span className="text-red-500 curved-underline"> Workshop</span>}
          </h1>
        <p className="px-2 text-xl text-black md:px-28">Our Project-Based Workshop is tailored for individuals who are passionate about AI/ML/Data Science and eager to enhance their practical skills. Participants will work on real projects, guided by experienced professionals. This approach ensures that you not only understand the concepts but also learn how to apply them in practical scenarios.</p>
      </div>
      {/* <h1 className="my-10 text-3xl text-center">All Workshops</h1> */}
      {paginatedWorkshop.length > 0 ? (
        <>
          <div className="grid justify-center gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {paginatedWorkshop?.map((work) => (
              <WorkshopCard key={work._id} workshop={work}></WorkshopCard>
              
            ))}
          </div>
          {/* pagination */}
          {paginatedWorkshop.length > 0 ? (
            <div className="flex justify-center mt-8">
              <button
                className={`px-4 py-2 rounded-md mx-2 ${
                  currentPage === 1
                    ? "bg-slate-300 text-gray-500 cursor-not-allowed"
                    : "bg-black text-white"
                }`}
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>

              {/* {(currentPage !== 1 && paginatedWorkshop.length > 0)?"":""} */}

              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => handlePageChange(index + 1)}
                  className={`${
                    currentPage === index + 1
                      ? "bg-black text-white"
                      : "bg-slate-200 hover:bg-gray-300 text-gray-700"
                  } px-3 py-1 mx-1 rounded-md cursor-pointer`}
                >
                  {index + 1}
                </button>
              ))}

              <button
                className={`px-4 py-2 rounded-md mx-2 ${
                  currentPage === totalPages
                    ? "bg-slate-300 text-gray-500 cursor-not-allowed"
                    : "bg-black text-white"
                }`}
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          ) : (
            ""
          )}
        </>
        ) : (
        <div>
          <h3 className="text-3xl h-[40vh] flex justify-center items-center">
            <Testing />
          </h3>
        </div>
      )}
    </div>
  );
};



