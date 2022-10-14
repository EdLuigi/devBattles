import React from "react";
import { updates } from "../../Utils/MockData";

const Latest = (props) => {
    const data = updates;
    return (
        <div className="w-[479px] h-[139px] bg-red-900 text-text_primary">
            <p>Últimas atualizações</p>
            {data.reverse().map((index) => (
                <div className="flex" key={index.id}>
                    <div>
                        <img src={index.img} className="w-10 rounded-full" />
                    </div>
                    <p>{index.user}</p>
                    <p>{index.desc}</p>
                    <p>{index.challenge}</p>
                    <p>{index.date}</p>
                </div>
            ))}
        </div>
    );
};

const Divider = (props) => {
    return <div className="bg-divider w-full h-[2px] my-2 mt-16" />;
};

const Links = (props) => {
    const github = "/src/assets/github.png";
    const linkedin = "/src/assets/linkedin.png";
    const discord = "/src/assets/discord.png";
    return (
        <div className="mt-3 flex gap-10 justify-center">
            <div>
                <img
                    src={linkedin}
                    className="w-10 rounded-full opacity-30 hover:opacity-100 cursor-pointer"
                />
            </div>
            <div>
                <img
                    src={github}
                    className="w-10 rounded-full opacity-30 hover:opacity-100 cursor-pointer"
                />
            </div>
            <div>
                <img
                    src={discord}
                    className="w-10 rounded-full opacity-30 hover:opacity-100 cursor-pointer"
                />
            </div>
        </div>
    );
};

export default function Updates() {
    return (
        <div>
            <Latest />
            <Divider />
            <Links />
        </div>
    );
}
