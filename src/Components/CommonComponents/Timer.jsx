import React, { useEffect, useState } from "react";
import { IoEllipsisVerticalSharp } from "react-icons/io5";

const Timer = () => {
  const [time, settime] = useState(3 * 24 * 60 * 60 * 1000);

  useEffect(() => {
    const worker = new Worker(
      new URL("../../worker/CountDownWorker.js", import.meta.url)
    );
    worker.postMessage(time);
    worker.onmessage = (e) => {
      settime(e.data);
    };
  }, []);

  //   formet the coundoun data
  const formetData = (miliSecond) => {
    let totalSecond = parseInt(Math.floor(miliSecond / 1000));
    let totalMinutes = parseInt(Math.floor(totalSecond / 60));
    let totalHours = parseInt(Math.floor(totalMinutes / 60));
    let Days = parseInt(Math.floor(totalHours / 24));
    let second = parseInt(Math.floor(totalSecond % 60));
    let minutes = parseInt(Math.floor(totalMinutes % 60));
    let hours = parseInt(Math.floor(totalHours % 60));
    return { Days, hours, minutes, second };
  };

  const { Days, hours, minutes, second } = formetData(time);
  return (
    <>
      <div className="flex items-center gap-x-4">
        <div className="flex flex-col items-start ">
          <span className="font-medium text-[12px] font-popins text-TextBlack">
            Days
          </span>
          <div className="flex items-center gap-x-3">
            <h1 className="text-TextBlack font-bold font-inter text-[32px]">
              {Days < 10 ? `0${Days}` : Days}
            </h1>
            <span className="text-redDB4444 text-xl">
              <IoEllipsisVerticalSharp />
            </span>
          </div>
        </div>

        <div className="flex flex-col items-start ">
          <span className="font-medium text-[12px] font-popins text-TextBlack">
            hours
          </span>
          <div className="flex items-center gap-x-3">
            <h1 className="text-TextBlack font-bold font-inter text-[32px]">
              {hours < 10 ? `0${hours}` : hours}
            </h1>
            <span className="text-redDB4444 text-xl">
              <IoEllipsisVerticalSharp />
            </span>
          </div>
        </div>

        <div className="flex flex-col items-start ">
          <span className="font-medium text-[12px] font-popins text-TextBlack">
            Minutes
          </span>
          <div className="flex items-center gap-x-3">
            <h1 className="text-TextBlack font-bold font-inter text-[32px]">
              {minutes < 10 ? `0${minutes}` : minutes}
            </h1>
            <span className="text-redDB4444 text-xl">
              <IoEllipsisVerticalSharp />
            </span>
          </div>
        </div>

        <div className="flex flex-col items-start ">
          <span className="font-medium text-[12px] font-popins text-TextBlack">
            Seconds
          </span>
          <div className="flex items-center gap-x-3">
            <h1 className="text-TextBlack font-bold font-inter text-[32px]">
              {second < 10 ? `0${second}` : second}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timer;
