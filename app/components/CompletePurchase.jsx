import { Link, useLocation } from "react-router-dom";
import Lottie from "lottie-react";
import completed from "../../../../assets/aiload/completed.json";
import { useEffect } from "react";

const CompletePurchaseCourse = () => {
    const location = useLocation();
    const { price, course, finalPromo, tId } = location.state;
    const { _id,title,category } = course;
    useEffect(()=>{
      window.dataLayer.push({
         event: "purchase",
         ecommerce: { 
           currency:'BDT',
           value: price? price.toFixed(0) : 'Free',
           item:[
             {
               item_id: _id,
               item_name: title,
               item_brand: "",
               price: price? price.toFixed(0) : 'Free',
               item_category:category,
               google_business_vertical: "retail",
               id: _id,
             }
           ],
          transaction_id: tId? tId : _id,
          affiliation: "",
          tax: 0,
          shipping: 0,
          coupon: finalPromo
         }
         
       }); 
     },[title]);
    

     // scrollTo
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  
  return (
    <div className="h-[80vh] md:mt-20 flex  justify-center items-center">
      <noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KLCLKWNK"
        height="0"
        width="0"
        style="display:none;visibility:hidden">
        </iframe>
      </noscript>
      <div className="text-center md:section  w-[500px] h-[500px] flex flex-col mx-5 justify-center items-center text-xl space-y-5 ">
        <div className="w-32">
          <Lottie
            className="w-full pointer-events-none select-none no-select unselectable"
            animationData={completed}
            loop={true}
          />
        </div>
        {price? 
        <>
        <h1 className="font-bold md:text-2xl">Thank you!</h1>
        <h3 className="md:text-2xl">Your Submission is under review now!!</h3>
        <h5 className="mb-10 md:text-xl">We will send you a confirmation email shortly after our verification. So please keep an eye on your email inbox/spambox.</h5>
        <h6 className ="text-lg font-semibold text-black-600">For any Emergency- 01995536898</h6>
        
        </> :
        <>
        <h1 className="font-bold md:text-2xl">Congratulations!</h1>
        <h3 className="md:text-2xl">You&apos;ve Successully Enrolled the Course!!</h3>
        <h5 className="mb-10 md:text-xl">You can access your course from your user Dashboard</h5>
        {/* <h6 className ="text-lg font-semibold text-black-600"></h6> */}
        <Link
          to="/dashboard/my-courses"
          className="text-lg text-white bg-black w-[70%] text btn hover:bg-black hover:text-white"
        >
          Go to Dashboard
        </Link>
        </>}
        
      </div>
    </div>
  );
};

export default CompletePurchaseCourse;