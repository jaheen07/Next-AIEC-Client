"use client";
import { Tab, TabGroup } from "@headlessui/react";
import { useEffect, useState } from "react";
import BlogCard from "../blogs/BlogCard";
import Link from "next/link";
import Testing from "./Testing";

const categories = [
  "Featured",
  "Machine learning",
  "Data science",
  "Data analysis",
  "Computer vision",
  "Deep learning",
  "NLP",
  "Prompt Engineering",
  "IoT",
  "Artificial Intelligence",
  "Others",
];

export default function HomeBlogsSection() {
  const { language } = "en"
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://ai-server-sooty.vercel.app/blogs")
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data);
        setIsLoading(false);
      });
  }, []);
  if (isLoading) return <Testing/>;
  return (
    <div className="my-20">
      <h2 className="text-[30px] font-bold text-center">
        {language == "bn"
          ? "আপনার পছন্দের ব্লগ পড়ুন"
          : "Read Your Opportunities"}
      </h2>
      <h3 className="text-center">
        {language == "bn"
          ? "এ আই এর নতুন উদ্ভাবন, ইন্ডাস্ট্রি ইনসাইটস এবং কতটা এগিয়ে যাচ্ছি আমরা জানতে পড়ুন আমাদের ব্লগ সমূহ।"
          : "Stay informed and inspired as our expertly crafted blogs unravel the dynamic world of AI."}
      </h3>
      {/* <hr className="w-12 h-1 bg-[#FF265A]/90 rounded-full mx-auto " /> */}
      <div className="px-2 mx-auto my-10 sm:px-0">
        <TabGroup>
          <Tab.List className="flex p-3 space-x-1 space-y-1 overflow-x-scroll text-black border rounded-lg flex-nowrap lg:flex-nowrap md:space-y-0 md:space-x-3 md:rounded-lg md:p-1 whitespace-nowrap">
            {categories.map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  `rounded-lg py-2.5 text-sm  text-black
        ring-white/60 focus:outline-none font-semibold  ;
        ${
          selected
            ? "bg-black shadow text-white px-5 w-full"
            : "text-black hover:bg-black px-5 w-full hover:text-white"
        }`
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>

          <Tab.Panels className="mt-2">
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              categories?.map((category, index) => (
                <Tab.Panel
                  key={index}
                  className="bg-white rounded-full md:p-3 "
                >
                  <div className="pt-3 grid gap-x-2 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-y-[24px] md:gap-[34px] pb-6">
                    {blogs
                      .filter((blog) => blog.category === category)
                      .slice(0, 8)
                      .map((filteredBlog) => (
                        <BlogCard key={filteredBlog._id} blog={filteredBlog} />
                      ))}
                    {blogs.filter((blog) => blog.category === category)
                      .length === 0 && (
                      <div
                        className="flex items-center justify-center text-center col-span-full"
                        style={{ gridColumn: "1 / -1" }}
                      >
                        <p className="text-lg ">Blogs are Coming Soon</p>
                      </div>
                    )}
                  </div>
                  <Link
                    href="/blogs"
                    className="flex justify-center mx-auto w-fit btn-view"
                  >
                   {language == "bn" ? "আরো দেখুন" : "View More"}
                  </Link>
                </Tab.Panel>
              ))
            )}
          </Tab.Panels>
        </TabGroup>
      </div>
    </div>
  );
};


