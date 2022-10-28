import React from "react";
import Card from "./Card";

const Container = (props) => {
    return (
        <div className="flex flex-wrap gap-10 justify-center overflow-scroll">
            {props.children}
        </div>
    );
};

export default function CardsContainer(props) {
    return (
        <Container>
            {props.data.map((i) => (
                <Card data={i} key={i.id} />
            ))}
        </Container>
    );
}
