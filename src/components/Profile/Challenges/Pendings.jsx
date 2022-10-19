import React, { useState } from "react";
import { cardData } from "../../../Utils/MockData";
import CardChallenges from "./CardChallenges";

export default function Pendings(props) {
    const [cards, setCards] = useState([cardData[0], cardData[1]]);

    return (
        <div className="flex flex-col mt-2 gap-6">
            {cards.map((data) => (
                <CardChallenges key={data.id} data={data} />
            ))}
        </div>
    );
}
