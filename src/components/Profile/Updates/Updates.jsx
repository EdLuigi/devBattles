import React from "react";
import Latest from "./Latest";
import Links from "./Links";

const Container = (props) => {
    return <div className="w-[30rem]">{props.children}</div>;
};

const Divider = (props) => {
    return <div className="bg-divider w-full h-[1px] mt-14" />;
};

export default function Updates() {
    return (
        <Container>
            <Latest />
            <Divider />
            <Links />
        </Container>
    );
}
