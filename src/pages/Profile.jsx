import React from "react";
import Bio from "../components/Profile/Bio";
import Challenges from "../components/Profile/Challenges";

export default function Profile() {
    return (
        <div className="bg-gray-400 w-full p-10">
            <div>
                <Bio />
                <Challenges />
            </div>
        </div>
    );
}
