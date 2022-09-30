import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { linkList1, linkList2, linkList3 } from "../../Utils/LinkList";

const Container = (props) => {
    return (
        <div className="bg-background w-[900px] pt-12 p-12">
            {props.children}
        </div>
    );
};

export default function List() {
    const { index } = useParams();
    const [title, setTitle] = useState("");
    const lists = [...linkList1, ...linkList2, ...linkList3];
    const [select, setSelect] = useState(0);

    useEffect(() => {
        lists.map((i) => {
            if (i.id == index) {
                setTitle(i.title);
            }
        });
    }, [index]);

    const handleSelect = (e) => {
        setSelect(e.currentTarget.value);
    };

    return (
        <Container>
            <div className="flex justify-between">
                <div>
                    <h5 className="text-text_primary text-t4 font-bold">
                        Desafios populares
                    </h5>
                    <h5 className="text-text_secondary text-t2">
                        Exercite seus conhecimentos
                    </h5>
                </div>
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
        </Container>
    );
}
