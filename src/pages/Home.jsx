import React from "react";
import List from "../components/Home/List";
import Sidebar from "../components/Home/Sidebar";

const Container = (props) => {
    return (
        <div className="flex flex-col md:flex-row md:justify-center min-h-[1000px] md:min-w-min relative md:gap-12">
            {props.children}
        </div>
    );
};

export default function Main() {
    return (
        <Container>
            <Sidebar />
            <List />
        </Container>
    );
}
