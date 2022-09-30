import React from "react";
import LinkItems from "./LinkItems";

const Container = (props) => {
    return <div className="w-[220px] pt-12">{props.children}</div>;
};

const Divider = () => {
    return <div className="bg-divider w-full h-[2px] my-2" />;
};

export default function Sidebar(props) {
    const linkList1 = [
        { id: 0, title: "Desafios populares" },
        { id: 1, title: "Desafios recentes" },
        {
            id: 2,
            title: "Desafios mais ranqueados",
        },
    ];
    const linkList2 = [
        { id: 3, title: "Aprendiz" },
        { id: 4, title: "Hobbista" },
        { id: 5, title: "Freelancer" },
        { id: 6, title: "Profissional" },
    ];
    const linkList3 = [
        { id: 7, title: "Design" },
        { id: 8, title: "Hotsite" },
        { id: 9, title: "3D" },
        { id: 10, title: "Backend" },
    ];

    return (
        <Container>
            <LinkItems list={linkList1} />
            <Divider />
            <LinkItems list={linkList2} />
            <Divider />
            <LinkItems list={linkList3} />
        </Container>
    );
}
