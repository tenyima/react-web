import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <div class="topnav">
            <a><Link to="/">Home</Link></a>
            <a><Link to="/about">About</Link></a>
            <a><Link to="/register">Register</Link></a>
            <a><Link to="/login">Login</Link></a>
        </div>
    )
}