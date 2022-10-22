import React from "react";
import { File } from "react-feather";
import Likes from "../Likes";
import Stars from "../Stars";

const Container = (props) => {
    return (
        <div className="bg-red-200a flex gap-8 w-1/3 justify-start text-text_primary">
            <div className="w-[1px] bg-divider"></div>
            <div className="bg-red-700a w-full flex flex-col gap-5">
                {props.children}
            </div>
        </div>
    );
};

const Title = (props) => {
    return (
        <div className="font-bold text-text_primary text-t2">
            <p>{props.text}</p>
        </div>
    );
};

const User = (props) => {
    return (
        <div className="flex gap-2 mb-5">
            <div className="bg-gray-400 rounded-full w-6"></div>
            <div className="text-text_primary font-light">
                <p>{props.user}</p>
            </div>
        </div>
    );
};

const ContainerRepoInfo = (props) => {
    return (
        <div className="text-t2 flex gap-5 justify-between">
            {props.children}
        </div>
    );
};

const LeftBlock = (props) => {
    return (
        <div className="flex flex-col gap-3">
            <div className="flex gap-4 text-t2 mb-3">
                <Stars data={props.challenge} size={"20px"} />
                <Likes data={props.challenge} size={"20px"} />
            </div>
            <p className="flex whitespace-nowrap">Nível de dificuldade</p>
            <p className="flex whitespace-nowrap">Requisitos obrigatórios</p>
            <p className="flex whitespace-nowrap">Requisitos optativos</p>
            <p className="flex whitespace-nowrap">Critério de avaliação</p>
        </div>
    );
};

const RightBlock = (props) => {
    return (
        <div className="flex flex-col gap-3">
            <a className="text-primary text-t2 mb-3">Repositório</a>
            <p className="font-medium">{props.challenge.level}</p>
            <div>{props.challenge.required}</div>
            <div>{props.challenge.optional}</div>
            <div>{props.challenge.evaluation_criteria}</div>
        </div>
    );
};

export default function ColumnRight(props) {
    return (
        <Container>
            <Title text={"Criado por"} />
            <User user={props.challenge.user} img={props.challenge.img} />
            <Title text={"Desafio"} />

            <ContainerRepoInfo>
                <LeftBlock challenge={props.challenge} />
                <RightBlock challenge={props.challenge} />
            </ContainerRepoInfo>

            <div className="overflow-hidden mt-1.5">
                <button className="text-t2 font-medium border-[1px] rounded-[4px] w-1/2 p-1 text-primary border-primary hover:bg-primary hover:text-text_primary">
                    Submeter
                </button>
            </div>
            <div className="text-t2 text-text_primary font-bold">Arquivos</div>
            <div className="text-t2 text-text_primary font-medium mt-3 flex items-center gap-2">
                <div>
                    <File size={"30px"} />
                </div>
                <div>
                    <p>Imagens.rar</p>
                </div>
            </div>
        </Container>
    );
}
