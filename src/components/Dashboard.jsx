import React, { useState, useEffect } from "react";
import { auth, database } from "./../firebase-config.js";
import { onAuthStateChanged } from "firebase/auth";
import { get, child, ref, set, increment, push, remove } from "firebase/database";
import { useNavigate } from "react-router-dom";

export default function Dashboard({ logout }) {
    const nav = useNavigate();
    const [displayName, setDisplayName] = useState("");
    const [UID, setUID] = useState("");
    const [Email, setEmail] = useState("");
    const [Organization, setOrganization] = useState("");
    const [animation, setAnimation] = useState(false);
    const [projects, setProjects] = useState(null);
    const [Package, setPackage] = useState("");
    const [YourProject, setYourProject] = useState([]);
    const [openPopUpToEdit, setOpenPopUpToEdit] = useState(false)
    const [projectIdToEdit, setProjectIdToEdit] = useState("");
    const [changeNameProject, setChangeNameProject] = useState("");
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
                setPackage(snapshot.val().package);
                setProjects(snapshot.val().projects);
                setYourProject(snapshot.val().project ? Object.entries(snapshot.val().project).map(([key, value]) => ({
                    projectId: key,
                    name: value.name,
                    createdAt: value.createdAt,
                })) : []);
            }
        }).catch((err) => alert(`Can't get translate data: ${err.message}`))
    }, [UID, projects])
    console.log(YourProject)
    const handleLogout = () => {
        localStorage.removeItem('user_strikedoom_token');
        logout();
        nav("/signin");
    }
    const handleCreateProject = async () => {
        const createIt = ref(database, `users/${UID}/projects`);
        if (projects == 3 && Package == "free") alert("ไม่สามารถสร้างโปรเจคได้มากกว่า 3 ตัว โปรดอัพเกรดเป็น Plus");
        else {
            try {
                const data = {
                    name: `StrikeDoom_Project`,
                    shared: "...",
                    createdAt: new Date().toISOString(),
                }
                const newKey = push(ref(database, `users/${UID}/project`))
                await set(newKey, data).then(() => {
                    alert("Add data Successfully!")
                })
                set(createIt, increment(1));
                window.location.reload();
            } catch (err) { alert("Can't add data") }
        }
    }
    const editProject = (projectId, e) => {
        e.stopPropagation();
        setProjectIdToEdit(projectId);
        setOpenPopUpToEdit(true);
    }
    const deleleProject = async (projectId, e) => {
        e.stopPropagation();
        try {
            await remove(ref(database, `users/${UID}/project/${projectId}`));
            set(ref(database, `users/${UID}/projects`), increment(-1));
            alert("Delete Project Successfully!")
            window.location.reload();
        } catch(err) { alert("Can't delete project: "+err.message); }
    }
    const handleUpdateProjectName = () => {
        try {
            set(ref(database, `users/${UID}/project/${projectIdToEdit}/name`), changeNameProject);
            alert("Update Project Name Successfully!");
            window.location.reload();
        } catch(err) {
            alert("Can't update project name:"+err.message);
        }
    }
    return (
        <>
            <head>
                <title>StrikeDoom | Dashboard</title>
            </head>
            <div className="relative google-sans text-blue-500 h-screen">
                {openPopUpToEdit && (
                    <div className="w-screen h-screen bg-black/50 fixed top-0 left-0 z-50 center">
                        <div className="absolute left-[20px] top-[20px] cursor-pointer" onClick={() => setOpenPopUpToEdit(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2" d="M20 20L4 4m16 0L4 20" />
                            </svg>  
                        </div>
                        <div className="bg-white p-[10px] rounded-[20px] center">
                            <input type="text" placeholder="เปลี่ยนชื่อโปรเจค" value={changeNameProject} onChange={(e) => setChangeNameProject(e.target.value)} className="outline-none bg-transparen pr-[10px] text-black" />
                            <div className="cursor-pointer" onClick={handleUpdateProjectName}>ยืนยัน</div>
                        </div>
                    </div>
                )}
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
                <section className="absolute top-0 w-full h-screen px-[20px] bg-white">
                    <p className="text-[#003EA8] mt-[100px] tracking-widest">USER DASHBOARD</p>
                    <p className="text-black font-bold text-[40px] mt-[10px]">Welcome, {displayName}</p>
                    <p className="text-slate-600 font-bold">{Organization}</p>
                    <p className="text-slate-600 mt-[20px] w-[70%]">Manage your lecture transitions and facility requests with architectural precision. Your schedule for <a className="text-blue-500 font-bold">Fall Semester 2024</a> is active.</p>
                    <div className="w-full mt-[20px] border border-solid border-yellow-500 bg-yellow-100 rounded-[15px] px-[10px] py-[13px] center gap-[10px]">
                        <p className="text-yellow-700">
                            คุณสามารถสร้างโปรเจคได้เพียง 3 รายการ โปรดซื้อเครดิตกับเราเพิ่มเติม {" "}
                            <span className="font-bold underline cursor-pointer">ซื้อ Package</span>
                        </p>
                    </div>
                    <p className="text-black font-bold text-[30px] mt-[100px]">New Project</p>
                    <div
                        onClick={handleCreateProject}
                        className="w-[250px] h-[120px] bg-slate-200 border border-solid border-slate-300 rounded-[20px] mt-[20px] cursor-pointer duration-500 hover:bg-slate-300 center">
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
                    <p className="text-black font-bold text-[30px] mt-[50px]">Your Project</p>
                    <div className="mt-[20px]">
                        {YourProject.map((project) => (
                            <div key={project.projectId} onClick={() => window.location.href = `/user/project/${project.projectId}`} className="w-full h-[100px] bg-slate-200 border border-solid border-slate-300 rounded-[20px] mt-[20px] cursor-pointer duration-500 hover:bg-slate-300 center relative">
                                <section className="z-10 w-fit center gap-[10px] absolute top-[10px] right-[25px]">
                                    <button className="cursor-pointer" onClick={(e) => editProject(project.projectId, e)}>
                                        <svg className="pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path fill="#5b5b5b" d="M3.38 15.95c-.13.13-.22.29-.26.46l-1.08 4.34c-.09.34.01.7.26.95c.19.19.45.29.71.29c.08 0 .16 0 .24-.03l4.34-1.09c.18-.04.34-.13.46-.26L18.2 10.46l-4.67-4.67zM19.67 2.61c-.81-.81-2.14-.81-2.95 0l-1.78 1.78l4.67 4.67l1.78-1.78c.81-.81.81-2.13 0-2.95z" />
                                        </svg>     
                                    </button>
                                    <button className="cursor-pointer" onClick={(e) => deleleProject(project.projectId, e)}>
                                        <svg className="pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                            <path d="M0 0h20v20H0z" fill="none" />
                                            <path fill="#5B5B5B" d="M8.5 4h3a1.5 1.5 0 0 0-3 0m-1 0a2.5 2.5 0 0 1 5 0h5a.5.5 0 0 1 0 1h-1.054l-1.194 10.344A3 3 0 0 1 12.272 18H7.728a3 3 0 0 1-2.98-2.656L3.554 5H2.5a.5.5 0 0 1 0-1zM9 8a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0zm2.5-.5a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 1 0V8a.5.5 0 0 0-.5-.5" />
                                        </svg>
                                    </button>
                                </section>
                                <section>
                                    <div className="text-slate-600 text-center">{project.name}</div>
                                    <div className="text-slate-400 text-[10px] text-center">{project.createdAt}</div>
                                </section>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </>
    )
}