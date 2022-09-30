import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const LinkItems = (props) => {
    const { index } = useParams();
    const navigate = useNavigate();

    const handleClick = (i) => {
        navigate(`/${i}`);
    };

    const Item = ({ i }) => {
        return (
            <div className="py-[6px]">
                <a
                    className={
                        "cursor-pointer py-1 " +
                        (index == i.id
                            ? "text-text_primary"
                            : "text-text_secondary")
                    }
                    onClick={() => {
                        handleClick(i.id);
                    }}
                >
                    {i.title}
                </a>
            </div>
        );
    };
    return (
        <>
            {props.list.map((i) => (
                <Item i={i} key={props.list.indexOf(i)} />
            ))}
        </>
    );
};

const Sidebar = (props) => {
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

    const Container = (props) => {
        return <div className="w-[220px] pt-12">{props.children}</div>;
    };

    const Divider = () => {
        return <div className="bg-divider w-full h-[2px] my-2" />;
    };
    return (
        <Container>
            <LinkItems list={linkList1} />
            <Divider />
            <LinkItems list={linkList2} />
            <Divider />
            <LinkItems list={linkList3} />
        </Container>
    );
};

const List = (props) => {
    const { index } = useParams();
    return <div className="bg-gray-600 w-[800px]">{index}</div>;
};

export default function Main() {
    return (
        <div className="flex justify-center h-[1000px] relative">
            <Sidebar />
            <List />
        </div>
    );
}
