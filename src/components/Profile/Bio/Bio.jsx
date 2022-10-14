import React from "react";
import BioCard1 from "./BioCard1";
import BioCard2 from "./BioCard2";

const BioTitle = (props) => {
    return (
        <div>
            <h5 className="text-text_primary text-t2 font-medium">
                {props.title}
            </h5>
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
