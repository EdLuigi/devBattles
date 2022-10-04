import React from "react";
import Card from "./Card";

export default function CardsContainer(props) {
    return (
        <div className="flex gap-12 flex-wrap justify-center">
            {props.data.map((i) => (
                <Card data={i} key={i.id} />
            ))}
        </div>
    );
}
