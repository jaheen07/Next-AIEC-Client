
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./useAxiousSecure";

export default async function getcourses() {
    // const [axiosSecure] = UseAxiosSecure();
    // const courses = await axiosSecure.get('/courses');
    // return courses;

    const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          authorization:process.env.SECRET,
        },
      };

    const response = await fetch("https://server.aiexpertcareer.com/courses",options, { cache: "no-store"}).then((response) => response.json())

    return response;
};
