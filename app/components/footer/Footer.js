import Image from "next/image";
import Logo from "@/public/logowhite.svg";
import footerBG from "@/public/backdrop_footer.svg";
import Subscribe from "./Subscribe";
import Link from "next/link";

export default function Footer() {
  const { language } = "bn";

  return (
    <div style={{backgroundImage: `url(${footerBG.src})`,backgroundPosition: 'bottom 10px right -80px',backgroundRepeat: 'no-repeat'}}
     className="bg-[#000000] bg-[image:var(--image-url)] bg-[length:420px_400px] w-full  mx-auto">
      <div className="px-4 pt-10 pb-5 md:px-36 ">
      <div className="grid grid-cols-1 gap-5 text-center text-white md:grid-cols-2 lg:grid-cols-5 md:text-start">
          <div className="col-span-2 ">
            <Link href="/" className="">
              <Image
                className="mx-auto pointer-events-none select-none no-select unselectable md:mx-px w-36 md:w-32"
                width="1"
                height="1"
                src={Logo}
                alt=""
              />
            </Link>
            <h4 className="text-white/50 text-[18px] my-[36px]">
              <span className="text-white">Our vision</span> is to see Al as a
              driving force behind Bangladesh's economic prosperity,
              Bangladeshi Al experts on the global stage and make opportunities
              for all.
            </h4>

            <div>
              <h2 className="text-[22px] font-bold text-[#ED1B24] mb-3">
                {language == "bn"
                  ? "এ আই সম্পর্কিত আপডেট থাকতে সাবস্ক্রাইব করুন"
                  : "Subscribe to our newsletter "}
              </h2>

              <Subscribe />
            </div>
            
            
            
          </div>
          <div className="grid grid-cols-2 col-span-2 gap-10 text-center md:text-left">
            <div>
              <h2 className="text-[22px] font-bold text-[#ED1B24] mb-3">
                {language == "bn" ? "কুইক লিংক" : "Quick Link"}
              </h2>
              <div className="flex flex-col gap-2 text-[14px]">
                <p>
                  <Link className="hover:text-red-700" href="/courses">
                    {language == "bn"
                      ? "আপনার AI যাত্রা শুরু করুন"
                      : "Start your AI Journey"}
                  </Link>
                </p>
                <p>
                  <Link className="hover:text-red-700" href="/courses">
                    {language == "bn" ? "কোর্স সমূূহ" : "View All Courses"}
                  </Link>
                </p>
                <p>
                  <Link className="hover:text-red-700" href="/ai-consultant">
                    {language == "bn" ? "ফ্রি কনসালটেন্সি" : "Free Consultancy"}
                  </Link>
                </p>
                <p>
                  <Link
                    className="hover:text-red-700"
                    target="_blank"
                    href="http://kritrimotta.aiexpertcareer.com"
                  >
                    {language == "bn"
                      ? "বাংলা AI ম্যাগাজিন"
                      : "Bangla AI Magazine"}
                  </Link>
                </p>
                <p>
                  <Link className="hover:text-red-700" href="/blogs">
                    {language == "bn" ? "ব্লগ ও আর্টিকেল" : "Blogs & Articles"}
                  </Link>
                </p>
                <p>
                  <Link className="hover:text-red-700" href="/courses">
                    {language == "bn"
                      ? "ক্যারিয়ার রোডম্যাপ প্রয়োজন?"
                      : "Need Career Roadmap?"}
                  </Link>
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-[22px] font-bold text-[#ED1B24] mb-3">
                {language == "bn" ? "আরো কিছু লিঙ্ক" : "Extra Link"}
              </h2>
              <div className="flex flex-col gap-2 text-[14px]">
                
                <p>
                  <Link className="hover:text-red-700" href="/policies/Terms-&-Conditions">
                    {language == "bn" ? "আমাদের পলিসি সমূহ" : "Terms & policies"}
                  </Link>
                </p>
                
                <p>
                  <Link
                    className="hover:text-red-700"
                    target="_blank"
                    href="https://forms.gle/w6WDmG8UXRfX2T8d7"
                  >
                    {language == "bn"
                      ? "একাডেমিক অ্যাসোসিয়েট হিসেবে যোগ দিন"
                      : "Join as a Academic Associate"}
                  </Link>
                </p>
                <p>
                  <Link
                    className="hover:text-red-700"
                    target="_blank"
                    href="https://forms.gle/AhnfGZcdjJMcMAkH9"
                  >
                    {language == "bn"
                      ? "এআই ম্যাগাজিন টিমে যোগ দিন"
                      : "Join AI Magazine Team"}
                  </Link>
                </p>
                <p>
                  <Link
                    className="hover:text-red-700"
                    target="_blank"
                    href="https://forms.gle/xGHczAK8qySeyLKG7"
                  >
                    {language == "bn"
                      ? "একজন পরামর্শদাতা হিসাবে যোগদান করুন"
                      : "Join as an Consultant"}
                  </Link>
                </p>

                <p>
                  <Link
                    className="hover:text-red-700"
                    target="_blank"
                    href="https://www.facebook.com/share/18a9yG5ZCA2jwy66/?mibextid=A7sQZp"
                  >
                    {language == "bn"
                      ? "আমাদের কমিউনিটি"
                      : "Our Community"}
                  </Link>
                </p>
              </div>
            </div>
          </div>

          
          
          <div className=" col-span-1 space-y-[30px] text-center md:text-left">
            <div>
              <h2 className="text-[22px] font-bold text-[#ED1B24] mb-3">
                Contact information
              </h2>
              <div className="flex flex-col gap-2 text-[14px]">
                <Link href="mailto: info@aiexpertcareer.com">
                  Email:{" "}
                  <span className="hover:text-red-700">
                    info@aiexpertcareer.com
                  </span>
                </Link>
                
                <p className="cursor-pointer">
                  Cell:{" "}
                  <Link href="tel:+8801724866855" className="hover:text-red-700">+8801724866855</Link> , 
                  <Link href="tel:+8801995536898" className="hover:text-red-700"> +8801995536898</Link>
                </p>
                <p>
                  Address:{" "}
                  <span className="hover:text-red-700">
                    11, Barabag, Mirpur-2, Dhaka 1216.
                  </span>
                </p>
              </div>
            </div>
            <div className="mt-4 md:text-start md:mt-12">
                <Link href="https://www.glassdoor.com/Overview/Working-at-AI-Expert-Career-EI_IE9446630.11,27.htm">
                  <img alt="Find us on Glassdoor." src="https://www.glassdoor.com/pc-app/static/img/partnerCenter/badges/eng_FIND_US_258x90.png" className=" w-[90%]" width="auto" height="auto"/>
                </Link>
              </div>
            
          </div>
        </div>
        <div className="mt-2">
          
          <div className="text-center">
            <div className="flex items-center justify-center gap-6 mb-2">
              <Link
                href="https://www.facebook.com/aiexpertcareer"
                target="_blank"
                className="rounded-full w-10 p-0.5"
              >
                <img
                  src="https://www.svgrepo.com/show/452196/facebook-1.svg"
                  alt=""
                  width="32 rem"
                  height="1"
                />
              </Link>
              <Link
                target="_blank"
                href="https://www.instagram.com/ai_expert_career/"
                className="rounded-full w-10 p-0.5"
                
              >
                <img
                  width="37 rem"
                  height="1"
                  src={"https://www.svgrepo.com/show/452231/instagram.svg"}
                  alt=""
                />
              </Link>
              <Link
                target="_blank"
                href="https://www.linkedin.com/company/aiexpertcareer/"
                className="rounded-full w-10 p-0.5"
                
              >
                <img
                  width="37 rem"
                  height="1"
                  src="https://www.svgrepo.com/show/452051/linkedin.svg"
                 
                  alt=""
                />
              </Link>
              <Link
                target="_blank"
                href="https://wa.me/+8801995536898"
                className="rounded-full w-8 p-0.5"
               
              >
                <img
                  width="37 rem"
                  height="1"
                  src="https://www.svgrepo.com/show/354560/whatsapp.svg"
                  alt=""
                  
                />
              </Link>
              <Link
                target="_blank"
                href="https://www.youtube.com/@aiexpertcareer"
                className="rounded-full w-10 p-0.5"
                
              >
                <img
                  width="37 rem"
                  height="1"
                  src="https://www.svgrepo.com/show/452138/youtube.svg"
                  alt=""
                  
                />
              </Link>
            </div>
            <p className="lg:text-[18px] text-white inline-block">
              Copyright &copy; 2024 AI Expert Career 
            </p>
            {/* <Link
              href="https://abdulahad-df.netlify.app"
              target="_blank"
              className="z-50 inline-block text-white"
            ></Link> */}
            
          {/* <div className="mt-4 text-end md:float-right md:mt-12">
            <Link href="https://www.glassdoor.com/Overview/Working-at-AI-Expert-Career-EI_IE9446630.11,27.htm">
              <img alt="Find us on Glassdoor." src="https://www.glassdoor.com/pc-app/static/img/partnerCenter/badges/eng_FIND_US_258x90.png" className="mx-auto" width="auto" height="auto"/>
            </Link>
          </div> */}

          </div>
        </div>
      </div>
    </div>
  );
};


