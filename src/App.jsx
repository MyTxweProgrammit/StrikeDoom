import { useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <title>StrikeDoom | A Platform That Wil Help You To Manage Classroom</title>
      <div className="google-sans">
        <header className="shadow-lg w-screen h-[60px] flex justify-around items-center">
          <p className="text-[#003EA8] font-bold text-[20px]">StrikeDoom</p>
          <div className="flex items-center gap-[20px]">
            <div className="cursor-pointer">Login</div>
            <div className="cursor-pointer text-white bg-[#003EA8] px-[13px] py-[7px] rounded-lg">Register</div>
          </div>
        </header>
        <div className="pl-[15%] relative max-[1250px]:overflow-hidden">
          <div className="mt-[60px] w-fit gap-[20px]">
            <motion.p
              initial={{ opacity: 0, translateY: "-15px" }}
              animate={{
                opacity: 1,
                translateY: "0px",
                transition: { duration: 0.7 },
              }}
              className="text-[55px] z-99">New</motion.p>
            <motion.p
              initial={{ opacity: 0, translateY: "-15px" }}
              animate={{
                opacity: 1,
                translateY: "0px",
                transition: { duration: 0.7 },
              }}
              className="text-[55px] mt-[-15px] z-99">Product</motion.p>
          </div>
          <motion.p
            initial={{ opacity: 0, translateY: "-15px" }}
            animate={{
              opacity: 1,
              translateY: "0px",
              transition: { duration: 0.7 },
            }} className="w-[65%] z-99 max-[415px]:w-[70%] max-[385px]:w-[75%]">จัดการตารางเรียนและ Event ต่างๆ ในห้องเรียนง่ายๆ ด้วยมือของคุณ</motion.p>
          <motion.p
            initial={{ opacity: 0, translateY: "-15px" }}
            animate={{
              opacity: 1,
              translateY: "0px",
              transition: { duration: 0.7 },
            }}>เริ่มการสร้างสรรค์ของคุณเลย!</motion.p>
          <div className="w-fit center mt-[20px] mb-[60px] gap-[15px]">
            <div className="z-99 cursor-pointer bg-[#003EA8] text-white p-[10px] text-[12px] rounded-lg duration-[0.3s] hover:bg-white hover:text-[#003EA8] hover:border hover:border-solid hover:border-[#003EA8] active:bg-white active:text-[#003EA8] active:border active:border-solid active:border-[#003EA8]">
              GET STARTED
            </div>
            <div className="z-99 cursor-pointer bg-white text-[#003EA8] border border-solid border-[#003EA8] p-[10px] text-[12px] rounded-lg duration-[0.3s] hover:bg-[#003EA8] hover:text-white active:bg-[#003EA8] active:text-white">
              DOCUMENTATION
            </div>
          </div>
          <div className="absolute z-10 max-[1250px]:rotate-z-10 max-[1250px]:rotate-x-45 max-[1250px]:scale-[1.7] max-[1250px]:opacity-[0.5] max-[1250px]:top-[170px] max-[960px]:scale-[1.5] max-[960px]:right-[0%] max-[800px]:scale-[1.4] max-[778px]:scale-[1.2] max-[680px]:scale-[1] max-[680px]:top-[60px] max-[590px]:top-[255px] border border-solid border-slate-300 rounded-xl shadow-xl w-[350px] h-[270px] right-[15%] top-0 px-[15px]">
            <div className="flex items-center justify-between mt-[10px]">
              <div className="center gap-[7px]">
                <section className="w-[15px] h-[15px] rounded-full bg-red-600"></section>
                <section className="w-[15px] h-[15px] rounded-full bg-yellow-600"></section>
                <section className="w-[15px] h-[15px] rounded-full bg-green-600"></section>
              </div>
              <p className="text-black text-[14px]">Weekly View</p>
            </div>
            <div className="grid grid-cols-4 mt-[15px]">
              <section className="px-[3px]">
                <div className="w-full h-[120px] bg-[#bacce3] rounded-xl"></div>
                <div className="w-full h-[70px] bg-[#9e9e9e] rounded-xl mt-[6px]"></div>
              </section>
              <section className="px-[3px]">
                <div className="w-full h-[40px] bg-[#bacce3] rounded-xl"></div>
                <div className="w-full h-[50px] bg-[#e0c9b6] rounded-xl mt-[6px]"></div>
                <div className="w-full h-[90px] bg-[#bacce3] rounded-xl mt-[6px]"></div>
              </section>
              <section className="px-[3px]">
                <div className="w-full h-[70px] bg-[#bacce3] rounded-xl"></div>
                <div className="w-full h-[110px] bg-[#00439c] rounded-xl mt-[6px] relative">
                  <p className="absolute text-white text-[10px] bottom-[5px] left-[8px]">TH-007</p>
                </div>
              </section>
              <section className="px-[3px]">
                <div className="w-full h-[130px] bg-[#c2c2c2] rounded-xl"></div>
              </section>
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
        <div className="bg-black py-[40px]">
          <p className="text-center text-white text-[20px]">
            จัดการ Event ง่ายๆด้วย
            <span className="bg-linear-to-r from-pink-400 to-violet-300 bg-clip-text text-transparent text-[23px]">{" "}StrikeDoom</span>
          </p>
          <p className="text-center text-white font-bold text-[35px]">เปลี่ยนความยุ่งยากให้</p>
          <p className="text-center text-white font-bold text-[35px]">เป็นเรื่องง่ายทันที</p>
          <section className="py-[10px] w-fit mx-auto">
            <div className="center gap-[10px] w-fit">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48">
                <path d="M0 0h48v48H0z" fill="none" />
                <g fill="none" stroke="#8CA8FF" stroke-linecap="round" stroke-linejoin="round" stroke-width="4">
                  <path d="M42 20v19a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h21" />
                  <path d="m16 20l10 8L41 7" />
                </g>
              </svg>
              <p className="text-slate-300">ประหยัดเวลา</p>
            </div>
            <div className="center gap-[10px] w-fit">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48">
                <path d="M0 0h48v48H0z" fill="none" />
                <g fill="none" stroke="#8CA8FF" stroke-linecap="round" stroke-linejoin="round" stroke-width="4">
                  <path d="M42 20v19a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h21" />
                  <path d="m16 20l10 8L41 7" />
                </g>
              </svg>
              <p className="text-slate-300">เพิ่มประสิทธิภาพในการจัดการ</p>
            </div>
            <div className="center gap-[10px] w-fit">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48">
                <path d="M0 0h48v48H0z" fill="none" />
                <g fill="none" stroke="#8CA8FF" stroke-linecap="round" stroke-linejoin="round" stroke-width="4">
                  <path d="M42 20v19a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h21" />
                  <path d="m16 20l10 8L41 7" />
                </g>
              </svg>
              <p className="text-slate-300">ใช้งานฟรีไม่มีค่าใช้จ่าย</p>
            </div>
            <div className="center gap-[10px] w-fit">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48">
                <path d="M0 0h48v48H0z" fill="none" />
                <g fill="none" stroke="#8CA8FF" stroke-linecap="round" stroke-linejoin="round" stroke-width="4">
                  <path d="M42 20v19a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h21" />
                  <path d="m16 20l10 8L41 7" />
                </g>
              </svg>
              <p className="text-slate-300">เหมาะกับการใช้งานในเรื่องเรียน</p>
            </div>
            <div className="center gap-[10px] w-fit">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48">
                <path d="M0 0h48v48H0z" fill="none" />
                <g fill="none" stroke="#8CA8FF" stroke-linecap="round" stroke-linejoin="round" stroke-width="4">
                  <path d="M42 20v19a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h21" />
                  <path d="m16 20l10 8L41 7" />
                </g>
              </svg>
              <p className="text-slate-300">เชื่อมต่อกับ Google Classroom</p>
            </div>
          </section>
          <div className="bg-linear-to-r from-[#00174B] via-[#0053DB] to-[#618BFF] cursor-pointer duration-500 hover:scale-[1.1] active:scale-[1.1] w-fit mx-auto px-[25px] py-[9px] rounded-[20px] my-[15px]">
            <p className="text-white">ลงทะเบียนเลย</p>
          </div>
          <p className="text-slate-300 text-[12px] text-center">
            Sponsored by <span className="text-white"><i>StrikerX</i></span>
          </p>
        </div>
        <div className="w-full bg-linear-to-b from-[#00174B] via-[#0053DB] to-[#346EF6] p-[20px]">
          <p className="text-white text-[40px] max-[690px]:text-center max-[470px]:text-[30px]">เพราะพวกเราต้องการเป็น</p>
          <p className="text-white text-[35px] max-[690px]:text-center max-[470px]:text-[25px]">ส่วนหนึ่งในการพัฒนา</p>
          <p className="text-[#B4C5FF] font-bold text-[30px] max-[690px]:text-center max-[470px]:text-[25px]">"นวัตกรรม"</p>
          <div className="mt-[20px] grid grid-cols-2 max-[690px]:grid-cols-1 max-[690px]:gap-[20px] gap-[30px]">
            <section className="w-[300px] p-[20px] glass bg-white/10 backdrop-blur-lg rounded-lg border border-solid border-slate-300 max-[690px]:mx-auto">
              <div className="center w-[55px] h-[55px] bg-white rounded-full mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 16 16">
                  <path d="M0 0h16v16H0z" fill="none" />
                  <path fill="#9a9a9a" d="M11.5 8A1.5 1.5 0 0 1 13 9.5v.5c0 1.971-1.86 4-5 4s-5-2.029-5-4v-.5A1.5 1.5 0 0 1 4.5 8zM8 1.5A2.75 2.75 0 1 1 8 7a2.75 2.75 0 0 1 0-5.5" />
                </svg>
              </div>
              <p className="text-white text-center mt-[10px] font-bold">ธีร์</p>
              <p className="text-slate-300 text-[12px] text-center">Founder</p>
              <hr className="mx-[30px] my-[10px] text-slate-400" />
              <i className="text-slate-300 text-[14px] text-center">"เพราะผมเชื่อว่าความคิดสร้างสรรค์ เป็นแหล่งก่อเกิดนวัตกรรมใหม่ๆที่แปลกใหม่ของมนุษย์ ผสมผสานกับจินตนาการอย่างไม่มีที่สิ้นสุด"</i>
              <div className="flex justify-between items-center mt-[10px]">
                <p className="text-white text-[12px]">7-31-2026</p>
                <div className="group duration-500 center px-[10px] py-[7px] gap-[7px] cursor-pointer relative overflow-hidden text-[12px] text-white">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24">
                      <path d="M0 0h24v24H0z" fill="none" />
                      <defs>
                        <path id="SVGmFUv3dVk" fill="none" stroke="#fff" d="M3 16c1.5.5 1.5 3.5 5 3l1-.2m6 2.2v-3c0-.86-.363-1.636-.943-2.183a.01.01 0 0 1 .005-.018C17.48 15.117 20 12.78 20 10.001c0-1.262-.52-2.433-1.406-3.399a.01.01 0 0 1-.002-.01c.632-1.537.048-3.52-.096-3.591c-.139-.07-1.957.288-3.45 1.445a.01.01 0 0 1-.009.002A10.3 10.3 0 0 0 12 4c-1.076 0-2.103.16-3.04.449a.01.01 0 0 1-.009-.002C7.458 3.29 5.64 2.931 5.5 3.001c-.144.072-.728 2.057-.095 3.593a.01.01 0 0 1-.002.01C4.518 7.57 4 8.74 4 10.002c0 2.779 2.52 5.116 5.938 5.798a.01.01 0 0 1 .005.018A3 3 0 0 0 9 18v3" />
                      </defs>
                      <use href="#SVGmFUv3dVk" stroke-linecap="round" stroke-width="2" />
                      <use href="#SVGmFUv3dVk" stroke-linecap="round" stroke-width="2" />
                    </svg>
                  </div>
                  <div clasName="text-white text-[12px]">View Profile</div>
                  <a href="https://github.com/MyTxweProgrammit" target="_blank" rel="noopener noreferrer" className="absolute w-full h-full duration-500 group-hover:bg-white"></a>
                  <div className="absolute translate-x-[100px] duration-500 group-hover:translate-x-[0px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24">
                      <path d="M0 0h24v24H0z" fill="none" />
                      <g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                        <path stroke-dasharray="20" d="M3 12h17.5">
                          <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="20;0" />
                        </path>
                        <path stroke-dasharray="12" stroke-dashoffset="12" d="M21 12l-7 7M21 12l-7 -7">
                          <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.2s" to="0" />
                        </path>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </section>
            <section className="w-[300px] p-[20px] glass bg-white/10 backdrop-blur-lg rounded-lg border border-solid border-slate-300 max-[690px]:mx-auto">
              <div className="center w-[55px] h-[55px] bg-white rounded-full mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 16 16">
                  <path d="M0 0h16v16H0z" fill="none" />
                  <path fill="#9a9a9a" d="M11.5 8A1.5 1.5 0 0 1 13 9.5v.5c0 1.971-1.86 4-5 4s-5-2.029-5-4v-.5A1.5 1.5 0 0 1 4.5 8zM8 1.5A2.75 2.75 0 1 1 8 7a2.75 2.75 0 0 1 0-5.5" />
                </svg>
              </div>
              <p className="text-white text-center mt-[10px] font-bold">ปราชญ์</p>
              <p className="text-slate-300 text-[12px] text-center">Co-Founder</p>
              <hr className="mx-[30px] my-[10px] text-slate-400" />
              <i className="text-slate-300 text-[14px] text-center">"บนโลกใบนี้ยังมีอีกหลายสิ่งให้เราได้เรียนรู้จากมัน อยู่ที่ว่าตัวคุณจะมีความพยายามใฝ่หามันมากน้อยเพียงใด เพื่อประโยชน์ต่อตัวเอง"</i>
              <div className="flex justify-between items-center mt-[10px]">
                <p className="text-white text-[12px]">7-31-2026</p>
                <div className="group duration-500 center px-[10px] py-[7px] gap-[7px] cursor-pointer relative overflow-hidden text-[12px] text-white">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24">
                      <path d="M0 0h24v24H0z" fill="none" />
                      <defs>
                        <path id="SVGmFUv3dVk" fill="none" stroke="#fff" d="M3 16c1.5.5 1.5 3.5 5 3l1-.2m6 2.2v-3c0-.86-.363-1.636-.943-2.183a.01.01 0 0 1 .005-.018C17.48 15.117 20 12.78 20 10.001c0-1.262-.52-2.433-1.406-3.399a.01.01 0 0 1-.002-.01c.632-1.537.048-3.52-.096-3.591c-.139-.07-1.957.288-3.45 1.445a.01.01 0 0 1-.009.002A10.3 10.3 0 0 0 12 4c-1.076 0-2.103.16-3.04.449a.01.01 0 0 1-.009-.002C7.458 3.29 5.64 2.931 5.5 3.001c-.144.072-.728 2.057-.095 3.593a.01.01 0 0 1-.002.01C4.518 7.57 4 8.74 4 10.002c0 2.779 2.52 5.116 5.938 5.798a.01.01 0 0 1 .005.018A3 3 0 0 0 9 18v3" />
                      </defs>
                      <use href="#SVGmFUv3dVk" stroke-linecap="round" stroke-width="2" />
                      <use href="#SVGmFUv3dVk" stroke-linecap="round" stroke-width="2" />
                    </svg>
                  </div>
                  <div clasName="text-white text-[12px]">View Profile</div>
                  <a href="https://github.com/SirachayaKaew" target="_blank" rel="noopener noreferrer" className="absolute w-full h-full duration-500 group-hover:bg-white"></a>
                  <div className="absolute translate-x-[100px] duration-500 group-hover:translate-x-[0px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24">
                      <path d="M0 0h24v24H0z" fill="none" />
                      <g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                        <path stroke-dasharray="20" d="M3 12h17.5">
                          <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="20;0" />
                        </path>
                        <path stroke-dasharray="12" stroke-dashoffset="12" d="M21 12l-7 7M21 12l-7 -7">
                          <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.2s" to="0" />
                        </path>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="w-full py-[30px] px-[20px]">
          <p className="text-center text-blue-600 font-bold">Knowledge & Data Management</p>
          <p className="text-center text-[35px] font-bold text-black my-[10px] max-[514px]:text-[30px]">จัดการความรู้และข้อมูลอย่างมีประสิทธิภาพ</p>
          <p className="text-center mx-auto text-slate-600 w-[70%]">สร้างฐานข้อมูลตารางเรียนใหม่แบบฉบับคุณ พร้อมใส่ข้อมูลที่คุณต้องการ เช่น การนัดหมายสอบ การแลกเปลี่ยนคาบ การชดเชยคาบเรียน ฯลฯ</p>
          <p className="text-center text-slate-600 text-[12px] mt-[50px]">What Did We Use to Create?</p>
          <marquee  className="mx-[20px] mt-[20px] center">
            <div className="center gap-[30px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 256 289">
                <path d="M0 0h256v289H0z" fill="none" />
                <path fill="#539e43" d="M128 288.464c-3.975 0-7.685-1.06-11.13-2.915l-35.247-20.936c-5.3-2.915-2.65-3.975-1.06-4.505c7.155-2.385 8.48-2.915 15.9-7.156c.796-.53 1.856-.265 2.65.265l27.032 16.166c1.06.53 2.385.53 3.18 0l105.74-61.217c1.06-.53 1.59-1.59 1.59-2.915V83.08c0-1.325-.53-2.385-1.59-2.915l-105.74-60.953c-1.06-.53-2.385-.53-3.18 0L20.405 80.166c-1.06.53-1.59 1.855-1.59 2.915v122.17c0 1.06.53 2.385 1.59 2.915l28.887 16.695c15.636 7.95 25.44-1.325 25.44-10.6V93.68c0-1.59 1.326-3.18 3.181-3.18h13.516c1.59 0 3.18 1.325 3.18 3.18v120.58c0 20.936-11.396 33.126-31.272 33.126c-6.095 0-10.865 0-24.38-6.625l-27.827-15.9C4.24 220.885 0 213.465 0 205.515V83.346C0 75.396 4.24 67.976 11.13 64L116.87 2.783c6.625-3.71 15.635-3.71 22.26 0L244.87 64C251.76 67.975 256 75.395 256 83.346v122.17c0 7.95-4.24 15.37-11.13 19.345L139.13 286.08c-3.445 1.59-7.42 2.385-11.13 2.385m32.596-84.009c-46.377 0-55.917-21.2-55.917-39.221c0-1.59 1.325-3.18 3.18-3.18h13.78c1.59 0 2.916 1.06 2.916 2.65c2.12 14.045 8.215 20.936 36.306 20.936c22.261 0 31.802-5.035 31.802-16.96c0-6.891-2.65-11.926-37.367-15.372c-28.886-2.915-46.907-9.275-46.907-32.33c0-21.467 18.02-34.187 48.232-34.187c33.921 0 50.617 11.66 52.737 37.101q0 1.193-.795 2.385c-.53.53-1.325 1.06-2.12 1.06h-13.78c-1.326 0-2.65-1.06-2.916-2.385c-3.18-14.575-11.395-19.345-33.126-19.345c-24.38 0-27.296 8.48-27.296 14.84c0 7.686 3.445 10.07 36.306 14.31c32.597 4.24 47.967 10.336 47.967 33.127c-.265 23.321-19.345 36.571-53.002 36.571" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="33.69" height="30" viewBox="0 0 256 228">
                <path d="M0 0h256v228H0z" fill="none" />
                <path fill="#00d8ff" d="M210.483 73.824a172 172 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171 171 0 0 0-6.375 5.848a156 156 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a171 171 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a146 146 0 0 0 6.921 2.165a168 168 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a146 146 0 0 0 5.342-4.923a168 168 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145 145 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844m-6.365 70.984q-2.102.694-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14m-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a157 157 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345q.785 3.162 1.386 6.193M87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a157 157 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a135 135 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94M50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a135 135 0 0 1-6.318-1.979m12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144 144 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160 160 0 0 1-1.76-7.887m110.427 27.268a348 348 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381 381 0 0 0-7.365-13.322m-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322 322 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18M82.802 87.83a323 323 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a322 322 0 0 0-7.848 12.897m8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321 321 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147m37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486m52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382 382 0 0 0 7.859-13.026a347 347 0 0 0 7.425-13.565m-16.898 8.101a359 359 0 0 1-12.281 19.815a329 329 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310 310 0 0 1-12.513-19.846h.001a307 307 0 0 1-10.923-20.627a310 310 0 0 1 10.89-20.637l-.001.001a307 307 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329 329 0 0 1 12.335 19.695a359 359 0 0 1 11.036 20.54a330 330 0 0 1-11 20.722m22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026q-.518 2.504-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a161 161 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3M128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width={112.95} height={30} viewBox="0 0 512 136">
                <path fill="#5e5e5e" d="M487.53 110.731q-7.505 0-13.571-3.496q-5.963-3.496-9.356-9.664q-3.393-6.272-3.392-13.983q0-7.401 3.187-13.571q3.186-6.075 8.786-9.642l.364-.228q5.86-3.7 13.365-3.7q7.711 0 13.366 3.392q5.757 3.393 8.74 9.459q2.98 5.962 2.981 13.777q0 .925-.103 1.85l-.093.887q-.01.11-.01.141H472.52q.514 6.992 5.038 10.795q4.524 3.805 10.28 3.804q8.843 0 13.572-8.225l9.665 4.627q-3.393 6.272-9.46 10.076q-5.963 3.7-14.085 3.701m12.955-33.414q-.206-2.467-1.645-5.038q-1.44-2.57-4.524-4.318q-2.982-1.85-7.505-1.85q-5.038 0-8.74 3.084q-3.597 3.084-4.934 8.122zm-64.096 33.414q-8.739 0-14.496-4.01q-5.655-4.112-8.02-10.281l10.076-4.318q1.748 4.215 5.038 6.374q3.393 2.16 7.402 2.16q4.215 0 6.889-1.543q2.673-1.645 2.673-4.215q0-2.365-1.983-3.88l-.177-.13q-2.159-1.644-7.093-2.879l-6.992-1.644q-5.757-1.338-9.972-4.935q-4.113-3.702-4.113-9.562q0-6.943 5.614-11.03l.247-.177q5.86-4.215 14.393-4.215q7.094 0 12.544 2.982q5.551 2.98 8.018 8.636l-9.972 4.215q-1.44-3.186-4.421-4.73q-2.982-1.54-6.477-1.541q-3.224 0-5.704 1.391l-.26.15q-2.57 1.44-2.57 3.908q0 2.159 1.748 3.496q1.77 1.278 5.422 2.18l7.944 1.932q7.71 1.953 11.515 5.963q3.803 3.908 3.804 9.459q0 4.361-2.582 7.96l-.194.265q-2.673 3.7-7.505 5.86q-4.73 2.16-10.796 2.16m-54.104 0q-5.45 0-9.87-2.159q-4.317-2.262-6.889-6.169q-2.466-4.01-2.467-9.047q0-8.02 5.963-12.646q6.065-4.627 15.32-4.627q8.12 0 13.88 2.776V76.7q0-4.486-3.482-7.425l-.22-.183q-3.599-3.084-8.74-3.084q-7.813 0-12.542 6.374l-8.636-5.963q3.598-4.833 8.944-7.403q5.45-2.57 12.235-2.57q10.99 0 17.037 5.44l.235.215q6.168 5.551 6.169 15.73v31.255h-11v-6.271h-.618q-2.467 3.496-6.272 5.757q-3.803 2.16-9.047 2.16m1.85-9.356q3.805 0 6.992-1.85q3.29-1.954 5.14-5.038q1.954-3.187 1.954-6.786q-5.449-2.982-11.618-2.982q-5.655 0-8.841 2.468q-3.187 2.468-3.187 6.271q0 3.496 2.775 5.758q2.88 2.16 6.786 2.159m-49.3 9.356q-5.553 0-9.973-2.365q-4.319-2.364-6.477-5.963h-.617v6.683h-10.693V35.472h11.31v22.105l-.617 7.094h.617q2.159-3.496 6.477-5.86q4.42-2.365 9.973-2.365q6.58 0 12.131 3.496q5.474 3.383 8.73 9.365l.215.402q3.393 6.167 3.393 13.88q0 7.47-3.184 13.492l-.209.387q-3.29 6.168-8.945 9.767q-5.551 3.496-12.131 3.496m-1.954-10.384q4.01 0 7.402-2.056q3.495-2.057 5.552-5.86q2.16-3.907 2.16-8.843q0-4.935-2.16-8.738q-2.055-3.908-5.552-5.964q-3.392-2.056-7.402-2.056t-7.505 2.056q-3.393 2.056-5.552 5.86q-2.055 3.805-2.056 8.842q0 5.039 2.056 8.842q2.16 3.804 5.552 5.86q3.495 2.058 7.505 2.057m-57.628-43.9q7.71 0 13.365 3.392q5.758 3.393 8.74 9.459q2.98 5.962 2.981 13.777q0 .925-.102 1.85l-.082.758a4 4 0 0 0-.021.27H260.86q.514 6.992 5.038 10.795q4.524 3.805 10.281 3.804q8.843 0 13.571-8.225l9.665 4.627q-3.393 6.272-9.459 10.076q-5.962 3.7-14.085 3.701q-7.505 0-13.571-3.496q-5.964-3.496-9.356-9.664q-3.393-6.272-3.393-13.983q0-7.401 3.187-13.571q3.29-6.27 9.15-9.87q5.861-3.7 13.366-3.7m-30.976.102q3.701 0 6.066 1.028v11.824q-3.496-1.748-7.814-1.748q-5.552 0-9.356 4.318q-3.7 4.215-3.701 10.384v26.73h-11.31V58.092h10.693V65.7h.617q1.587-3.767 5.658-6.292l.305-.185q4.318-2.673 8.842-2.673m30.873 9.561q-5.038 0-8.739 3.085q-3.598 3.084-4.935 8.122h27.348q-.205-2.467-1.645-5.038q-1.44-2.57-4.523-4.318q-2.982-1.85-7.506-1.85m-73.128-16.655q-3.186 0-5.449-2.16q-2.16-2.261-2.159-5.448q0-3.187 2.159-5.347q2.262-2.26 5.45-2.261q3.186 0 5.346 2.261q2.262 2.16 2.262 5.347q0 3.186-2.262 5.449q-2.16 2.16-5.347 2.159m-5.654 8.636h11.309v50.995h-11.31zm-51.514-22.619h44.723v11.001h-33.209v21.18h29.919V78.55h-29.919v30.535h-11.514z"></path>
                <path fill="#ff9100" d="M33.7 131.256a53.8 53.8 0 0 0 18.23 3.85a53.6 53.6 0 0 0 24.418-4.92a76 76 0 0 1-23.804-14.947A40.76 40.76 0 0 1 33.7 131.256"></path>
                <path fill="#ffc400" d="M52.542 115.242C36.862 100.74 27.35 79.75 28.154 56.729c.026-.748.066-1.495.112-2.242a40.6 40.6 0 0 0-21.206.222A53.55 53.55 0 0 0 .033 79.465c-.812 23.256 13.262 43.576 33.665 51.793a40.7 40.7 0 0 0 18.844-16.016"></path>
                <path fill="#ff9100" d="M52.543 115.24a40.36 40.36 0 0 0 6.113-20.042c.677-19.384-12.354-36.058-30.39-40.711a84 84 0 0 0-.111 2.241c-.804 23.022 8.708 44.011 24.388 58.513"></path>
                <path fill="#dd2c00" d="M56.64 0C46.366 8.229 38.255 19.08 33.348 31.58a75.9 75.9 0 0 0-5.09 22.911c18.035 4.653 31.066 21.328 30.389 40.712a40.45 40.45 0 0 1-6.113 20.043a75.9 75.9 0 0 0 23.804 14.945c17.838-8.245 30.493-25.987 31.226-46.973c.475-13.597-4.75-25.715-12.131-35.944C87.638 36.456 56.639 0 56.639 0"></path>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 128 128">
                <path fill="#38bdf8" d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597c6.398-8.531 13.867-11.73 22.398-9.597c4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602q-9.6 12.803-22.399 9.602c-4.87-1.215-8.347-4.746-12.207-8.66c-6.27-6.367-13.53-13.738-29.394-13.738M32.004 64c-17.066 0-27.73 8.531-32 25.602Q9.603 76.799 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66c6.274 6.367 13.536 13.738 29.395 13.738c17.066 0 27.73-8.53 32-25.597q-9.6 12.797-22.399 9.597c-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64m0 0"></path>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width={20} height={30} viewBox="0 0 256 384">
                <path fill="#0acf83" d="M64 384c35.328 0 64-28.672 64-64v-64H64c-35.328 0-64 28.672-64 64s28.672 64 64 64"></path>
                <path fill="#a259ff" d="M0 192c0-35.328 28.672-64 64-64h64v128H64c-35.328 0-64-28.672-64-64"></path>
                <path fill="#f24e1e" d="M0 64C0 28.672 28.672 0 64 0h64v128H64C28.672 128 0 99.328 0 64"></path>
                <path fill="#ff7262" d="M128 0h64c35.328 0 64 28.672 64 64s-28.672 64-64 64h-64z"></path>
                <path fill="#1abcfe" d="M256 192c0 35.328-28.672 64-64 64s-64-28.672-64-64s28.672-64 64-64s64 28.672 64 64"></path>
              </svg>
              <div className="center gap-[7px]">
                <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 128 128">
                  <path fill="#fff" d="M44.59 4.21a63.28 63.28 0 0 0 4.33 120.9a67.6 67.6 0 0 0 32.36.35a57.13 57.13 0 0 0 25.9-13.46a57.44 57.44 0 0 0 16-26.26a74.3 74.3 0 0 0 1.61-33.58H65.27v24.69h34.47a29.72 29.72 0 0 1-12.66 19.52a36.2 36.2 0 0 1-13.93 5.5a41.3 41.3 0 0 1-15.1 0A37.2 37.2 0 0 1 44 95.74a39.3 39.3 0 0 1-14.5-19.42a38.3 38.3 0 0 1 0-24.63a39.25 39.25 0 0 1 9.18-14.91A37.17 37.17 0 0 1 76.13 27a34.3 34.3 0 0 1 13.64 8q5.83-5.8 11.64-11.63c2-2.09 4.18-4.08 6.15-6.22A61.2 61.2 0 0 0 87.2 4.59a64 64 0 0 0-42.61-.38"></path>
                  <path fill="#e33629" d="M44.59 4.21a64 64 0 0 1 42.61.37a61.2 61.2 0 0 1 20.35 12.62c-2 2.14-4.11 4.14-6.15 6.22Q95.58 29.23 89.77 35a34.3 34.3 0 0 0-13.64-8a37.17 37.17 0 0 0-37.46 9.74a39.25 39.25 0 0 0-9.18 14.91L8.76 35.6A63.53 63.53 0 0 1 44.59 4.21"></path>
                  <path fill="#f8bd00" d="M3.26 51.5a63 63 0 0 1 5.5-15.9l20.73 16.09a38.3 38.3 0 0 0 0 24.63q-10.36 8-20.73 16.08a63.33 63.33 0 0 1-5.5-40.9"></path>
                  <path fill="#587dbd" d="M65.27 52.15h59.52a74.3 74.3 0 0 1-1.61 33.58a57.44 57.44 0 0 1-16 26.26c-6.69-5.22-13.41-10.4-20.1-15.62a29.72 29.72 0 0 0 12.66-19.54H65.27c-.01-8.22 0-16.45 0-24.68"></path>
                  <path fill="#319f43" d="M8.75 92.4q10.37-8 20.73-16.08A39.3 39.3 0 0 0 44 95.74a37.2 37.2 0 0 0 14.08 6.08a41.3 41.3 0 0 0 15.1 0a36.2 36.2 0 0 0 13.93-5.5c6.69 5.22 13.41 10.4 20.1 15.62a57.13 57.13 0 0 1-25.9 13.47a67.6 67.6 0 0 1-32.36-.35a63 63 0 0 1-23-11.59A63.7 63.7 0 0 1 8.75 92.4"></path>
                </svg>
                <p className="text-[#5e5e5e] font-bold text-[23px]">Stitch</p>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 32 32">
                <path fill="#0065a9" d="m29.01 5.03l-5.766-2.776a1.74 1.74 0 0 0-1.989.338L2.38 19.8a1.166 1.166 0 0 0-.08 1.647q.037.04.077.077l1.541 1.4a1.165 1.165 0 0 0 1.489.066L28.142 5.75A1.158 1.158 0 0 1 30 6.672v-.067a1.75 1.75 0 0 0-.99-1.575"></path>
                <path fill="#007acc" d="m29.01 26.97l-5.766 2.777a1.745 1.745 0 0 1-1.989-.338L2.38 12.2a1.166 1.166 0 0 1-.08-1.647q.037-.04.077-.077l1.541-1.4A1.165 1.165 0 0 1 5.41 9.01l22.732 17.24A1.158 1.158 0 0 0 30 25.328v.072a1.75 1.75 0 0 1-.99 1.57"></path>
                <path fill="#1f9cf0" d="M23.244 29.747a1.745 1.745 0 0 1-1.989-.338A1.025 1.025 0 0 0 23 28.684V3.316a1.024 1.024 0 0 0-1.749-.724a1.74 1.74 0 0 1 1.989-.339l5.765 2.772A1.75 1.75 0 0 1 30 6.6v18.8a1.75 1.75 0 0 1-.991 1.576Z"></path>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width={149.13} height={30} viewBox="0 0 512 103">
                <path d="M117.647 102.302L58.824 0L0 102.302zm59.333-4.657L226.14 4.65h-21.264l-33.912 67.537L137.053 4.65h-21.264l49.16 92.995zM512 4.65v92.995h-17.603V4.65zm-97.988 58.285q0-10.87 4.538-19.122q4.54-8.252 12.652-12.705q8.114-4.454 18.98-4.454q9.627 0 17.328 4.192q7.701 4.191 12.24 12.443q4.538 8.25 4.676 20.17v4.06h-51.847q.548 8.645 5.087 13.623q4.677 4.846 12.516 4.846q4.952 0 9.075-2.62q4.127-2.62 6.19-7.072l18.017 1.31q-3.303 9.822-12.377 15.717q-9.079 5.895-20.905 5.894q-10.865 0-18.98-4.454q-8.112-4.452-12.652-12.704q-4.538-8.252-4.538-19.124m52.26-6.548q-.962-8.514-5.364-12.443q-4.4-4.06-10.726-4.06q-7.29 0-11.827 4.322c-3.028 2.881-4.905 6.941-5.64 12.18zm-81.963-12.443q4.401 3.536 5.502 9.823l18.151-.917q-.962-7.989-5.638-13.884q-4.675-5.893-12.103-9.037q-7.286-3.275-16.09-3.275c-7.244 0-13.568 1.485-18.98 4.454q-8.113 4.453-12.652 12.705q-4.537 8.25-4.537 19.122t4.537 19.124q4.54 8.251 12.653 12.704q8.114 4.455 18.979 4.454q9.076 0 16.503-3.275q7.428-3.405 12.103-9.561q4.676-6.156 5.638-14.408l-18.29-.786q-.964 6.942-5.363 10.74q-4.403 3.668-10.591 3.668q-8.525 0-13.203-5.894q-4.674-5.895-4.674-16.766t4.674-16.765q4.678-5.895 13.203-5.894q5.914 0 10.178 3.668m-89.3-15.721h16.383l.473 13.36q1.742-5.672 4.85-8.81q4.504-4.55 12.559-4.55h6.69v14.3h-6.826q-5.734 0-9.42 1.56q-3.55 1.56-5.46 4.94q-1.774 3.381-1.774 8.58v40.042H295.01zm-75.56 15.59q-4.54 8.25-4.54 19.122t4.54 19.124T232.1 94.763q8.115 4.455 18.979 4.454q11.827 0 20.903-5.894q9.079-5.895 12.378-15.718l-18.016-1.31q-2.062 4.454-6.188 7.073q-4.127 2.62-9.077 2.62q-7.84 0-12.515-4.846q-4.539-4.979-5.089-13.622h51.849v-4.06q-.139-11.92-4.676-20.171q-4.538-8.252-12.24-12.443q-7.7-4.192-17.33-4.192q-10.864 0-18.978 4.454t-12.653 12.705m42.359.13q4.399 3.93 5.363 12.444h-33.557q1.1-7.86 5.638-12.181q4.538-4.323 11.828-4.323q6.325 0 10.728 4.06"></path>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"></path>
              </svg>
            </div>
          </marquee>
        </div>
        <div className="bg-[#DBE1FF] py-[10px]">
          <p className="text-center text-[24px] text-[#00174B]">ติดต่อสอบถามเพิ่มเติม / แก้ข้อสงสัย</p>
          <div className="mx-auto w-fit mt-[10px]">
            <section className="center w-fit gap-[10px]">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24">
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path fill="#00174b" d="m16.556 12.906l-.455.453s-1.083 1.076-4.038-1.862s-1.872-4.014-1.872-4.014l.286-.286c.707-.702.774-1.83.157-2.654L9.374 2.86C8.61 1.84 7.135 1.705 6.26 2.575l-1.57 1.56c-.433.432-.723.99-.688 1.61c.09 1.587.808 5 4.812 8.982c4.247 4.222 8.232 4.39 9.861 4.238c.516-.048.964-.31 1.325-.67l1.42-1.412c.96-.953.69-2.588-.538-3.255l-1.91-1.039c-.806-.437-1.787-.309-2.417.317" />
                </svg>
              </div>
              <p className="text-[#00174B]">
                ธีร์ <span className="font-bold underline">065-954-5774</span>
              </p>
            </section>
            <section className="center mt-[5px] gap-[10px]">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24">
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path fill="#00174b" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25a.85.85 0 1 1 .9-1.44L12 11l6.7-4.19a.85.85 0 1 1 .9 1.44" />
                </svg>
              </div>
              <p className="text-[#00174B]">humanyoungtee@gmail.com</p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}