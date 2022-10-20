import React from "react";

export default function Links(props) {
    const github = "/src/assets/github.png";
    const linkedin = "/src/assets/linkedin.png";
    const discord = "/src/assets/discord.png";
    return (
        <div className="mt-5 flex gap-11 justify-center">
            <div>
                <img
                    src={linkedin}
                    className="w-9 opacity-30 hover:opacity-90 cursor-pointer"
                />
            </div>
            <div>
                <img
                    src={github}
                    className="w-9 rounded-full opacity-30 hover:opacity-90 cursor-pointer"
                />
            </div>
            <div>
                <img
                    src={discord}
                    className="w-9 rounded-full opacity-30 hover:opacity-90 cursor-pointer"
                />
            </div>
        </div>
    );
}
