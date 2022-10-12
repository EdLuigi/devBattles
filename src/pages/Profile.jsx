import React from "react";
import Bio from "../components/Profile/Bio";
import Challenges from "../components/Profile/Challenges";
import Updates from "../components/Profile/Updates";

export default function Profile() {
    return (
        <div className="bg-gray-400 w-full p-10 flex gap-40">
            <div>
                <Bio />
                <Challenges />
            </div>
            <Updates />
        </div>
    );
}
