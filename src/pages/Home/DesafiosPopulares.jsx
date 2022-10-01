import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Star, ThumbsUp } from "react-feather";

const Header = (props) => {
    return (
        <div>
            <h5 className="text-text_primary text-t4 font-bold">
                Desafios populares
            </h5>
            <h5 className="text-text_secondary text-t2">
                Exercite seus conhecimentos
            </h5>
        </div>
    );
};

const Button = () => {
    return (
        <div className="mt-3">
            <button
                // class="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"
                class="text-primary text-t2 font-medium border-[1px] border-primary rounded-[4px] w-full p-1"
            >
                Ver mais
            </button>
        </div>
    );
};

const Card = (props) => {
    return (
        <div className="w-[280px] h-[370px] bg-secondary rounded-md">
            <div className="flex w-full h-1/3 bg-white rounded-t-md"></div>
            <div className="p-4 ">
                <h5 className="font-bold text-t3 text-text_primary">
                    {"Homepage de ecommerce"}
                </h5>
                <h5 className="text-text_secondary text-t1">{"@carlos8v"}</h5>
                <h5 className="text-text_secondary text-t2 mt-4">
                    {"Criação de um hotsite para divulgação de produtos de..."}
                </h5>
                <div className="flex mt-4 gap-5">
                    <div className="flex text-text_secondary gap-2 text-t1 font-light">
                        <Star size={"16px"} /> <h5>{"315"}</h5>
                    </div>
                    <div className="flex text-text_secondary gap-2 text-t1 font-light">
                        <ThumbsUp size={"16px"} /> <h5>{"67"}</h5>
                    </div>
                </div>
                <div className="text-text_secondary text-t1 mt-2">
                    <h5>{"Nível: aprendiz"}</h5>
                </div>
                <Button />
            </div>
        </div>
    );
};

export default function DesafiosPopulares() {
    const { index } = useParams();
    const [title, setTitle] = useState("");
    const [select, setSelect] = useState(0);

    useEffect(() => {}, [index]);

    const handleSelect = (e) => {
        setSelect(e.currentTarget.value);
    };

    return (
        <div>
            <div className="flex justify-between">
                <Header />
                <div className="flex items-center">
                    <select
                        defaultValue={select}
                        onChange={handleSelect}
                        className="py-1 text-t2 text-text_primary bg-transparent border-b-2"
                    >
                        <option value={0}>Este ano</option>
                        <option value={1}>Este mês</option>
                        <option value={2}>Todo período</option>
                    </select>
                </div>
            </div>
            <div className="flex gap-5 flex-wrap">
                <Card />
            </div>
        </div>
    );
}
