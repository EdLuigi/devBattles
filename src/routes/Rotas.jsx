import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Profile from "../pages/Profile";

export default function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<Home />}>
                <Route path="/:index" element={<Home />} />
            </Route>
            <Route path="/profile" element={<Profile />} />
        </Routes>
    );
}
