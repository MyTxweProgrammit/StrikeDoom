import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <title>StrikeDoom - A Platform That Wil Help You To Manage Classroom</title>
      <div className="google-sans">
        <header className="shadow-lg w-screen h-[60px] flex justify-around items-center">
          <p className="text-[#003EA8] font-bold text-[20px]">StrikeDoom</p>
          <div className="flex items-center gap-[20px]">
            <div className="cursor-pointer">Login</div>
            <div className="cursor-pointer text-white bg-[#003EA8] px-[13px] py-[7px] rounded-lg">Register</div>
          </div>
        </header>
        <div className="px-[10px]">
          <p className="mt-[40px] text-[60px]">StrikeDoom</p>
          <p>จัดการตารางเรียนและ Event ต่างๆ ในห้องเรียน</p>
          <div className="mt-[10px] text-[#003EA8] bg-[#DBE1FF] w-fit px-[10px] py-[7px] rounded-lg">BETA</div>
        </div>
      </div>
    </>
  );
}