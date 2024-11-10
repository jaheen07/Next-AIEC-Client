import { useState } from "react";
import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import UseUsers from "../../../../hooks/useUsers";
import { toast } from "react-toastify";
import PromoCode from "../../components/PromoCode";
import { useContext } from "react";
import { MyContext } from "../../../../Context/Context";
import { AuthContext } from "../../../../Context/AuthProvider";
import useEnrollmentCheck from "../../../../hooks/useEnrollmentCheck";
import { FaHandPointRight } from "react-icons/fa";
import { IconContext } from "react-icons";
import { useForm } from "react-hook-form";

const Enroll = () => {
  const location = useLocation();
  const { language } = useContext(MyContext);
  const { user } = useContext(AuthContext);
  const { course, payable, discountAmount, courseFee, discount, finalPromo } = location.state;
  const { _id, title, cover } = course;
  // const [userinfo] = UseUsers();
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const [tId, setTid] = useState("");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setcell] = useState("");
  const [paymethod, setmethod] = useState("");
  const [number, setNumber] = useState("");
  const [error, setError] = useState("");
  const [cellerror, setCellError] = useState("");
  const enrolled = useEnrollmentCheck(_id);
  const { handleSubmit } = useForm();

  useEffect(()=>{
    window.dataLayer.push({
       event: "add_to_cart",
       ecommerce: { 
         currency:'BDT',
         value: discountAmount,
         item:[
           {
             item_id: _id,
             item_name: title,
             item_brand: "",
             price: discountAmount,
             item_category: "",
             google_business_vertical: "retail",
             id: _id,
           }
         ]
       }
       
     }); 
   },[title]);

   useEffect(()=>{
    window.dataLayer.push({
       event: "begin_checkout",
       ecommerce: { 
         currency:'BDT',
         value: discountAmount,
         item:[
           {
             item_id: _id,
             item_name: title,
             item_brand: "",
             price: discountAmount,
             item_category: "",
             google_business_vertical: "retail",
             id: _id,
           }
         ]
         
       }
       
     }); 
   },[title]);

 
  const getSubmit = async () => {
    //  const usercheck = userinfo.find((u)=> u.displayName === name && u.email === email);
    
    try {
      // Prepare Enroll Data
      const courseData = {
        name: name,
        email: email,
        cell: phone,
        courseId: _id,
        courseTitle: title,
        course: course,
        progress: 0,
        certificate: false,
        tId: tId,
        sender: number,
        amount: payable || discountAmount,
        courseModel: course?.courseModel,
        coupon: finalPromo,
        paymethod: paymethod,
        status: "pending",
      };
      
      // for GTM event
      const price = payable || discountAmount; 
      
      
        // const userData = {
        //   displayName: name,
        //   email: email,
        //   phone: phone,
        //   role: "user",
        // };
      
        // const userResponse = await fetch(
        //   "https://ai-server-sooty.vercel.app/users",
        //   {
        //     method: "POST",
        //     headers: {
        //       "content-type": "application/json",
        //     },
        //     body: JSON.stringify(userData),
        //   }
        // );

        
        
     

      // Send Course Data to API
      const apiResponse = await fetch(
        "https://ai-server-sooty.vercel.app/enroll",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(courseData),
        }
      );

      if (!apiResponse.ok) {
        throw new Error("Course insertion failed");
      }

      const responseData = await apiResponse.json();

      if (responseData.insertedId) {
        toast.success("You've Successfully Enrolled the Course");
        navigate("/complete-enroll",{ state:{price, course, finalPromo, tId}});
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong, try again");
    }
  };

  const handleTIdChange = (event) => {
    const id = event.target.value;
    setTid(id);
  };

  const isValidPhoneNumber = (input) => /^01\d{9}$/.test(input);

  const handleNumberChange = (e) => {
    const newNumber = e.target.value;

    if (isValidPhoneNumber(newNumber) || newNumber === "") {
      setNumber(newNumber);
      setError("");
    } else {
      // Handle invalid input (e.g., show a message or prevent updating state)
      setNumber(newNumber);
      setError("Please enter a valid number");
    }
  };

  const NumberChange = (e) => {
    const newNumber = e.target.value;

    if (isValidPhoneNumber(newNumber) || newNumber === "") {
      setcell(newNumber);
      setCellError("");
    } else {
      // Handle invalid input (e.g., show a message or prevent updating state)
      setcell(newNumber);
      setCellError("Please enter a valid number");
    }
  };

  

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // useEffect(() => {
  //   if (!user) {
  //     toast.error("You need to log in first");
  //     navigate("/login", { state: { from: location } });
  //   }
  // }, [user]);

  // if(!user) {
  //   toast.error("You need to log in first");
  //   navigate("/login", { state: { from: location}});
  // }

  return (
    <>
      <noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KLCLKWNK"
         height="0"
         width="0"
         style="display:none;visibility:hidden">
        </iframe>
      </noscript>
      {enrolled ? (
        <div className="h-[50dvh] mt-32">
          <div className="w-11/12 mx-auto my-5 text-xl section md:my-10 md:w-2/5 md:p-14">
            <p>You&apos;ve Enrolled Already</p>
            <Link className="text-blue-600 " to="/dashboard/my-courses">
              Check Here
            </Link>
          </div>
        </div>
      ) : (
        
        <div className="px-3 mt-20 mb-10 md:flex justify-evenly md:px-0 md:mt-20 ">
          <div className="p-5 my-5 mb-10 space-y-3 text-xl md:mt-0 md:w-2/5 h-fit">
            {/* <h1 className="my-4 text-3xl font-bold">Billing Information</h1> */}
            <p className="text-3xl font-semibold"> {title}</p>
            <img src={cover} alt=""/>

            <div>
              <section className="p-1 my-5 space-y-4 font-semibold text-slate-900 ">
                <div className="space-y-4 md:block">
                  <p className="flex justify-between border-b-2 ">
                    <span className="text-xl">
                      {" "}
                      {language == "bn" ? "কোর্সের মূল্য:" : "Fee:"}
                    </span>{" "}
                    {discount ? (
                      <span className="mx-2 text-gray-500 line-through text-md">
                        ৳ {courseFee}
                      </span>
                    ) : (
                      ""
                    )}
                    <span className="text-xl">৳ {discountAmount}</span>
                    {/* <span className="ml-4 text-red-600"> Save: {discount}%</span> */}
                  </p>

                  {finalPromo ? (
                  <p className="flex justify-between border-b-2 ">
                    <span className="text-xl">
                      {language == "bn" ? "প্রোমো কোড:" : "Promo Code:"}
                    </span>
                    <span className="text-red-500 text-md">
                      {finalPromo}
                    </span>
                  </p>):""}
                  
                  <br />

                  <p className="flex justify-between text-xl border-b-2 ">
                    {language == "bn" ? "সর্বমোট:" : "Sub Total:"}
                    <span className="font-normal">
                      ৳{" "}
                      {payable ? payable.toFixed(0) : discountAmount.toFixed(0)}{" "}
                    </span>{" "}
                  </p>
                </div>

                {/* <div className="md:hidden">
                  <PromoCode
                    discountAmount={discountAmount}
                    courseFee={courseFee}
                    discount={discount}
                    course={course}
                  />
                </div> */}

                <br />
                
                {language == "bn" ? (
                  <>
                    <p className="text-sm font-normal">
                      আপনি নিম্নলিখিত পদক্ষেপগুলি অনুসরণ করে আপনার পেমেন্ট
                      সম্পূর্ণ করতে হবে:
                    </p>
                    {/* <ol className="pl-5 list-decimal">
                      <li className="text-sm font-normal">
                        নিম্নোক্ত নম্বরে{" "}
                        <span className="text-lg text-primary">
                          {payable ? payable : discountAmount}
                        </span>{" "}
                        টাকা সরবরাহ করুন:
                        <p>
                          <span>
                            {" "}
                            বিকাশ -
                            <span className="text-lg text-primary">
                              {" "}
                              ০১৯৯৫৫৩৬৮৯৮
                            </span>{" "}
                          </span>
                          <span>
                            <br /> নগদ -
                            <span className="text-lg text-primary">
                              {" "}
                              ০১৮২৭১০০২৪২ <br />
                            </span>{" "}
                          </span>
                        </p>
                      </li>

                      <li className="text-sm font-normal">
                        নীচের ইনপুট ফিল্ডে আপনার লেনদেনের ট্রান্সঅ্যাকশন আইডি
                        এবং যে মোবাইল নম্বরটি ব্যবহার করেছেন, সেই নম্বরটি প্রদান
                        করুন।
                      </li>
                      <li className="text-sm font-normal">
                        "সাবমিট" বোতামে ক্লিক করুন এবং অ্যাডমিনের অনুমোদনের জন্য
                        অপেক্ষা করুন।
                      </li>
                    </ol> */}
                  </>
                ) : (
                  <div className="p-4 mt-12 section bg-slate-50">
                    <p className="mb-5 text-lg">
                      To complete your payment, please follow these steps:
                    </p>
                    {/* <ol className="pl-5 my-2 space-y-2 list-decimal">
                      <li className="text-sm font-normal">
                        Transfer{" "}
                        <span className="text-lg text-primary">
                          {payable
                            ? payable.toFixed(0)
                            : discountAmount.toFixed(0)}
                        </span>{" "}
                        TK to the following number:
                        <p>
                          <span>
                            {" "}
                            Bkash -
                            <span className="text-lg text-primary">
                              {" "}
                              01995536898
                            </span>{" "}
                          </span>
                          <span>
                            <br /> Nagad -
                            <span className="text-lg text-primary">
                              {" "}
                              01827100242 <br />
                            </span>{" "}
                          </span>
                        </p>
                      </li>

                      <li className="text-sm font-normal">
                        Enter your Transaction ID and the phone number you used
                        for the transaction in the input fields below.
                      </li>
                      <li className="text-sm font-normal">
                        Click the "Submit" button to request Admin approval.
                      </li>
                    </ol> */}
                    <span className="space-y-1 font-normal">
                      <p className="flex text-lg"><FaHandPointRight className="flex mr-3 text-primary" />
                      <span className="w-[90%]">Go to your Nagad app or Bkash app</span>
                      </p>
                    <p className="flex text-lg"><FaHandPointRight className="flex mr-3 text-primary" />
                    <span className="w-[90%]">Choose “Send Money”</span></p>
                    <p className="flex text-lg"><FaHandPointRight className="flex mr-3 text-primary" />
                    <span className="w-[90%]">Enter below Nagad/Bkash Account Number:</span>
                    </p>
                    
                      <ul className="ml-10"> 
                        <li className="text-lg">For Nagad - <span className="text-red-500">01827100242</span></li> 
                        <li className="text-lg">For Bkash - <span className="text-red-500">01995536898</span></li> 
                      </ul>
                    <p className="flex text-lg"><FaHandPointRight className="flex mr-3 text-primary" />
                    <span className="w-[90%]">Enter sub total amount</span>
                    </p>
                    <p className="flex text-lg"><FaHandPointRight className="flex mr-3 text-primary" />
                    <span className="w-[90%]"> Now enter your Account PIN to confirm the transaction </span>
                    </p>
                    <p className="flex text-lg">
                      <FaHandPointRight className="flex mr-3 text-primary" />
                      <span className="w-[90%]">Copy Transaction ID from payment confirmation message</span> 
                    </p>

                    <p className="flex mx-auto text-lg">
                      <FaHandPointRight className="flex mr-3 text-primary" />
                      <span className="w-[90%]">paste that Transaction ID in the Billing Information form.</span> 
                    </p>

                    </span>
                  </div>
                )}
              </section>
                
            </div>

            
          </div>

          <div className="p-5 my-5 mb-10 space-y-3 text-xl md:mt-0 md:w-[30%] h-fit">
            <h1 className="my-4 text-3xl font-bold">Billing Information</h1>
            

            <div>
              <form onSubmit={handleSubmit(getSubmit)}>
              <section className="p-1 my-5 font-semibold text-slate-900 ">
              <label className="flex items-center mb-1 text-md">
                  Name: <span className="text-primary">*</span>
                </label>
                <input
                  required
                  type="text"
                  onChange={(event)=>{setname(event.target.value)}}
                  placeholder="Enter Your Name"
                  className="w-full max-w-xs py-6 mb-3 text-lg font-normal input input-bordered input-sm"
                />

                <label className="flex items-center mb-1 text-md">
                  Email: <span className="text-primary">*</span>
                </label>
                <input
                  required
                  type="text"
                  onChange={(event)=>{setemail(event.target.value)}}
                  placeholder="Enter Your Email"
                  className="w-full max-w-xs py-6 mb-3 text-lg font-normal input input-bordered input-sm"
                />
                <label className="flex items-center mb-1 text-md">
                  Phone: <span className="text-primary">*</span>
                </label>
                <input
                  required
                  type="number"
                  // onChange={(event)=>{setcell(event.target.value)}}
                  onWheel={(e) => e.target.blur()}
                  onChange={NumberChange}
                  placeholder="Enter Your Phone"
                  className="w-full max-w-xs py-6 mb-3 text-lg font-normal input input-bordered input-sm"
                />
                <p className="text-sm text-primary">{cellerror? cellerror : ""}</p>
                {/* <p className="text-sm text-primary">{phone.length == 11 ? "":"wrong phone number"}</p> */}
                <label className="flex items-center mt-3 mb-2 text-md">
                  Payment Method: <span className="text-primary">*</span>
                </label>
                <select
                required
                type="text"
                onChange={(event) => {setmethod(event.target.value)}}
                className="w-full max-w-xs mb-3 input input-bordered text-black/70 ">
                <option value="">Select a method</option>
                <option value="nagad" className="py-8"> NAGAD</option>
                <option value="bkash" className="py-8"> Bkash</option>

                </select>

                <label className="flex items-center mb-1 text-md">
                  Transaction ID (Trx):<span className="text-primary">*</span>
                </label>  
                  <input
                    required
                    type="text"
                    onChange={handleTIdChange}
                    maxLength={10}
                    placeholder="Example; 2M4AKQ"
                    className="w-full max-w-xs py-6 mb-3 text-lg font-normal input input-bordered input-sm"
                  />
                  
                
                <label className="flex items-center mb-1 text-md">
                  Sender Number:<span className="text-primary">*</span> 
                </label>  
                <input
                  required
                  type="number"
                  onChange={handleNumberChange}
                  onWheel={(e) => e.target.blur()}
                  
                  placeholder="01xxxxxxxxx"
                  pattern="\d*"
                  className="w-full max-w-xs py-6 mb-3 text-lg font-normal input input-bordered input-sm"
                />
                <p className="text-sm text-primary">{error ? error : ""}</p>
                <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                required
                className="bg-black checkbox-black checkbox-xs md:checkbox-sm checkbox-error "
              />
              <Link
                to="/policies/Terms-&-Conditions"
                className="flex items-center gap-3 text-sm"
              >
                {language == "bn" ? (
                  "সমস্ত শর্তাবলীর সাথে রাজী হোন"
                ) : (
                  <p>
                    Accept All{" "}
                    <span className="font-semibold underline">
                      Terms and Conditions
                    </span>
                  </p>
                )}
              </Link>
              <br />
            </div>
            <button
              type="submit"
              disabled={
                error.length > 0 ||
                !isChecked ||
                tId.length < 8 ||
                number.length != 11||
                phone.length != 11
              }
              className="btn rounded-none w-full max-w-xs mt-6 hover:bg-black hover:text-white bg-black text-white text-[80%] p-3"
            >
              Confirm Purchase
              
            </button> 
            <p className="mt-3 text-sm text-primary">{(error.length > 0 ||!isChecked ||tId.length < 8 ||number.length < 11||phone.length < 11)?"NB: You have to input all your required details to activate the button":""}</p>
            
                
                
                
                
                
              </section>
              </form>
              
            </div>

            
          </div>
          
        </div>
        
      )}
    </>
  );
};

export default Enroll;