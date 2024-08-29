import { Typewriter } from 'nextjs-simple-typewriter';
import Link from 'next/link';
import Image from 'next/image';
import banner from '@/public/banner.svg';



export default function HeroAria(){
    const gradientColor =
  "linear-gradient(34.98deg, #E9E5FD -6.94%, #BBEAF2 42.2%, rgba(233, 229, 253, 7.96) 110.23% )";
  const language = 'en';
  
    return(
        <div className="mb-[40px]" 
    style={{ background: gradientColor, backgroundRepeat: 'no-repeat',backgroundSize: 'cover',backgroundPosition: 'top'}}>
      
      <div className="px-4 relative pt-2 mx-auto sm:max-w-xl md:max-w-full 2xl:max-w-screen-2xl md:px-24 lg:px-8 h-[100dvh]">
        <div className="md:flex">
          <div className="flex flex-col justify-center lg:text-start md:w-1/2 md:pl-3">
            <div className="mt-12 md:mt-16 text-[30px] sm:text-[34px] flex flex-col lg:text-[55px] xl:text-[60px] font-semibold leading-none lg:text-start pt-10 md:pt-0">
              <h1>
                {language == "bn"
                  ? "কৃত্রিম বুদ্ধিমত্তার কঠিন জার্নিতে"
                  : "Find Your Proper "} <br />
                  
              </h1>
              
              <p className="mt-4 text-black">
                {language == "bn"
                  ? "নিজেকে রাখুন একধাপ এগিয়ে"
                  : "AI Career "}
                <span className="text-red-600 ">
                  {language == "bn"
                  ?""
                  :<Typewriter
                  words={['Guideline', 'Consultancy', 'Roadmap', 'Opportunity','Training']}
                  loop={0}
                  cursor
                  cursorStyle='|'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                  
                />}</span>
                {/* {language == "bn"
                ?"":<Cursor cursorColor='red'/>} */}
                  
              </p>
            </div>

            <h2 className="text-[15px] mr-8 md:text-[17px] text-red-600 font-bold my-[15px] lg:w-[80%]">
              {language == "bn"
                ? "  ক্যারিয়ার গড়ুন আর্টিফিশিয়াল ইন্টেলিজেন্স এক্সপার্ট হয়ে এ আই এক্সপার্ট ক্যারিয়ারের সাথে।"
                : "We are the first ever Artificial Intelligence based Ed-tech and Consultancy Service Platform in Bangladesh."}
            </h2>
            <div className="flex justify-start gap-2 md:mt-6 sm:mt-0 w-30% md:w-[50%] md:items-center md:gap-8">
              <Link
                className="btn-view"
                href="/courses"
              >
              Select Your Track 
              {/* <FaTelegramPlane /> */}
              </Link>

              {/* <Link href='/courses' className="btn-black btn-sm md:btn-md md:btn-view flex items-center w-2/3
                md:w-1/2 md:text-[18px]"> {language == "bn" ? "ক্যারিয়ার শুরু করুন" : "Start Your Career"}
                <FiArrowUpRight/>
              </Link> */}
              

            </div>
          </div>
          <div className="flex justify-center w-full mt-8 sm:mt-0 md:w-1/2">
          {/* <img src={banner} alt="aiexpertcareer_homephoto" width="90%" className="md:mt-20"  loading="lazy"/> */}
          <Image src={banner} className="w-[90%] md:mt-20" alt="hero image"/>
          </div>
        </div>
      </div>
    </div>
    );
}