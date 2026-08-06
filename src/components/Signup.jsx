import React, { useState } from "react";
import { auth } from "./../firebase-config.js";
import { createUserWithEmailAndPassword } from "firebase/auth"

export default function Signup() {
    const [isStudent, setIsStudent] = useState(true);
    const [username, setUsername] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [organization, setOrganization] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = async () => {
        if ((username != "") && (firstname != "") && (lastname != "") && (email != "") && (organization != "") && (password != "") && (confirmPassword != "")) {
            if (confirmPassword == password) {
                // do it later
            } else { alert("Password are not same!") }
        } else { 
            alert("Error") 
        }
    }

    return (
        <>
            <head>
                <title>StrikeDoom | Register Page</title>
            </head>
            <div className="google-sans grid grid-cols-2 max-[830px]:grid-cols-1">
                <div className="w-full h-screen bg-[#0053DB] center max-[830px]:h-fit max-[830px]:py-[70px]">
                    <div className="w-[80%]">
                        <p className="text-slate-300 font-bold text-[20px] w-fit">ACADEMIC PORTAL</p>
                        <p className="text-white font-bold text-[60px] mt-[20px] max-[1185px]:text-[50px]">Empowering the Next Generation of Scholars.</p>
                        <p className="text-slate-300 text-[20px] max-[1185px]:mt-[20px]">Join a community of 50,000+ students and educators.</p>
                        <p className="text-slate-300 text-[20px]">managing their academic journey with precision and ease.</p>
                        <section className="flex items-center gap-[40px] mt-[40px]">
                            <div>
                                <p className="text-white text-[25px]">98%</p>
                                <p className="text-slate-300 text-[16px] font-bold">Efficiency Rate</p>
                            </div>
                            <div>
                                <p className="text-white text-[25px]">24/7</p>
                                <p className="text-slate-300 text-[16px] font-bold">Resource Access</p>
                            </div>
                        </section>
                        <div className="mt-[30px] grid grid-cols-4 gap-[15px]">
                            <div className="h-[10px] bg-[#8CA8FF] rounded-xl animation-width"></div>
                            <div className="h-[10px] bg-white rounded-xl animation-width"></div>
                            <div className="h-[10px] bg-[#8CA8FF] rounded-xl animation-width"></div>
                            <div className="h-[10px] bg-white rounded-xl animation-width"></div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-screen bg-slate-100 center">
                    <form className="w-[80%]">
                        <p className="text-black text-[30px] font-bold">สร้างบัญชีของคุณ</p>
                        <p className="text-slate-600">กรอกข้อมูลของคุณเพื่อเริ่มต้นประสบการณ์ใหม่ๆ</p>
                        <div className="grid grid-cols-2 gap-[10px] bg-slate-200 rounded-[10px] p-[4px] mt-[20px]">
                            <div onClick={() => setIsStudent(true)} className={`${isStudent ? 'bg-slate-300' : ''} rounded-[10px] h-[40px] center cursor-pointer`}>
                                <p className="text-slate-800">I am a Student</p>
                            </div>
                            <div onClick={() => setIsStudent(false)} className={`${!isStudent ? 'bg-slate-300' : ''} rounded-[10px] h-[40px] center cursor-pointer`}>
                                <p className="text-slate-800">I am a Teacher</p>
                            </div>
                        </div>
                        <div className="mt-[20px]">
                            <p className="text-slate-700">ชื่อผู้ใช้งาน <span className="text-red-500 font-bold">*</span></p>
                            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="USERNAME" className="w-full outline-none bg-white border border-solid border-slate-300 py-[10px] px-[15px] rounded-[5px]" />
                        </div>
                        <div className="grid grid-cols-2 gap-[10px] mt-[20px]">
                            <section>
                                <p className="text-slate-700">ชื่อ <span className="text-red-500 font-bold">*</span></p>
                                <input type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} placeholder="FIRST NAME" className="w-full outline-none bg-white border border-solid border-slate-300 py-[10px] px-[15px] rounded-[5px]" />
                            </section>
                            <section>
                                <p className="text-slate-700">นามสกุล <span className="text-red-500 font-bold">*</span></p>
                                <input type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} onCh placeholder="LAST NAME" className="w-full outline-none bg-white border border-solid border-slate-300 py-[10px] px-[15px] rounded-[5px]" />
                            </section>
                        </div>
                        <div className="grid grid-cols-2 gap-[10px] mt-[20px]">
                            <section>
                                <p className="text-slate-700">อีเมล <span className="text-red-500 font-bold">*</span></p>
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="EMAIL" className="w-full outline-none bg-white border border-solid border-slate-300 py-[10px] px-[15px] rounded-[5px]" />
                            </section>
                            <section>
                                <p className="text-slate-700">สถานศึกษา/องค์กร <span className="text-red-500 font-bold">*</span></p>
                                <input type="text" value={organization} onChange={(e) => setOrganization(e.target.value)} placeholder="SCHOOL/ORGANIZATION" className="w-full outline-none bg-white border border-solid border-slate-300 py-[10px] px-[15px] rounded-[5px]" />
                            </section>
                        </div>
                        <div className="grid grid-cols-2 gap-[10px] mt-[20px]">
                            <section>
                                <p className="text-slate-700">ตั้งรหัสผ่านใหม่ <span className="text-red-500 font-bold">*</span></p>
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="PASSWORD" className="w-full outline-none bg-white border border-solid border-slate-300 py-[10px] px-[15px] rounded-[5px]" />
                            </section>
                            <section>
                                <p className="text-slate-700">ยืนยันรหัสผ่าน <span className="text-red-500 font-bold">*</span></p>
                                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="CONFIRM PASSWORD" className="w-full outline-none bg-white border border-solid border-slate-300 py-[10px] px-[15px] rounded-[5px]" />
                            </section>
                        </div>
                        <button type="submit" onClick={handleSubmit} className="duration-500 hover:scale-[1.05] cursor-pointer w-full mt-[20px] py-[10px] rounded-xl text-white bg-linear-to-r from-[#00174B] via-[#0053DB] to-[#618BFF]">
                            สร้างบัญชี
                        </button>
                        <p className="text-center mt-[20px]">มีบัญชีอยู่แล้วใช่ไหม? <a href="/signin" className="text-blue-500 font-bold underline">เข้าสู่ระบบ</a></p>
                    </form>
                </div>
            </div>
        </>
    )
}