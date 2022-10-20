import React from "react";
import { Route, Routes } from "react-router-dom";
import ChallengePage from "../pages/ChallengePage";
import Home from "../pages/Home";
import Profile from "../pages/Profile";

export default function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<Home />}>
                <Route path="/:index" element={<Home />} />
            </Route>
            <Route path="/profile" element={<Profile />} />
            <Route path="/challenge" element={<ChallengePage />}>
                <Route path="/challenge/:index" element={<ChallengePage />} />
            </Route>
        </Routes>
    );
}
