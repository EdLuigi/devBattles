import React from "react";
import { linkList1, linkList2, linkList3 } from "../../Utils/LinkList";
import LinkItems from "./LinkItems";

const Container = (props) => {
    return <div className="w-[190px] pt-12">{props.children}</div>;
};

const Divider = () => {
    return <div className="bg-divider w-full h-[2px] my-2" />;
};

export default function Sidebar(props) {
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
