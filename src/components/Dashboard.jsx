import React, { useState, useEffect } from "react";
import { auth, database } from "./../firebase-config.js";
import { onAuthStateChanged, deleteUser } from "firebase/auth";
import { get, child, ref } from "firebase/database";
import { useNavigate } from "react-router-dom";

export default function Dashboard({ logout }) {
    const nav = useNavigate();
    const [displayName, setDisplayName] = useState("");
    const [UID, setUID] = useState("");
    const [Email, setEmail] = useState("");
    const [Organization, setOrganization] = useState("");
    const [animation, setAnimation] = useState(false);
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const displayname = user.displayName;
            const uid = user.uid;
            const email = user.email;
            setDisplayName(displayname);
            setUID(uid);
            setEmail(email);
        }
    });
    useEffect(() => {
        if (!UID) return;
        get(child(ref(database), `users/${UID}`)).then((snapshot) => {
            if (snapshot.exists()) {
                setOrganization(snapshot.val().organization);
                console.log(snapshot.val())
            }
        }).catch((err) => alert(`Can't get translate data: ${err.message}`))
    },[UID])
    const handleLogout = () => {
        localStorage.removeItem('user_strikedoom_token');
        logout();
        nav("/signin");
    }
    return (
        <>
            <head>
                <title>StrikeDoom | Dashboard</title>
            </head>
            <div className="relative google-sans text-blue-500 h-screen">
                <div className={`absolute z-99 overflow-hidden bg-slate-200 w-full duration-500 ${animation ? 'h-screen' : 'h-0'}`}>
                    <div onClick={() => setAnimation(false)} className="center cursor-pointer w-fit mt-[30px] ml-[30px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <g fill="#4a4a4a" fill-rule="evenodd" clip-rule="evenodd">
                                <path d="M5.47 5.47a.75.75 0 0 1 1.06 0l12 12a.75.75 0 1 1-1.06 1.06l-12-12a.75.75 0 0 1 0-1.06" />
                                <path d="M18.53 5.47a.75.75 0 0 1 0 1.06l-12 12a.75.75 0 0 1-1.06-1.06l12-12a.75.75 0 0 1 1.06 0" />
                            </g>
                        </svg>
                    </div>
                    <div className="text-black text-[50px] relative group w-fit mt-[60px] ml-[30px]">
                        <a href="#">Overview</a>
                        <div className="duration-500 w-0 group-hover:w-full group-active:w-full border border-solid border-black"></div>
                    </div>
                    <div className="text-black text-[50px] relative group w-fit mt-[20px] ml-[30px]">
                        <a href="#">Notification</a>
                        <div className="duration-500 w-0 group-hover:w-full group-active:w-full border border-solid border-black"></div>
                    </div>
                    <div className="text-black text-[50px] relative group w-fit mt-[20px] ml-[30px]">
                        <a href="#">Setting</a>
                        <div className="duration-500 w-0 group-hover:w-full group-active:w-full border border-solid border-black"></div>
                    </div>
                    <div onClick={handleLogout} className="text-black text-[50px] relative group w-fit mt-[20px] ml-[30px]">
                        <p className="duration-500 group-hover:text-red-500 group-active:text-red-500 cursor-pointer">Log Out</p>
                        <div className="duration-500 w-0 group-hover:w-full group-active:w-full border border-solid border-black group-hover:border-red-500 group-active:border-red-500"></div>
                    </div>
                </div>
                <div onClick={() => setAnimation(true)} className="z-40 bg-white center border border-solid border-slate-200 w-[60px] h-[60px] rounded-full cursor-pointer sticky top-[20px] left-[20px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 32 32">
                        <path d="M0 0h32v32H0z" fill="none" />
                        <path fill="none" stroke="#4a4a4a" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h22M5 16h22M5 24h22" />
                    </svg>
                </div>
                <section className="absolute top-0 w-full h-screen pl-[20px] bg-white">
                    <p className="text-[#003EA8] mt-[100px] tracking-widest">USER DASHBOARD</p>
                    <p className="text-black font-bold text-[40px] mt-[10px]">Welcome, {displayName}</p>
                    <p className="text-slate-600 font-bold">{Organization}</p>
                    <p className="text-slate-600 mt-[20px] w-[70%]">Manage your lecture transitions and facility requests with architectural precision. Your schedule for <a className="text-blue-500 font-bold">Fall Semester 2024</a> is active.</p>
                    <p className="text-black font-bold text-[30px] mt-[100px]">New Project</p>
                    <div className="w-[250px] h-[120px] bg-slate-200 border border-solid border-slate-300 rounded-[20px] mt-[20px] cursor-pointer duration-500 hover:bg-slate-300 center">
                        <div>
                            <section className="w-fit mx-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path fill="#4a4a4a" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z" />
                                </svg>
                            </section>
                            <p className="text-slate-600">สร้างตารางสอน</p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}