import getcourses from "@/lib/getcourses";
import Homecourses from "../components/Homecourses";
import { Suspense } from "react";
import Testing from "./Testing";

export default async function HomeCourseSection() {
  const courses = await getcourses();
  
  // console.log(courses);

  return(
    <Suspense fallback={<div className="mx-auto"><Testing/></div>}>
      <Homecourses course={courses}/>  
    </Suspense>
    // <div>
    //   solkfjsl
    // </div>
    
    
  )
};
