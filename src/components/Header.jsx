import React from "react";
import { FiBell } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";

const iconSize = "20px";

const Bell = (props) => {
    return (
        <a href="#" className="flex relative">
            <FiBell className="text-white" size={iconSize}></FiBell>
            <BlueCircle />
        </a>
    );
};

const Plus = (props) => {
    return (
        <div className="flex ">
            <a href="#" className="flex">
                <AiOutlinePlus className="text-white" size={iconSize} />
                <MdKeyboardArrowDown className="text-white ml-[-2px] mt-[2px]" />
            </a>
        </div>
    );
};

const User = (props) => {
    const user = "/src/assets/user.jpeg";
    return (
        <a href="#" className="flex relative">
            <img src={user} className="h-6"></img>
            <BlueCircle />
        </a>
    );
};

const BlueCircle = (props) => {
    return (
        <div className="w-full absolute flex justify-end items-start mt-[-2px] mx-[2px]">
            <div className="h-3 w-3 bg-blue rounded-xl border-[1px] border-secondary "></div>
        </div>
    );
};

export default function Header() {
    return (
        <div>
            <div className="flex bg-secondary px-14 py-6 justify-between">
                <a href="#" className="text-white font-medium">
                    DevBattles
                </a>
                <div className="flex pt-[2px] gap-4">
                    <Bell />
                    <Plus />
                    <User />
                </div>
            </div>
        </div>
    );
}
