import Link from "next/link";
import roadmapImage from "@/public/roadmap.svg";
// import { FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";
import ExportedImage from "next-image-export-optimizer";

export default function Roadmap(){
  const language  = "en";
  return (
    <div className="relative md:mb-10 pt-[90px]  py-10 md:py-0">
      

      {/* <img  alt="roadmap image" width="100%" height="1" loading="lazy"/> */}
      <div className="absolute top-0 w-4/5 mx-auto md:top-5 md:w-5/12 md:space-y-4 md:ml-10">
        <h2 className="text-lg font-semibold md:text-3xl">
          
          {language == "bn" ? "সঠিক ক্যারিয়ার রোডম্যাপ খুজছেন?" : "Need a Career Roadmap, Right?"}
        </h2>
        <p className="my-1 mb-6 text-md md:text-lg md:my-0">
          {language == "bn" ? "আপনার এ আই ক্যারিয়ার জার্নিকে আরো এগিয়ে নিতে আজই যোগাযোগ করুন আমাদের এ আই কন্সাল্টেন্টদের সাথে।" : "Accelerate your AI career journey with our comprehensive consultancy services"}
        </p>
        <Link href='/courses' className="flex btn-view w-2/3 md:w-1/2 md:text-[18px]
                "> {language == "bn" ? "ক্যারিয়ার শুরু করুন" : "Start Your Career"}
         {/* <FiArrowUpRight/> */}
        </Link>
        
        
      </div>
      <ExportedImage src={roadmapImage} className="mx-auto mt-12 md:w-11/12" alt="Image Alt"/>
    </div>
  );
}
