
// import axios from "axios";
// import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./UseAxiousSecure";

export default async function getcourses() {
    const [axiosSecure] = UseAxiosSecure();
    const courses = await axiosSecure.get('/courses');
    return courses.data;

};
