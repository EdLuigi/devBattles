import React from "react";
import List from "../components/Home/List";
import Sidebar from "../components/Home/Sidebar";

export default function Main() {
    return (
        <div className="flex justify-center min-h-[1000px] relative">
            <Sidebar />
            <List />
        </div>
    );
}
