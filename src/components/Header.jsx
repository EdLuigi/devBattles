import React from "react";
import { Bell, ChevronDown, Plus } from "react-feather";

const BellIcon = (props) => {
    return (
        <a href="#" className="flex relative mt-[3px]">
            <Bell className="text-text_primary" size={"20px"} />
            <BlueCircle />
        </a>
    );
};

const PlusIcon = (props) => {
    return (
        <div className="flex ">
            <a href="#" className="flex items-center ">
                <Plus className="text-text_primary" size={"23px"} />
                <ChevronDown
                    className="text-text_primary"
                    size={"14px"}
                    strokeWidth={"3px"}
                />
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
            <div className="h-3 w-3 bg-linear rounded-xl border-[1px] border-secondary "></div>
        </div>
    );
};

export default function Header() {
    return (
        <div>
            <div className="flex bg-secondary px-14 py-6 justify-between ">
                <a href="#" className="text-text_primary font-bold text-t3">
                    DevBattles
                </a>
                <div className="flex pt-[2px] gap-3">
                    <BellIcon />
                    <PlusIcon />
                    <User />
                </div>
            </div>
        </div>
    );
}
