
import CourseCard from "../../courses/CourseCard";
// import { useEffect } from "react";
// import { useState } from "react";
import getcourses from "@/lib/getcourses";


export async function generateStaticParams() {
  const categories = [
    { category: "Web Development", label: "Web Development" ,category_bn: "ওয়েব ডেভেলপমেন্ট" },
    { category: "Cyber Security", label: "Cyber Security", category_bn:"সাইবার সিকিউরিটি" },
    { category: "Graphics Designing", label: "Graphics Design", category_bn:"গ্রাফিক্স ডিজাইনিং" },
    { category: "Business Development", label: "Business Development", category_bn:"বিজনেস ডেভেলপমেন্ট" },
    { category: "health care", label: "Health Care", category_bn:"হেলথ কেয়ার" },
    { category: "digital Marketing", label: "Digital Marketing", category_bn:"ডিজিটাল মার্কেটিং" },
    { category: "Real State",label: "Real States", category_bn:"রিয়েল স্টেট" },
    { category: "Education", label: "Education", category_bn:"এডুকেশন" },
    { category: "Data analysis", label: "Others", category_bn:"অন্যান্য" },
  ]; 

  console.log(categories.map((course) => ( course.category.trim().replace(/\s+/g, '-'))))
  
  return categories.map((course) => ({
    category: course.category.trim().replace(/\s+/g, '-'),
  }))
}

export default async function page({params})  {
  const { category } = params;
  const courses = await getcourses();
  const filteredCourses = courses?.filter((course) => course.category == category.replace(/-/g, ' ').trim());
    
  
  // const [currentPage, setCurrentPage] = useState(1);
  // const itemsPerPage = 12;


  // // Pagination
  // const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);
  // const startIndex = (currentPage - 1) * itemsPerPage;
  // const endIndex = startIndex + itemsPerPage;

  // // Slice the sorted and filtered data for pagination
  // const paginatedCourses = filteredCourses.slice(startIndex, endIndex);

  // const handlePageChange = (page) => {
  //   setCurrentPage(page);
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };

  return (
    <div className="w-9/12 mx-auto mt-32 mb-10">
      <h1 className="my-10 text-3xl text-center">All {category} Courses</h1>
      {filteredCourses.length > 0 ? (
        <>
          <div className="grid justify-center gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredCourses?.map((course) => (
              <CourseCard key={course._id} course={course}></CourseCard>
            ))}
          </div>
          {/* pagination */}
          {/* {paginatedCourses.length > 12 ? (
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
          )} */}
        </>
      ) : (
        <div>
          <h3 className="text-3xl h-[40vh] flex justify-center items-center">
            Courses are Coming Soon
          </h3>
        </div>
      )}
    </div>
  );
};

