import React from "react";
import { useParams } from "react-router-dom";

export default function Viewer() {
    let params = useParams();
    return (
        <p>Test Viewer : {params.projectId}</p>
    )
}