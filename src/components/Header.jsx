import React from "react";
import { Bell, ChevronDown, Plus } from "react-feather";
import { useNavigate } from "react-router-dom";

const Logo = (props) => {
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        navigate("/");
    };

    return (
        <a
            className="text-text_primary font-bold text-t3 cursor-pointer"
            onClick={handleClick}
        >
            DevBattles
        </a>
    );
};

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
    const user = "/src/assets/user.png";
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        navigate("/profile");
    };

    return (
        <a className="flex relative cursor-pointer" onClick={handleClick}>
            <img src={user} className="h-6 w-6 rounded-xl"></img>
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
                <Logo />
                <div className="flex pt-[2px] gap-3">
                    <BellIcon />
                    <PlusIcon />
                    <User />
                </div>
            </div>
        </div>
    );
}
