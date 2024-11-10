/* eslint-disable react/prop-types */
"use client"
import moment from "moment";
import { useEffect, useState } from "react";

const CountDown = ({ startDate, endDate, courseDate }) => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [message, setMessage] = useState("");
  const  language  = "en"
  

  useEffect(() => {
    const parsedStartDate = moment(startDate, "YYYY-MM-DD HH:mm:ss").utcOffset(
      "+06:00"
    );
    const parsedEndDate = moment(endDate, "YYYY-MM-DD HH:mm:ss").utcOffset(
      "+06:00"
    );

    const parsedCourseDate = moment(
      courseDate,
      "YYYY-MM-DD HH:mm:ss"
    ).utcOffset("+06:00");

    const interval = setInterval(() => {
      const now = moment().utcOffset("+06:00");
      
      
      const startDiff = moment.duration(parsedStartDate.diff(now));
      const endOfAdmission = moment(parsedEndDate).endOf("day");
      const endDiff = moment.duration(endOfAdmission.diff(now));
      const courseDiff = moment.duration(parsedCourseDate.diff(now));
       

      if (startDiff.asMilliseconds() <= 0) {
        if (endDiff.asMilliseconds() > 0) {
          setCountdown({
            // days: endDiff.days(),
            days: endOfAdmission.diff(now,'days'),
            hours: endDiff.hours(),
            minutes: endDiff.minutes(),
            seconds: endDiff.seconds(),
            
            
            
          });
          setMessage(
            language === "bn" ? "ভর্তি শেষ হতে বাকি:" : "Admission will end on:"
          );
        } else if (courseDiff.asMilliseconds() > 0) {
          setCountdown({
            days: courseDiff.days(),
            hours: courseDiff.hours(),
            minutes: courseDiff.minutes(),
            seconds: courseDiff.seconds(),
          });
          setMessage(
            language === "bn" ? "কোর্স শুরু হবে:" : "The course will start on:"
          );
        }
      } else {
        setCountdown({
          days: startDiff.days(),
          hours: startDiff.hours(),
          minutes: startDiff.minutes(),
          seconds: startDiff.seconds(),
        });
        setMessage(
          language === "bn" ? "ভর্তি শুরু হবে:" : "Admission will start on:"
        );
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [startDate, endDate, courseDate, language]);

  return (
    <div className="my-10 section">
      <div>
        <h3 className="my-3 text-xl font-bold">{message}</h3>
      </div>
      <div className="grid grid-flow-col text-center justify-evenly md:gap-5 auto-cols-max">
        <div className="flex flex-col p-2 text-red-500 border border-red-500 rounded-box">
          <span className="font-mono text-5xl countdown">
            <span style={{ "--value": countdown.days }}></span>
          </span>
          days
        </div>
        <div className="flex flex-col p-2 text-red-500 border border-red-500 rounded-box">
          <span className="font-mono text-5xl countdown">
            <span style={{ "--value": countdown.hours }}></span>
          </span>
          hours
        </div>
        <div className="flex flex-col p-2 text-red-500 border border-red-500 rounded-box">
          <span className="font-mono text-5xl countdown">
            <span style={{ "--value": countdown.minutes }}></span>
          </span>
          min
        </div>
        <div className="flex flex-col p-2 text-red-500 border border-red-500 rounded-box">
          <span className="font-mono text-5xl countdown">
            <span style={{ "--value": countdown.seconds }}></span>
          </span>
          sec
        </div>
      </div>
    </div>
  );
};

export default CountDown;
