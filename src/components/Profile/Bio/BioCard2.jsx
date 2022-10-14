import React from "react";
import { user } from "../../../Utils/MockData";

export default function BioCard2(props) {
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
}
