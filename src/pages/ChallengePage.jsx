import React, { useEffect } from "react";
import { useState } from "react";
import { File } from "react-feather";
import { useParams } from "react-router-dom";
import { cardData } from "../Utils/MockData";

export default function ChallengePage() {
    const { index } = useParams();
    const [challenge, setChallenge] = useState([]);
    const [img, setImg] = useState("");

    useEffect(() => {
        setChallenge(cardData[index]);
        setImg(cardData[index].img);
    }, []);

    return (
        <div className="flex min-w-min p-16 gap-10">
            <div className="bg-blue-700 text-text_primary flex flex-col gap-5 w-2/3">
                <div className="text-text_primary font-bold text-t3">
                    <p>{challenge.title}</p>
                </div>
                <div className="text-text_secondary">
                    <p>{challenge.desc}</p>
                </div>
                <div className="">
                    <img
                        src={challenge.img}
                        className="rounded-md w-[532px] h-[286px] object-"
                    />
                </div>
                <div className="text-text_primary text-t2 font-medium">
                    Explicação do desafio
                </div>
                <div className="text text-t2 text-text_secondary">
                    {challenge.explanation}
                </div>
            </div>
            <div className="bg-red-700 w-1/3 flex flex-col gap-5">
                <div className="font-bold text-text_primary text-t2">
                    <p>Criado por</p>
                </div>
                <div className="flex gap-2">
                    <div className="bg-gray-400 rounded-full w-6"></div>
                    <div className="text-text_primary font-light">
                        <p>{challenge.user}</p>
                    </div>
                </div>
                <div className="mt-3 text-text_primary font-bold text-t2">
                    <p>Desafio</p>
                </div>
                <div className="text-t2 text-text_primary flex flex-col gap-4">
                    <div className="flex gap-3 justify-between">
                        <div className="flex gap-2">
                            <div>Stars: {challenge.stars}</div>
                            <div>Likes: {challenge.likes}</div>
                        </div>
                        <div>
                            <a>Repositório</a>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex gap-2">Nível de dificuldade</div>
                        <div>
                            <p>{challenge.level}</p>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex gap-2">
                            Requisitos obrigatórios
                        </div>
                        <div>{challenge.required}</div>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex gap-2">Requisitos optativos</div>
                        <div>{challenge.optional}</div>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex gap-2">Critério de avaliação</div>
                        <div>{challenge.evaluation_criteria}</div>
                    </div>
                </div>
                <div className="overflow-hidden mt-1.5">
                    <button className="text-t2 font-medium border-[1px] rounded-[4px] w-1/2 p-1 text-primary border-primary hover:bg-primary hover:text-text_primary">
                        Submeter
                    </button>
                </div>
                <div className="text-t2 text-text_primary font-bold">
                    Arquivos
                </div>
                <div className="text-t2 text-text_primary font-medium mt-3 flex items-center gap-2">
                    <div>
                        <File size={"30px"} />
                    </div>
                    <div>
                        <p>Imagens.rar</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
