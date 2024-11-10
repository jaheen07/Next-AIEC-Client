import CountDown from "@/app/components/CountDown";
import moment from "moment";
import Link from "next/link";
import { CheckCircleOutlined,LockOutlined,PlaySquareOutlined } from "@ant-design/icons";
// import "video-react/dist/video-react.css";
import PromoCode from "@/app/components/PromoCode";
// import PromoMobile from "@/app/components/PromoMobile";
// import useEnrollmentCheck from "../../../../hooks/useEnrollmentCheck";
import quizI from "@/public/course.svg";
import assI from "@/public/blog.svg";
import Testimonial from "./CourseTestimonial";
import { myFont } from "@/app/layout";
import ExportedImage from "next-image-export-optimizer";
import Video_Player from "@/app/components/Video_Player";



export async function generateStaticParams() {
  const course = await fetch('https://ai-server-sooty.vercel.app/courses', { cache: "no-store"}).then((res) => res.json())
  console.log(course.map(c=>c.title))



  
  return course.map((course) => ({
    name: course.title.trim().replace(/\s+/g, '-'),
  }))
}

export async function generateMetadata({params}){
    const {name} = params;
    return {
      title: name.replace(/-/g, ' ').trim()
    }
  }

export default async function Page({params})  {

  const language = 'en'
  const { name } = params;
  // const [isVisible, setIsVisible] = useState(true);

  
  
  const course = await fetch(`https://server.aiexpertcareer.com/single-course/${name.replace(/-/g, ' ').trim()}`,{ cache: "no-store"}).then((res)=>res.json());
  const promos = await fetch(`https://server.aiexpertcareer.com/promo`,{ cache: "no-store"}).then((res)=>res.json());
  
  const dlt_rib = () => {
    var element = document.getElementById("ribbon");
    element.classList.add("hidden");
  }

  const {
    _id,
    title,
    subtitle,
    coverVideo,
    cover,
    description,
    category,
    features,
    Collaborators,
    courseType,
    courseFee,
    discount,
    spdiscount,
    duration,
    liveInstruction,
    instructor,
    insDesignation,
    insDescription,
    insImage,
    modules,
    startDate,
    endDate,
    courseDate,
    faqItems,
    goals,
    comments,
    assignments,
    preRequisites,
    eligibleUsers,
  } = course;

  

  let discountAmount;
  if(spdiscount){
    discountAmount = courseFee - spdiscount;
  }
  else if(discount){
    discountAmount = courseFee * (1 - discount / 100);
  }
  else{
    discountAmount = Number(courseFee);
  }

  
  // useEffect(()=>{
  //   if(course.length !== 0){
  //     window.dataLayer.push({
  //     event: "view_item",
  //     ecommerce: { 
  //       currency:'BDT',
  //       value: discountAmount,
  //       item:[
  //         {
  //           item_id: _id,
  //           item_name: title,
  //           item_brand: "",
  //           price: discountAmount,
  //           item_category: category,
  //           google_business_vertical: "retail",
  //           id: _id
  //         }
  //       ]
        
  //     }
      
  //   }); 
  // }
   
  // },[title]);

  
    

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY;
  //     const viewportHeight = window.innerHeight;
  //     const documentHeight = document.documentElement.scrollHeight;
  //     const last400Pixels = documentHeight - viewportHeight - 1500;

  //     if (scrollPosition > last400Pixels) {
  //       setIsVisible(false);
  //     } else {
  //       setIsVisible(true);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);
  
  
  // const enrolled = useEnrollmentCheck(_id);

  

  return (
    <div className={`${myFont.className} w-full mt-24`}>
      {promos.map((e)=>(
        (e.course_name == title && e.show_on_rib == "YES")? 
      <>
        <div className="w-full p-1 text-xl text-center text-white bg-red-600" id="ribbon" >{language == 'bn'? `'${e.promo}' কুপন কোড ব্যবহার করলে পাচ্ছেন '${e.discount.substring(0, e.discount.indexOf("."))}%' ছাড় !!!` :`Use Coupon code '${e.promo}' to get '${e.discount.substring(0, e.discount.indexOf("."))}%' discount !!!`} 
        {/* <button onClick={dlt_rib} className="float-right mr-10">X</button> */}
        </div>
        </>
      : "" ))
      }



      <section className="max-w-full gap-6 px-4 py-2 mx-auto my-5 md:my-10 xl:max-w-7xl md:px-10 xl:flex xl:gap-10 ">
        {/* Left Side Contents */}

        
        <section className="space-y-5 md:space-y-10">
          <h1 className="text-3xl font-bold md:text-4xl">{title}</h1>
          <h2 className="text-xl ">{subtitle}</h2>
          <div className="h-fit">
            {coverVideo ? (
              <Video_Player coverVideo={coverVideo}/>
            ) : (
              <ExportedImage src={cover} alt={`${title} cover photo`} className="w-full mx-auto " width={100} height={100} />
            )}
          </div>

          {/* Main features for mobile view */}
          <div className="text-sm section md:w-96 md:hidden">
            <h3 className="my-3 text-xl font-bold">
              {" "}
              {language == "bn"
                ? "এই কোর্সের ভেতরে যা যা রয়েছে"
                : "Main Features:"}
            </h3>
            <div>
              {features?.map((feature, i) => (
                <div key={i}>
                  <p className="flex items-center gap-3 my-3 text-lg">
                    <CheckCircleOutlined className="text-lg text-red-500" />{" "}
                    {feature}
                  </p>
                </div>
              ))}
            </div> 
          </div>

          <div className="md:hidden">
            {courseType === "paid" && (
              <>
                <CountDown startDate={startDate} endDate={endDate} courseDate={courseDate} />
                
                <div className="flex justify-between section">
                  <div className="">
                    <h3 className="my-3 font-semibold text-md">
                      {" "}
                      {language == "bn" ? "ভর্তি শেষ:" : "Admission will end on:"}
                    </h3>
                    <p>{moment(endDate).format("MMMM Do YYYY")}</p>
                  </div>
                  <p className="border-[1px] border-black/25 mx-2" />
                  <div className="text-end">
                    <h3 className="my-3 text-sm font-semibold">
                      {" "}
                      {language == "bn"
                        ? "কোর্স শুরু হবে:"
                        : "Course will start on:"}
                    </h3>
                    <p>{moment(courseDate).format("MMMM Do YYYY")}</p>
                  </div>
                </div>
              </>
            )}
          </div>




          {/* description */}

          <div>
            <h3 className="my-3 text-xl font-bold md:text-2xl">
              {" "}
              {language == "bn" ? "কোর্স বিবরণ:" : "Course Details:"}
            </h3>
            <div className="section bg-slate-100">
              <p dangerouslySetInnerHTML={{ __html: description }}></p>
              
            </div>
          </div>

          {/* who can do the course */}
          <div>
            <h3 className="my-3 text-xl font-bold md:text-2xl">
              {" "}
              {language == "bn"
                ? "কারা এই কোর্সের জন্য উপযুক্ত:"
                : "Who Are Suitable For This Course:"}
            </h3>
            <div className="grid text-lg section md:grid-cols-2">
              {eligibleUsers?.map((eli,i) => (
                <div key={i}>
                  <p className="flex items-center gap-3 my-3 ">
                    <CheckCircleOutlined className="text-lg text-red-500" /> {eli}
                  </p>
                </div>
              ))}{" "}
            </div>
          </div>

          {/* preRequisites */}
          <div>
            <h3 className="my-3 text-xl font-bold md:text-2xl">
              {" "}
              {language == "bn"
                ? "কোর্সের প্রয়োজনীয়তা:"
                : "Course Requirements:"}
            </h3>
            <div className="grid section bg-slate-50 md:grid-cols-2">
              {preRequisites?.map((pre,i) => (
                <div key={i}>
                  <p className="flex items-center gap-3 my-3 text-lg">
                    <CheckCircleOutlined className="text-lg text-red-500" /> {pre}
                  </p>
                </div>
              ))}{" "}
            </div>
          </div>
          {/* Course Goals */}
          <div>
            <h3 className="my-3 text-xl font-bold md:text-2xl">
              {" "}
              {language == "bn" ? "কোর্সের লক্ষ্য:" : "Course Goals:"}
            </h3>
            <div className="grid text-lg section md:grid-cols-2">
              {goals?.map((goal, i) => (
                <div key={i}>
                  <p className="flex items-center gap-3 my-3">
                    <CheckCircleOutlined className="text-lg text-red-500" /> {goal}
                  </p>
                </div>
              ))}{" "}
            </div>
          </div>
          {/* Course Curriculum */}
          <div className="">
            <div className="grid grid-cols-2">
              <h3 className="my-3 text-xl font-bold md:text-2xl">
                {" "}
                {language == "bn"
                  ? "কোর্সের পরিপূর্ণ কারিকুলাম:"
                  : "Course Curriculum:"}
              </h3>
              <div className="text-right">
                <a href={liveInstruction} target="_blank" download>
                  <button className=" md:w-[50%] text-md text-white bg-black text btn hover:bg-black hover:text-white">
                  See Full Module
                  </button>
                </a> 
              </div>
            </div>

            <div className="p-2 bg-white rounded-lg md:p-4">
              {modules?.map((module, i) => (
                <div key={i}>
                  <details className="group [&_summary::-webkit-details-marker]:hidden rounded-xl p-2 bg-white ">
                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-xl bg-slate-100 p-3 text-gray-900">
                      <h2 className="font-bold cursor-pointer">{module.title}</h2>
                      <svg
                        className="w-5 h-5 transition duration-300 shrink-0 group-open:-rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </summary>
                    <div className="px-2 mt-4 leading-relaxed text-gray-700 ">
                      {module.contents.map((c,i) => (
                        <div key={i} className="flex items-center justify-between">
                          <p className="flex items-center gap-3 my-3 font-semibold cursor-pointer text-md md:text-lg">
                            { c.type == "assignment" ? <span><ExportedImage className="w-5" src={assI} alt="" width={10} height={10}/></span> : c.type =="quiz" ? <span className="w-5">{quizI}</span> :
                            <span><PlaySquareOutlined/> </span> 
                            
                            }
                                
                            <span className="w-[90%] md:w-full">{c.title}</span> 
                          </p>

                          <LockOutlined className="text-gray-800" />
                        </div>
                      ))}
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </div>

          {/* Course Instructor */}
          {instructor?.map((ins)=>(
          <div>
            <h3 className="my-3 text-xl font-bold md:text-2xl">
              {" "}
              {language == "bn"
                ? "আপনি যার কাছ থেকে শিখবেন:"
                : "Course Instructor:"}
            </h3>
            <div className="section">
              <div className="md:flex items-center gap-5 p-5 border-b-[1px] text-center md:text-left">
                <figure className="flex justify-center">
                  <ExportedImage src={ins.insImage} className="object-contain w-20 h-20 rounded-full"  alt="instructor Photo" width={70} height={20}/>
                </figure>
                <div>
                  <h4 className="py-2 text-xl font-bold">{ins.instructor}</h4>
                  <p>{ins.insDesignation}</p>
                </div>
              </div>
              <br className="" />
              <p className="text-lg">{ins.insDescription}</p>
            </div>
          </div>
          ))}
          {/* FAQ Section */}
          <div className="pb-0 my-5 md:my-0 md:pb-5 lg:pb-0">
            <h3 className="my-3 text-xl font-bold md:text-2xl">
              {" "}
              {language == "bn"
                ? "সাধারণ জিজ্ঞাসা:"
                : "Frequently Asked Questions:"}
            </h3>
            <div>
              <div className="space-y-2 ">
                {faqItems?.map((faq,i) => (
                  <div key={i}>
                    <details className="group border-s-4 border-black bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden rounded-lg">
                      <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                        <h2 className="text-lg font-bold text-gray-900">
                          {faq.question}
                        </h2>

                        <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 transition duration-300 shrink-0 group-open:-rotate-45"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      </summary>

                      <p className="mt-4 font-normal leading-relaxed text-gray-700">
                        {faq.answer}
                      </p>
                    </details>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* right Side Contents */}
        <section className="my-5 md:my-0">
          {/* Features */}
          <div className="hidden text-sm section md:w-96 md:block">
            <h3 className="my-3 text-xl font-bold">
              {" "}
              {language == "bn"
                ? "এই কোর্সের ভেতরে যা যা রয়েছে"
                : "Main Features:"}
            </h3>
            <div>
              {features?.map((feature, i) => (
                <div key={i}>
                  <p className="flex items-center gap-3 my-3 text-lg">
                    <CheckCircleOutlined className="text-lg text-red-500" />{" "}
                    {feature}
                  </p>
                </div>
              ))}
            </div> 
            </div>

            <div className="sticky hidden mt-10 top-20 md:block">
              <div className="mt-5 text-base course-details section">
                {/* paid course enrollment */}
                {courseType === "paid" ? (
                  <>
                    {" "}
                    <PromoCode
                      discountAmount={discountAmount}
                      courseFee={courseFee}
                      discount={discount}
                      course={course}
                      enrolled={'enrolled'}
                      endDate={endDate}
                      spdiscount={spdiscount}
                    />
                  </>
                ) : (courseType === "free"?
                  //  free course enrollment
                  <>
                    <p className="text-xl font-semibold border-b-2">{language == "bn" ? "কোর্সের মূল্য:" : "Course Fee:"}<span className="float-right mx-6">৳ 0</span></p>
                    
                    
                  {
                    enrolled ? 
                    <div className="text-center">
                      <p className="mt-3">You&apos;ve Enrolled Already</p>
                      <Link className="w-full mt-3 text-white bg-black btn hover:bg-black hover:text-white" href='/dashboard/my-courses'>Go To Dashboard <CheckCircleOutlined/></Link>
                    </div> : 
                    <Link
                    state={{ _id, title, course }}
                    href="/free-course"
                    className="w-full mt-6 text-white bg-black btn hover:bg-black hover:text-white"
                  >
                    Enroll Now
                  </Link>
                  }
                  </>
                :'')}
              </div>
              <div className="">
              {courseType === "paid" && (
                <>
                  <CountDown startDate={startDate} endDate={endDate} courseDate={courseDate} />
                  <div className="flex justify-between section ">
                    <div className="">
                      <h3 className="my-3 font-semibold text-md">
                        {" "}
                        {language == "bn" ? "ভর্তি শেষ:" : "Admission will end on:"}
                      </h3>
                      <p>{moment(endDate).format("LL")}</p>
                    </div>
                    <p className="border-[1px] border-black/25" />
                    <div className="text-end">
                      <h3 className="my-3 text-sm font-semibold">
                        {" "}
                        {language == "bn"
                          ? "কোর্স শুরু হবে:"
                          : "Course will start on:"}
                      </h3>
                      <p>{moment(courseDate).format("LL")}</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
          

          {/* Course count down */}


        
        </section>

      </section>

      
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button
              className="absolute text-white bg-red-500 btn btn-sm btn-circle btn-ghost right-2 top-2 hover:bg-primary">
              ✕
            </button>
          </form>

          <>
            {" "}
            {/* <PromoMobile
              discountAmount={discountAmount}
              courseFee={courseFee}
              discount={discount}
              course={course}
              enrolled={enrolled}
              endDate={endDate}
              spdiscount={spdiscount}
            /> */}
          </>
          
          
        </div>
      </dialog>

      <div className="md:hidden">
          {/* <div className="fixed bottom-0 left-0 w-full max-h-[80vh] bg-white border shadow-lg z-10 overflow-y-auto">
            {enrolled?
            "":
            <p className="px-4 py-1 pl-3 text-xl font-semibold text-left md:text-2xl">
              {courseFee > 0 ? <>{discount ? discount != 0 ? <><span className="mx-2 text-gray-500 line-through text-md">৳ {courseFee}</span>
            
              <span className="text-xl">৳{discountAmount}</span></>:"": <>{spdiscount?<span className="mx-2 text-gray-500 line-through text-md">৳ {courseFee}</span>  :""}<span className="text-xl">৳{courseFee - spdiscount}</span></>}</> : "৳ 0"}
              {courseType === "paid"?
              <span className="float-right">
                <Link onClick={()=> document.getElementById("my_modal_5").showModal()} state={{ course, discountAmount, courseFee }} className="text-sm text-gray-600 underline">{language == "bn" ? "প্রোমো কোড" : "Promo Code"}
                </Link>
              </span>:""}
            </p>}
            <div className="text-center">
              { enrolled ?
                (
                  <div className="grid grid-cols-2 px-2">
                    <span className="grid my-auto text-sm font-semibold">You&apos;ve Enrolled Already</span>
                    <Link className="grid my-3 text-sm text-white bg-black btn hover:bg-black hover:text-white" href='/dashboard/my-courses'>Go To Dashboard</Link>
                   </div>
                  
                ): 
                (courseType === "paid" ? 
                  <Link 
                  href="/enroll"
                  state={{ course, discountAmount, courseFee}}
                  className="w-11/12 mb-2 text-white bg-black btn hover:bg-black hover:text-white">
                    Enroll Now <IoIosArrowForward/>
                  </Link> : 
                  (courseType === "free"? 
                    <Link href="/free-course" state={{ course, discountAmount, courseFee, _id, title  }} className="w-11/12 mb-2 bg-white btn-view-red">
                      Enroll Now <IoIosArrowForward/>
                    </Link>:""
                  )
                ) 
              }
            </div>
          </div> */}
        
      </div>
      <div className="md:mx-40">
        <Testimonial course_name={title}/>
      </div>
         
    </div>
  );
};
