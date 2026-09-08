import React, { useState } from "react";
import { auth, database } from "./../firebase-config.js";
import { onAuthStateChanged } from "firebase/auth";
import { get, ref, set, push } from "firebase/database";
import { useParams } from "react-router-dom";

export default function Project({ logout }) {
    let params = useParams();
    const [UID, setUID] = useState("");
    const [popupTodolist, setPopupTodolist] = useState(false);
    onAuthStateChanged(auth, (user) => { if (user) setUID(user.uid) });
    const handleShareLink = async () => {
        const changedData = ref(database, `users/${UID}/project/${params.projectId}/shared`);
        const token = push(ref(database, `users/${UID}/project/${params.projectId}`));
        const url = `${window.location.origin}/share?u=${UID}&p=${params.projectId}&t=${token.key}`;
        try {
            set(changedData, token.key);
            navigator.clipboard.writeText(url).then(() => {
                alert("Copied to clipboard: " + url);
            }).catch((err) => {
                alert("Failed to copy: " + err);
            });
        } catch (err) { console.log("can't update: " + err.message) }
    }
    return (
        <>
            {popupTodolist && (
                <div className="fixed top-0 w-screen h-screen bg-black/50 z-50 center google-sans">
                    <div className="absolute left-[20px] top-[20px] cursor-pointer" onClick={() => setPopupTodolist(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2" d="M20 20L4 4m16 0L4 20" />
                        </svg>
                    </div>
                    <form className="bg-white p-[20px] rounded-[12px] shadow-xl">
                        <p className="mt-[10px] text-slate-500 text-[12px]">Name <span className="text-red-500">*</span></p>
                        <input type="text" placeholder="ชื่อรายการ" className="outline-none border border-solid border-slate-300 rounded-[7px] h-[40px] px-[5px] text-slate-600 mt-[5px]" /> <br />
                        <p className="mt-[10px] text-slate-500 text-[12px]">Description <span className="text-red-500">*</span></p>
                        <input type="text" placeholder="รายละเอียด" className="outline-none border border-solid border-slate-300 rounded-[7px] h-[40px] px-[5px] text-slate-600 mt-[5px]" /> <br />
                        <p className="mt-[10px] text-slate-500 text-[12px]">Date <span className="text-red-500">*</span></p>
                        <input type="date" className="w-full mt-[2px] outline-none" /> <br />
                        <p className="mt-[10px] text-slate-500 text-[12px]">Time <span className="text-red-500">*</span></p>
                        <input type="time" className="w-full mt-[2px] outline-none" /> <br />
                        <div className="center gap-[5px] w-fit mt-[10px]">
                            <input type="checkbox" />
                            <p className="text-[12px]">ต้องการให้มีการแจ้งเตือนที่อีเมล</p>
                        </div>
                        <button type="submit" className="bg-blue-500 mt-[10px] text-blue-200 w-full py-[7px] rounded-[7px] duration-500 cursor-pointer hover:bg-blue-600 active:bg-blue-600">สร้าง</button>
                    </form>
                </div>
            )}
            <div className="w-screen h-screen px-[20px] google-sans">
                <section className="w-fit h-fit center gap-[20px] mt-[100px]">
                    <p className="text-black font-bold text-[30px]">เตือนความจำ</p>
                    <div onClick={() => setPopupTodolist(true)} className="center gap-[5px] cursor-pointer bg-slate-200 py-[5px] px-[10px] rounded-[7px] duration-500 hover:bg-slate-100 active:bg-slate-100">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 1024 1024">
                            <path d="M0 0h1024v1024H0z" fill="none" />
                            <path fill="#90a1b9" d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8" />
                            <path fill="#90a1b9" d="M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8Z" />
                        </svg>
                        <p className="text-slate-400">สร้าง</p>
                    </div>
                </section>
                <section className="w-fit h-fit center gap-[20px] mt-[100px]">
                    <p className="text-black font-bold text-[30px]">ตารางงาน</p>
                    <div className="center gap-[5px] cursor-pointer bg-slate-200 py-[5px] px-[10px] rounded-[7px] duration-500 hover:bg-slate-100 active:bg-slate-100">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 1024 1024">
                            <path d="M0 0h1024v1024H0z" fill="none" />
                            <path fill="#90a1b9" d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8" />
                            <path fill="#90a1b9" d="M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8Z" />
                        </svg>
                        <p className="text-slate-400">สร้าง</p>
                    </div>
                </section>
                <section className="w-fit h-fit center gap-[20px] mt-[100px]">
                    <p className="text-black font-bold text-[30px]">การส่งคำขอ</p>
                    <div className="center gap-[5px] cursor-pointer bg-slate-200 py-[5px] px-[10px] rounded-[7px] duration-500 hover:bg-slate-100 active:bg-slate-100">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 1024 1024">
                            <path d="M0 0h1024v1024H0z" fill="none" />
                            <path fill="#90a1b9" d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8" />
                            <path fill="#90a1b9" d="M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8Z" />
                        </svg>
                        <p className="text-slate-400">สร้าง</p>
                    </div>
                </section>
            </div>
        </>
    )
}