import getcourses from "@/lib/getcourses";
import Homecourses from "../components/Homecourses";
import { Suspense } from "react";

export default async function HomeCourseSection() {
  const courses = await getcourses();

  return(
    <Suspense fallback="<h1> Loading Data ...... <h1/>">
      <Homecourses course={courses}/>  
    </Suspense>
    
    
  )
};
