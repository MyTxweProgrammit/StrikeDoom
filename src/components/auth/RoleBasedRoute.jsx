import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function RoleBasedRoute ({ requiredRole, isLoading }) {
    const localtion = useLocation();
    if (isLoading) return null;
    const sessionUser = localStorage.user_strikedoom_token ? JSON.parse(localStorage.user_strikedoom_token) : null;

    let userRole = null;
    if (sessionUser && sessionUser.token) userRole = "user";

    if (userRole === requiredRole) return <Outlet />;
    if (userRole === "user") return <Navigate to="/user" state={{ from: location }} replace />;

    return <Navigate to="/signin" state={{ from: location }} replace />
}