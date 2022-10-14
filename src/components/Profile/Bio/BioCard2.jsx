import React from "react";
import { user } from "../../../Utils/MockData";

const Container = (props) => {
    return (
        <div className="w-[210px] h-[210px] bg-secondary rounded-md text-text_primary flex flex-wrap gap-4 p-4">
            {props.children}
        </div>
    );
};

const SmallBox = (props) => {
    return (
        <div className="bg-background flex flex-col h-20 w-20 rounded-md justify-center items-center gap-1">
            <p className="text-t1 font-light">
                {props.title + (props.data != 1 ? "s" : "")}
            </p>
            <p className="text-t4 font-bold">{props.data}</p>
        </div>
    );
};

export default function BioCard2(props) {
    const userData = user[0];
    return (
        <Container>
            <SmallBox title="Pendente" data={userData.pendentes} />
            <SmallBox title="Favoritado" data={userData.favoritados} />
            <SmallBox title="Criado" data={userData.criados} />
            <SmallBox title="Submetido" data={userData.submetidos} />
        </Container>
    );
}
