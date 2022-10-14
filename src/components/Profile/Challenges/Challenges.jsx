import React from "react";
import Pendings from "./Pendings";
import Submissions from "./Submissions";
import YourChallenges from "./YourChallenges";

const Category = (props) => {
    return (
        <div className="flex gap-5 mt-10 text-text_primary">
            <YourChallenges />
            <Pendings />
            <Submissions />
        </div>
    );
};

export default function Challenges() {
    return (
        <div className="flex flex-col">
            <Category />
        </div>
    );
}
