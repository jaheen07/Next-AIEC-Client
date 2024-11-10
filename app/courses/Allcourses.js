import { RightCircleOutlined } from "@ant-design/icons";
import getcourses from "@/lib/getcourses";
import Link from "next/link";
import getpromos from "@/lib/getpromos";
import geteventbanners from "@/lib/geteventbanners";
import DynamicBanner from "./DynamicBanner";
import CourseCard from "./CourseCard";
export default async function Allcourses() {
  const language = "en";
  const courses = await getcourses();
  const promos = await getpromos();
  const banners = await geteventbanners();
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
  return(
    <div className="px-3 mx-auto mt-32 md:px-0">
      {promos.map((e)=>(
        (e.course_name == "All" && e.show_on_rib == "YES")? 
        <>
          <div className="w-full p-1 text-xl text-center text-white bg-red-600" id="ribbon" >{language == 'bn'? `'${e.promo}' কুপন কোড ব্যবহার করলে পাচ্ছেন '${e.discount.substring(0, e.discount.indexOf("."))}%' ছাড় !!!` :`Use Coupon code '${e.promo}' to get '${e.discount.substring(0, e.discount.indexOf("."))}%' discount !!!`} 
          <button onClick={dlt_rib} className="float-right mr-10">X</button>
          </div>
          
        </>
        : "" ))
      }
    
      <div className="flex flex-col items-center justify-center gap-5 mx-auto my-10 md:gap-10 xl:flex-row md:w-4/5 max-w-7xl">
        <DynamicBanner banners={banners} />
        <div className="mx-auto md:w-3/5">
          <h1 className="mb-5 text-3xl font-semibold text-center">
            {language == "bn"
              ? "পছন্দ করুন আপনার "
              :"Choose Your " }{language == "bn"? <span className="mb-4 text-red-500 curved-underline">ক্যারিয়ার</span> : <span className="mb-4 text-red-500 curved-underline"> Journey.</span>}
          </h1>
          <div className="grid content-center order-2 w-full grid-cols-2 gap-5 my-5 md:grid-cols-3 text-md h-fit lg:my-0 lg:order-1 ">
            {categories?.map((categoryItem) => (
            
            <Link
              key={categoryItem.category}
              href={`/all-courses/${categoryItem.category.trim().replace(/\s+/g, '-')}`}
              // state={courses} 
              className="glass w-[105%] p-3 h-26 hover:bg-black md:text-lg bg-slate-100 rounded-lg text-black hover:text-white transition ease-in delay-0 hover:delay-150">
              {language == "bn"?categoryItem.category_bn : categoryItem.label}
              <p>
                {
                  courses?.filter(
                    (course) => course.category === categoryItem.category
                  ).length == 0 ? <span className="text-red-600">Coming Soon</span>  : courses?.filter(
                    (course) => course.category === categoryItem.category
                  ).length + " Courses"
                }
                
              </p>
              <span className="float-right text-3xl rounded-full">
              <RightCircleOutlined />
              </span>
            </Link>
 
            ))}
          </div>
        </div>
      </div>
    
      {categories?.map((categoryItem, index) => (
        <section className="mx-auto my-14 md:w-4/5 max-w-7xl" key={index}>
        {courses?.filter(
          (course) => course.category === categoryItem.category
        ).length == 0 ? ""  : 
        <><h2 className="text-[30px] font-bold">
          {language == "bn" ? categoryItem.category_bn +" কোর্স সমূহ" : categoryItem.label + ' Courses'}
        </h2>
        
        <p className="text-xl ">{courses?.filter((course) => course.category === categoryItem.category).length} Courses</p>
        <hr className="w-12 h-1 bg-[#FF265A]/90 rounded-full mb-6"/>  
        
        <div className="grid justify-center gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {courses?.slice(0, 8).map((course) => course.category === categoryItem.category?
                (
                  <CourseCard key={course._id} course={course}></CourseCard>
                ):'')}
              </div>
              <div className="flex justify-center my-10">
                <Link
                  state={courses}
                  href={`/all-courses/${categoryItem.category.trim().replace(/\s+/g, '-')}`}
                  className="btn-view"
                >
                  {language == "bn" ? "আরো দেখুন" : "See More"}
                </Link>
              </div>
        </>
        } 
        </section>
      ))}
    </div>
  )
};
