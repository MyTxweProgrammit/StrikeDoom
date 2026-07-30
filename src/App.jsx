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
        <div className="pl-[40px]">
          <div className="center mt-[60px] w-fit gap-[20px]">
            <p className="text-[55px]">New Product</p>
            <div className="mt-[10px] text-[#003EA8] bg-[#DBE1FF] w-fit px-[10px] py-[7px] rounded-lg">BETA</div>
          </div>
          <p>จัดการตารางเรียนและ Event ต่างๆ ในห้องเรียนง่ายๆ ด้วยมือของคุณ</p>
          <p>เริ่มการสร้างสรรค์ของคุณเลย!</p>
          <div className="w-fit center mt-[20px] mb-[60px] gap-[15px]">
            <div className="cursor-pointer bg-[#003EA8] text-white p-[10px] text-[12px] rounded-lg duration-[0.3s] hover:bg-white hover:text-[#003EA8] hover:border hover:border-solid hover:border-[#003EA8] active:bg-white active:text-[#003EA8] active:border active:border-solid active:border-[#003EA8]">
              GET STARTED
            </div>
            <div className="cursor-pointer bg-white text-[#003EA8] border border-solid border-[#003EA8] p-[10px] text-[12px] rounded-lg duration-[0.3s] hover:bg-[#003EA8] hover:text-white active:bg-[#003EA8] active:text-white">
              DOCUMENTATION
            </div>
          </div>
        </div>
        <div className="w-screen grid grid-cols-4 gap-[30px] bg-slate-100 py-[20px] max-[960px]:grid-cols-2">
          <div className="center gap-[6px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path fill="#334155" d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9zm6.82 6L12 12.72L5.18 9L12 5.28zM17 16l-5 2.72L7 16v-3.73L12 15l5-2.73z" />
            </svg>
            <p className="text-[14px] text-slate-600">GLOBAL UNIVERSITY</p>
          </div>
          <div className="center gap-[6px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path fill="#334155" d="M11.5 1L2 6v2h19V6m-5 4v7h3v-7M2 22h19v-3H2m8-9v7h3v-7m-9 0v7h3v-7z" />
            </svg>
            <p className="text-[14px] text-slate-600">STATE INSTITUTE</p>
          </div>
          <div className="center gap-[6px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path fill="#334155" d="M3 17.25V21h3.75L17.81 9.93l-3.75-3.75zm19.61 1.11l-4.25 4.25l-5.2-5.2l1.77-1.77l1 1l2.47-2.48l1.42 1.42L18.36 17l1.06 1l1.42-1.4zm-16-7.53L1.39 5.64l4.25-4.25L7.4 3.16L4.93 5.64L6 6.7l2.46-2.48l1.42 1.42l-1.42 1.41l1 1zM20.71 7c.39-.39.39-1 0-1.41l-2.34-2.3c-.37-.39-1.02-.39-1.41 0l-1.84 1.83l3.75 3.75z" />
            </svg>
            <p className="text-[14px] text-slate-600">DESIGN ACADEMY</p>
          </div>
          <div className="center gap-[6px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 32 32">
              <path d="M0 0h32v32H0z" fill="none" />
              <path fill="#334155" d="m22.12 24.438l-3.36-7.847c-.33-.768-.6-2.08-.6-2.916s.513-1.52 1.14-1.52s1.14-.514 1.14-1.14s-.684-1.14-1.52-1.14h-6.84c-.836 0-1.52.512-1.52 1.14s.513 1.14 1.14 1.14s1.14.684 1.14 1.52s-.27 2.148-.6 2.917L8.88 24.44c-.33.768-.6 1.74-.6 2.157s.342 1.103.76 1.52s1.444.76 2.28.76h8.36c.835 0 1.86-.34 2.28-.76s.76-1.102.76-1.52s-.27-1.39-.6-2.157zM16.583 7.625a1.082 1.082 0 1 0 2.166 0a1.083 1.083 0 1 0-2.166.001zm-2.915.167a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m1.917-2.5a1.584 1.584 0 1 0-.002-3.164a1.584 1.584 0 0 0 .002 3.162z" />
            </svg>
            <p className="text-[14px] text-slate-600">BIOTECH LAB</p>
          </div>
        </div>
      </div>
    </>
  );
}