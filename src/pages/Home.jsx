import React from "react";

const LinkItems = (props) => {
    const urlName = window.location.href
        .substring(
            window.location.href.indexOf("?") + 1,
            window.location.href.length
        )
        .replace(/-/gi, " ");

    return (
        <>
            {props.list.map((i) => {
                console.log("XXXXX: " + urlName);
                return (
                    <div className="py-[6px] " key={props.list.indexOf(i)}>
                        <a
                            href={i.link}
                            className={
                                "py-1 " +
                                (urlName == i.title.toLowerCase()
                                    ? "text-text_primary"
                                    : "text-text_secondary")
                            }
                        >
                            {i.title}
                        </a>
                    </div>
                );
            })}
        </>
    );
};

const Sidebar = (props) => {
    const linkList1 = [
        { title: "Desafios populares", link: "/?desafios-populares" },
        { title: "Desafios recentes", link: "/?desafios-recentes" },
        {
            title: "Desafios mais ranqueados",
            link: "/?desafios-mais-ranqueados",
        },
    ];
    const linkList2 = [
        { title: "Aprendiz", link: "/?aprendiz" },
        { title: "Hobbista", link: "/?hobbista" },
        { title: "Freelancer", link: "/?freelancer" },
        { title: "Profissional", link: "/?profissional" },
    ];
    const linkList3 = [
        { title: "Design", link: "/?design" },
        { title: "Hotsite", link: "/?hotsite" },
        { title: "3D", link: "/?3d" },
        { title: "Backend", link: "/?backend" },
    ];

    const Container = (props) => {
        return <div className="w-[220px] pt-12">{props.children}</div>;
    };

    const Divider = (props) => {
        return <div className="bg-divider w-full h-[2px] my-2"></div>;
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
    return <div className="bg-gray-600 w-[800px]"></div>;
};

export default function Main() {
    return (
        <div className="flex justify-center h-[1000px] relative">
            <Sidebar />
            <List />
        </div>
    );
}
