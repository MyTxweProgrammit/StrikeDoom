import React from "react";
import { useParams } from "react-router-dom";

export default function Project() {
    let params = useParams();
    const handleShareLink = () => {
        const url = `${window.location.origin}/share?p=${params.projectId}`;
        navigator.clipboard.writeText(url).then(() => {
            alert("Copied to clipboard: " + url);
        }).catch((err) => {
            alert("Failed to copy: " + err);
        });
    }
    return (
        <>
            <p>Test {params.projectId}</p>
            <button onClick={handleShareLink}>Share</button>
        </>
    )
}