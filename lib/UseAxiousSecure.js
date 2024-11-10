
// import { useContext, useEffect } from "react";
import axios from "axios";
// import { usePathname } from "next/navigation";
// import { AuthContext } from "../Context/AuthProvider";


export default function useAxiosSecure() {
const axiosSecure = axios.create({
    baseURL: "https://server.aiexpertcareer.com",
  });
  // const { logOut } = useContext(AuthContext);
  // const navigate = usePathname();

  
  axiosSecure.interceptors.request.use((config) => {
    const token = process.env.SECRET;
    if (token) {
      config.headers.authorization = token;
    }
    return config;
  });

  // axiosSecure.interceptors.response.use(
  //   (response) => response,
  //   async (error) => {
  //     if (
  //       error.response &&
  //       (error.response.status === 401 || error.response.status === 403)
  //     ) {
  //       // await logOut();
  //       navigate("/login");
  //     }
  //     return Promise.reject(error);
  //   }
  // );
  axios.interceptors.response.use((response)=> 
    {
      return response;
    }
  )
  

  return [axiosSecure];
};

