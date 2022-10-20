import React from "react";
import Bio from "../components/Profile/Bio/Bio";
import Challenges from "../components/Profile/Challenges/Challenges";
import Updates from "../components/Profile/Updates/Updates";

export default function Profile() {
    return (
        <div className="w-full p-10 flex justify justify-center gap-28 min-w-min">
            <div>
                <Bio />
                <Challenges />
            </div>
            <Updates />
        </div>
    );
}
