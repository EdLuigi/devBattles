import React, { useEffect } from "react";
import { useState } from "react";
import { File } from "react-feather";
import { useParams } from "react-router-dom";
import CollumnLeft from "../components/ChallengePage/CollumnLeft";
import ColumnRight from "../components/ChallengePage/ColumnRight";
import { cardData } from "../Utils/MockData";

const Container = (props) => {
    return <div className="flex min-w-min gap-10">{props.children}</div>;
};

export default function ChallengePage() {
    const { index } = useParams();
    const [challenge, setChallenge] = useState([]);

    useEffect(() => {
        setChallenge(cardData[index]);
    }, []);

    return (
        <Container>
            <CollumnLeft challenge={challenge} />
            <ColumnRight challenge={challenge} />
        </Container>
    );
}
