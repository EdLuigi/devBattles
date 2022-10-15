import React from "react";
import { Settings } from "react-feather";
import { user } from "../../../Utils/MockData";

const Container = (props) => {
    return (
        <div className="flex flex-col w-[292px] h-[210px] bg-secondary rounded-md text-text_secondary p-4">
            {props.children}
        </div>
    );
};

const Config = (props) => {
    const handleClick = () => {
        console.log("click Settings");
    };

    return (
        <div className="w-full flex relative justify-end mt-[-4px] mx-[4px]">
            <div
                className="cursor-pointer p-[2px] hover:text-text_primary"
                onClick={handleClick}
            >
                <Settings size={"17px"} />
            </div>
        </div>
    );
};

const Img_Name = (props) => {
    const userData = user[0];

    return (
        <div className="flex gap-5 items-center mt-[-6px]">
            <div className="">
                <img src={userData.img} className="h-16 rounded-full" />
            </div>
            <div className="flex flex-col">
                <p className="text-t2 text-text_primary">
                    {userData.name + " " + userData.surname}
                </p>
                <p className="text-t1 font-light">{userData.user}</p>
            </div>
        </div>
    );
};

const BioDesc = (props) => {
    const userData = user[0];

    return (
        <div className="mt-5">
            <p className="text-t2 text-text_primary">Bio</p>
            <p className="text-t1 line-clamp-3">{userData.bio}</p>
        </div>
    );
};

export default function BioCard1(props) {
    return (
        <Container>
            <Config />
            <Img_Name />
            <BioDesc />
        </Container>
    );
}
