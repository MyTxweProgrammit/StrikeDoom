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
        <div className="pl-[40px]">
          <div className="mt-[60px] w-fit gap-[20px]">
            <motion.p
              initial={{ opacity: 0, translateY: "-15px" }}
              animate={{
                opacity: 1,
                translateY: "0px",
                transition: { duration: 0.7 },
              }}
              className="text-[55px]">New</motion.p>
            <motion.p
              initial={{ opacity: 0, translateY: "-15px" }}
              animate={{
                opacity: 1,
                translateY: "0px",
                transition: { duration: 0.7 },
              }}
              className="text-[55px] mt-[-15px]">Product</motion.p>
          </div>
          <motion.p
            initial={{ opacity: 0, translateY: "-15px" }}
            animate={{
              opacity: 1,
              translateY: "0px",
              transition: { duration: 0.7 },
            }} className="w-[65%]">จัดการตารางเรียนและ Event ต่างๆ ในห้องเรียนง่ายๆ ด้วยมือของคุณ</motion.p>
          <motion.p
            initial={{ opacity: 0, translateY: "-15px" }}
            animate={{
              opacity: 1,
              translateY: "0px",
              transition: { duration: 0.7 },
            }}>เริ่มการสร้างสรรค์ของคุณเลย!</motion.p>
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