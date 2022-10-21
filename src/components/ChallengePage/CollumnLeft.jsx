import React from "react";

export default function CollumnLeft(props) {
    return (
        <div className="bg-blue-700 text-text_primary flex flex-col gap-5 w-2/3">
            <div className="text-text_primary font-bold text-t3">
                <p>{props.challenge.title}</p>
            </div>
            <div className="text-text_secondary">
                <p>{props.challenge.desc}</p>
            </div>
            <div className="">
                <img
                    src={props.challenge.img}
                    className="rounded-md w-[532px] h-[286px] object-"
                />
            </div>
            <div className="text-text_primary text-t2 font-medium">
                Explicação do desafio
            </div>
            <div className="text text-t2 text-text_secondary">
                {props.challenge.explanation}
            </div>
        </div>
    );
}
