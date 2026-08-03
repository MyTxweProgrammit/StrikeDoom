import React from "react";

export default function Signin() {

    return (
        <>
            <head>
                <title>StrikeDoom | Sign in Page</title>
            </head>
            <div className="google-sans grid grid-cols-2 max-[830px]:grid-cols-1">
                <div className="w-full h-screen bg-[#0053DB] center max-[830px]:h-fit max-[830px]:py-[70px]">
                    <div className="w-[80%] grid grid-cols-1 gap-[50vh]">
                        <div>
                            <p className="text-white font-bold">STRIKEDOOM</p>
                            <p className="text-white text-[35px] mt-[20px]">Steamline Your Academic Enterprise.</p>
                            <p className="text-slate-300 mt-[20px]">Access the central hub for institutional scheduling,</p>
                            <p className="text-slate-300">resource allocation, and faculty coordination.</p>
                        </div>
                        <div>
                            <div className="center w-fit gap-[15px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 32 32">
                                    <path d="M0 0h32v32H0z" fill="none" />
                                    <path fill="#fff" d="M14 16.59L11.41 14L10 15.41l4 4l8-8L20.59 10z" />
                                    <path fill="#fff" d="m16 30l-6.176-3.293A10.98 10.98 0 0 1 4 17V4a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v13a10.98 10.98 0 0 1-5.824 9.707ZM6 4v13a8.99 8.99 0 0 0 4.766 7.942L16 27.733l5.234-2.79A8.99 8.99 0 0 0 26 17V4Z" />
                                </svg>
                                <p className="text-white font-bold">ENTERPRISE GRADE SECURITY</p>
                            </div>
                            <p className="text-slate-300 mt-[20px]">@2024 University System Global</p>
                        </div>
                    </div>
                </div>
                <div className="w-full h-screen bg-slate-100 center">
                    <form className="w-[80%]">
                        <p className="text-black text-[30px] font-bold">เข้าสู่ระบบ</p>
                        <p className="text-slate-600">ยินดีต้อนรับกลับมานะ!</p>
                        <div className="mt-[20px]">
                            <p className="text-slate-700">ชื่อผู้ใช้งานหรืออีเมล</p>
                            <input type="text" placeholder="USERNAME/EMAIL" className="w-full outline-none bg-white border border-solid border-slate-300 py-[10px] px-[15px] rounded-[5px]" />
                        </div>
                        <div className="mt-[20px]">
                            <section className="flex justify-between items-center">
                                <p className="text-slate-700">รหัสผ่าน</p>
                                <div className="text-blue-500 font-bold underline cursor-pointer">ลืมรหัสผ่าน?</div>
                            </section>
                            <input type="password" placeholder="PASSWORD" className="w-full outline-none bg-white border border-solid border-slate-300 py-[10px] px-[15px] rounded-[5px]" />
                        </div>
                        <div className="center w-fit gap-[10px] mt-[20px]">
                            <input type="checkbox" className="w-[20px] h-[20px]" />
                            <p className="text-slate-700">Remember Me</p>
                        </div>
                        <button type="submit" className="duration-500 hover:scale-[1.05] cursor-pointer w-full mt-[20px] py-[10px] rounded-xl text-white bg-linear-to-r from-[#00174B] via-[#0053DB] to-[#618BFF]">
                            เข้าสู่ระบบ
                        </button>
                        <p className="text-center mt-[20px]">ไม่มีบัญชีใช่ไหม? <a href="/signup" className="text-blue-500 font-bold underline">สมัครสมาชิก</a></p>
                    </form>
                </div>
            </div>
        </>
    )
}