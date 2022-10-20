import React from "react";
import { updates } from "../../../Utils/MockData";

const Container = (props) => {
    return (
        <div className="w-full text-text_primary text-t2 flex flex-col gap-3">
            {props.children}
        </div>
    );
};

const Title = (props) => {
    return (
        <div className="">
            <p className="font-medium">Últimas atualizações</p>
        </div>
    );
};

const InfoList_Img = (props) => {
    return (
        <div className="max-w-[2.5rem]">
            <img src={props.img} className="rounded-full" />
        </div>
    );
};

const InfoList_Desc = (props) => {
    return (
        <div className="flex flex-col">
            <div className="flex">
                <p className="line-clamp-2">
                    <span className="font-bold">{props.index.user + " "}</span>
                    <span>{props.index.desc + " "}</span>
                    <span className="font-bold">{props.index.challenge}</span>
                </p>
            </div>

            <p className="font-light text-text_secondary">{props.index.date}</p>
        </div>
    );
};

const InfoList = (props) => {
    return (
        <div className="p-2 flex flex-col gap-3">
            {props.data.map((index) => (
                <div className="flex gap-5 items-center" key={index.id}>
                    <InfoList_Img img={index.img} />
                    <InfoList_Desc index={index} />
                </div>
            ))}
        </div>
    );
};

export default function Latest(props) {
    const data = [...updates].reverse();

    return (
        <Container>
            <Title />
            <InfoList data={data} />
        </Container>
    );
}
