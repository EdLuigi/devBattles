import React from "react";
import { cardData } from "../../Utils/MockData";
import CardsContainer from "../../components/CardsContainer";
import ListHeader from "../../components/Home/ListHeader";

export default function DesafiosPopulares() {
    return (
        <div>
            <ListHeader
                title="Desafios populares"
                subtitle="Exercite seus conhecimentos"
            />
            <CardsContainer data={cardData} />
        </div>
    );
}
