import React, { useState, useEffect } from "react";
import { ref, child, get } from "firebase/database";
import { auth, database } from "./../firebase-config.js";
import { useSearchParams } from "react-router-dom";

export default function Viewer() {
    let [params] = useSearchParams();
    const [data, setData] = useState(null);
    const [emptyData, setEmptyData] = useState(false);
    useEffect(() => {
            get(child(ref(database), `users/${params.get("u")}/project/${params.get("p")}`)).then((snapshot) => {
                if (snapshot.exists()) {
                    setData(snapshot.val())
                } else {
                    setEmptyData(true);
                }
            }).catch((err) => alert(`Can't get translate data: ${err.message}`))
    }, [])
    if (emptyData) return <p>ไม่พบข้อมูล ลองใหม่อีกครั้ง</p>
    return (
        <>
            <p>Project ID : {params.get("p")}</p>
            <p>Token : {params.get("t")}</p>
            <p>UID : {params.get("u")}</p>
            <p>Name: {data?.name || "ไม่พบข้อมูล"}</p>
            <p>Created: {data?.createdAt || "ไม่พบข้อมูล"}</p>
        </>
    )
}