/* eslint-disable react/prop-types */
"use client";
import { useEffect, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import Link from "next/link";

const SearchMobile = ({ isOpen, setIsOpen }) => {
  const  language  = "en"
  const [courses, setcourses] = useState();

  const [search, setSearch] = useState("");
  const [CourseData, setCoursesData] = useState([]);
  const [consultantData, setConsultantData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const [isOpen, setIsOpen] = useState(true);
  // const userinfo = consultants;

  const stripHTMLTags = (html) => {
    if (!html) return "";
    const tempElement = document.createElement("div");
    tempElement.innerHTML = html;
    return tempElement.textContent || tempElement.innerText || "";
  };

  useEffect(() => {
    fetch("https://ai-server-sooty.vercel.app/courses")
        .then((response) => response.json())
        .then((data) => {
        setcourses(data);
        });
  }, []);

  useEffect(() => {
    setIsLoading(true);

    // Create a function to search in courses
    const searchCourses = () => {
      const courseResults = courses?.filter((course) => {
        const lowercaseTitle = (course.title || "").toLowerCase();
        const lowercaseSubtitle = (course.subtitle || "").toLowerCase();
        const lowercaseDescription = stripHTMLTags(
          course.description || ""
        ).toLowerCase();
        const lowercaseSearch = search.toLowerCase();
        return (
          lowercaseTitle.includes(lowercaseSearch) ||
          lowercaseSubtitle.includes(lowercaseSearch) ||
          lowercaseDescription.includes(lowercaseSearch)
        );
      });

      setCoursesData(courseResults || []);
    };

    // const searchConsultants = () => {
    //   if (Array.isArray(userinfo)) {
    //     const consultantResults = userinfo
    //       ?.filter((user) => user.role === "consultant")
    //       .filter((u) => {
    //         const lowercaseDisplayName = (u.displayName || "").toLowerCase();
    //         const lowercaseDescription = (u.description || "").toLowerCase();
    //         const lowercaseSummary = stripHTMLTags(
    //           u.summary || ""
    //         ).toLowerCase();
    //         const lowercaseDesignation = (u.designation || "").toLowerCase();
    //         const lowercaseSearch = search.toLowerCase();
    //         return (
    //           lowercaseDisplayName.includes(lowercaseSearch) ||
    //           lowercaseDescription.includes(lowercaseSearch) ||
    //           lowercaseSummary.includes(lowercaseSearch) ||
    //           lowercaseDesignation.includes(lowercaseSearch)
    //         );
    //       });

    //     setConsultantData(consultantResults || []);
    //   }
    // };

    if (search) {
      // Call both search functions only if there's a search query
      searchCourses();
      // searchConsultants();
    } else {
      // Clear the results when the search query is empty
      setCoursesData([]);
      // setConsultantData([]);
    }

    setIsLoading(false);
  }, [search, courses]);
  useEffect(() => {
    setIsOpen(true);
  }, [search]);
  return (
    <div className="my-4">
      <div className="relative flex items-center">
        <input
          className="px-5 pl-10  bg-white text-sm font-normal rounded-full w-[350px] mx-auto h-[41px] relative border-black/25 border-2"
          placeholder={
            language === "bn"
              ? "ক্যারিয়ার কনসালটেন্ট / কোর্সগুলো খুঁজুন"
              : "Search your career consultants or courses"
          }
          type="search"
          name="search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <SearchOutlined className="absolute left-4 text-black/50" />
      </div>
      {isOpen ? (
        <>
          {" "}
          {(CourseData.length > 0 || consultantData.length > 0) && (
            <section className="z-40 flex justify-between p-3 mx-auto mt-1 bg-white border shadow-lg ">
              <div className="w-1/2 p-1 overflow-y-auto border-r-2 h-96 border-black/10">
                {CourseData.length > 0 ? (
                  <div>
                    {/* <p className="mb-2">{CourseData.length} results found</p> */}
                    <p className="mb-2">
                      {CourseData.length == 1 ? (
                        <>{CourseData.length} course found</>
                      ) : (
                        <>{CourseData.length} courses found</>
                      )}{" "}
                    </p>
                    {CourseData?.map((course) => (
                      <Link
                        href={`/course/${course.title.trim().replace(/\s+/g, '-')}`}
                        onClick={() => setIsOpen(false)}
                        className="flex flex-col items-start gap-2 pb-1 my-4 border-b-2"
                        key={course._id}
                      >
                        <img
                          className="w-12 h-12 rounded-full"
                          src={course.insImage}
                          alt={course.title}
                        />
                        <div>
                          <h3 className="">{course.title}</h3>
                          <p className="font-thin">
                            Instructor: {course.instructor}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p>No Courses Found</p>
                )}
              </div>
              {/* <div className="w-1/2 p-1 overflow-y-auto h-96">
                {consultantData.length > 0 ? (
                  <div className="p-3 px-5 overflow-y-auto h-fit">
                    <p className="mb-2">
                      {consultantData.length == 1 ? (
                        <>{consultantData.length} consultant found</>
                      ) : (
                        <>{consultantData.length} consultants found</>
                      )}{" "}
                    </p>
                    {consultantData?.map((c) => (
                      <Link
                        to={`/consultant/${c.displayName
                          .trim()
                          .replace(/\s+/g, "-")}`}
                        onClick={() => setIsOpen(false)}
                        className="flex flex-col gap-2 pb-1 my-4 border-b-2"
                        key={c._id}
                      >
                        <img
                          className="w-12 h-12 rounded-full"
                          src={c.photoURL}
                          alt="Instructor"
                        />
                        <div>
                          <h3 className="">{c.displayName}</h3>
                          <p className="text-sm font-thin ">
                            {c?.designation ? c?.designation : ""}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p>No Consultant Found</p>
                )}
              </div> */}
            </section>
          )}
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default SearchMobile;
