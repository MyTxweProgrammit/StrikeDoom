import React, { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, database } from "./../firebase-config.js";
import { useSearchParams } from "react-router-dom";

export default function Viewer() {
    let [params] = useSearchParams();
    const [UID, setUID] = useState("");
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUID(user.uid);
        }
    })
    return (
        <>
            <p>Project ID : {params.get("p")}</p>
            <p>Token : {params.get("t")}</p>
            <p>UID : {UID}</p>
        </>
    )
}