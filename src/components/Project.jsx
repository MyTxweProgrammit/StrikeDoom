import React, { useState } from "react";
import { auth, database } from "./../firebase-config.js";
import { onAuthStateChanged } from "firebase/auth";
import { get, ref, set, push } from "firebase/database";
import { useParams } from "react-router-dom";

export default function Project({ logout }) {
    let params = useParams();
    const [UID, setUID] = useState("");
    onAuthStateChanged(auth, (user) => { if (user) setUID(user.uid) });
    const handleShareLink = async () => {
        const changedData = ref(database, `users/${UID}/project/${params.projectId}/shared`);
        const token = push(ref(database, `users/${UID}/project/${params.projectId}`));
        const url = `${window.location.origin}/share?p=${params.projectId}&t=${token.key}`;
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
            <p>Test {params.projectId}</p>
            <button onClick={handleShareLink}>Share Public Link</button>
        </>
    )
}