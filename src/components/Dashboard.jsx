import React from "react";
import { auth } from "./../firebase-config.js";
import { onAuthStateChanged, deleteUser } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Dashboard({ logout }) {
    const nav = useNavigate();
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
            <div className="google-sans text-blue-500">
                <div onClick={handleLogout} className="text-black text-[20px]">SignOUT</div>
            </div>
        </>
    )
}