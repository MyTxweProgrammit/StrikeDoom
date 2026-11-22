import react, { useState, useEffect } from 'react'
import { auth, database } from "./../firebase-config.js";
import { onAuthStateChanged } from "firebase/auth";
import { ref, set, increment, onValue } from "firebase/database";
import { Doomsbot } from './ai/Doomsbot';

export default function Toeic({ logout }) {
    const [loading, setLoading] = useState(false);
    const [displayName, setDisplayName] = useState('');
    const [UID, setUID] = useState('');
    const [creditChat, setCreditChat] = useState('');
    const [response, setResponse] = useState('');
    const [waitButton, setWaitButton] = useState(false);
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const displayname = user.displayName;
            const uid = user.uid;
            setDisplayName(displayname);
            setUID(uid);
        }
    });
    useEffect(() => {
        if (!UID) return;
        const creditRef = ref(database, `users/${UID}/creditchat`);
        const unsubscribe = onValue(creditRef, (snapshot) => {
            if (snapshot.exists()) {
                setCreditChat(snapshot.val());
            }
        }, (err) => alert(`Can't get translate data: ${err.message}`));

        return () => unsubscribe();
    }, [UID]);
    const handleCreateChat = async () => {
        if (confirm("Use 5 credits to create, Want to continue?")) {
            if (creditChat == 0 || creditChat < 0) {
                alert("Your daily credit was out! Buy more.")
            }
            else {
                try {
                    alert("Use 5 credit to create!");
                    set(ref(database, `users/${UID}/creditchat`), increment(-5));
                    setWaitButton(true);
                    const text = await Doomsbot("Give me a toeic exam in reading parts. Make it only one with four or five choices answer. Make It long paragraph.");
                    setResponse(text);
                } catch (err) { console.error("Failed to create an exam: ", err) }
                finally { setWaitButton(false) }
            }
        }
        else { alert("Cancellation was accepted!") }
    }
    return (
        <div className="google-sans h-[1000px] px-[20px] bg-white py-[30px]">
            <p className='text-[40px] text-black w-[45%] font-bold'>รับประสบการณ์ใหม่ๆ ด้วยตัวคุณเอง</p>
            <p className='text-[20px] text-slate-400  w-[50%]'>ฝึกฝนทักษะภาษาอังกฤษเลย เรามี AI ผู้ช่วยในการอำนวยความสะดวกให้คุณทุกช่วงเวลา</p>
            <div className='aura aura-rainbow w-fit text-slate-800 mt-[10px]'>
                <div className='w-full bg-slate-200 h-full py-[7px] px-[12px] rounded-lg'>
                    <p className="font-bold text-[18px]">{displayName}</p>
                    <p className='text-[12px] text-slate-500'>Credit Usage: {creditChat}</p>
                    <progress className="progress progress-info w-56" value={creditChat} max="100"></progress>
                </div>
            </div>
            {creditChat == 0 && (
                <div role="alert" className="alert alert-error alert-dash bg-red-100 mt-[15px]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Your Credit Was Out. {''} <span className='font-bold underline cursor-pointer'>Take More!</span></span>
                </div>
            )}
            <section className='flex w-fit gap-[15px] mt-[20px]'>
                <button onClick={() => alert("Sound can't use for this moment")} className='bg-linear-to-r from-cyan-500 to-blue-500 text-white px-[12px] py-[10px] rounded-lg shadow-xl cursor-pointer duration-500 hover:scale-[1.04] active:scale-[1.04]'>
                    {loading ? "กำลังเปิดเสียง..." : "ฟังเสียงพูด"}
                </button>
                <button onClick={handleCreateChat} className='bg-linear-65 from-purple-500 to-pink-500 text-white px-[12px] py-[10px] rounded-lg shadow-xl cursor-pointer duration-500 hover:scale-[1.04] active:scale-[1.04]' disabled={waitButton}>
                    { waitButton ? "กำลังสร้าง..." : "สร้างโจทย์" }
                </button>
            </section>
            {response &&
                (<div className="collapse border-2 border-solid border-slate-200 bg-slate-100 p-[10px] mt-[20px] rounded-xl shadow-xl">
                    <input type="checkbox" />
                    <div className="collapse-title text-black font-semibold">TOEIC Exam</div>
                    <div className="collapse-content">
                        <p className="text-[12px] text-black">{response.match(/(?<=Long_Text:\s*)[\s\S]*?(?=\s*Question:)/)}</p>
                        <p className="text-black my-[10px]">170.{response.match(/(?<=Question:\s*)([\s\S]*?)(?=\s*A\))/)[0]}</p>
                        <div className="mt-[10px] text-[14px] bg-purple-200 text-purple-700 border-2 border-solid border-purple-300 p-[10px] rounded-xl duration-500 cursor-pointer hover:bg-purple-300 hover:text-purple-900 active:bg-purple-300 hover:text-purple-900">{response.match(/A\)\s*([\s\S]*?)(?=\s*B\)|$)/)[0]}</div>
                        <div className="mt-[10px] text-[14px] bg-purple-200 text-purple-700 border-2 border-solid border-purple-300 p-[10px] rounded-xl duration-500 cursor-pointer hover:bg-purple-300 hover:text-purple-900 active:bg-purple-300 hover:text-purple-900">{response.match(/B\)\s*([\s\S]*?)(?=\s*C\)|$)/)[0]}</div>
                        <div className="mt-[10px] text-[14px] bg-purple-200 text-purple-700 border-2 border-solid border-purple-300 p-[10px] rounded-xl duration-500 cursor-pointer hover:bg-purple-300 hover:text-purple-900 active:bg-purple-300 hover:text-purple-900">{response.match(/C\)\s*([\s\S]*?)(?=\s*D\)|$)/)[0]}</div>
                        <div className="mt-[10px] text-[14px] bg-purple-200 text-purple-700 border-2 border-solid border-purple-300 p-[10px] rounded-xl duration-500 cursor-pointer hover:bg-purple-300 hover:text-purple-900 active:bg-purple-300 hover:text-purple-900">{response.match(/D\)\s*([\s\S]*?)(?=\s*\)|$)/)[0]}</div>
                    </div>
                </div>)
            }
        </div>
    )
}