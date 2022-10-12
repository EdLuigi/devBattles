import React from "react";
import { Settings } from "react-feather";
import { user } from "../../Utils/MockData";

const BioTitle = (props) => {
    return (
        <div>
            <h5 className="text-text_primary text-t2 font-medium">
                {props.title}
            </h5>
        </div>
    );
};

const BioCard1 = (props) => {
    const userData = user[0];
    return (
        <div className="flex flex-col w-[292px] h-[210px] bg-secondary rounded-md text-text_primary">
            <div>
                <img src={userData.img} className="h-20 w-20 rounded-full" />
                <p>{userData.name}</p>
                <p>{userData.surname}</p>
                <p>{userData.user}</p>
                <Settings size={"18px"} />
            </div>
            <p>{userData.bio}</p>
        </div>
    );
};

const BioCard2 = (props) => {
    const userData = user[0];
    return (
        <div className="w-[210px] h-[210px] bg-secondary rounded-md text-text_primary flex flex-wrap gap-1 p-1">
            <div className="bg-background flex flex-col h-24 w-24">
                <p>Pendentes</p>
                <p>{userData.pendentes}</p>
            </div>
            <div className="bg-background flex flex-col h-24 w-24">
                <p>Favoritados</p>
                <p>{userData.favoritados}</p>
            </div>
            <div className="bg-background flex flex-col h-24 w-24">
                <p>Criados</p>
                <p>{userData.criados}</p>
            </div>
            <div className="bg-background flex flex-col h-24 w-24">
                <p>Submetidos</p>
                <p>{userData.submetidos}</p>
            </div>
        </div>
    );
};

export default function Bio(props) {
    return (
        <div className="flex flex-col gap-2">
            <BioTitle title="Perfil" />
            <div className="flex gap-12">
                <BioCard1 />
                <BioCard2 />
            </div>
        </div>
    );
}
