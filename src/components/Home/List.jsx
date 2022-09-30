import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Aprendiz from "../../pages/Home/Aprendiz";
import Backend from "../../pages/Home/Backend";
import DesafiosMaisRanqueados from "../../pages/Home/DesafiosMaisRanqueados";
import DesafiosPopulares from "../../pages/Home/DesafiosPopulares";
import DesafiosRecentes from "../../pages/Home/DesafiosRecentes";
import Design from "../../pages/Home/Design";
import Freelancer from "../../pages/Home/Freelancer";
import Hobbista from "../../pages/Home/Hobbista";
import Hotsite from "../../pages/Home/Hotsite";
import _3D from "../../pages/Home/_3D";
import Profissional from "../../pages/Home/Profissional";

const Container = (props) => {
    return (
        <div className="bg-background w-[900px] pt-12 p-12">
            {props.children}
        </div>
    );
};

export default function List() {
    const { index } = useParams();
    const [category, setCategory] = useState(0);

    useEffect(() => {
        setCategory(index);
    }, [index]);

    return (
        <Container>
            {category == 0 && <DesafiosPopulares />}
            {category == 1 && <DesafiosRecentes />}
            {category == 2 && <DesafiosMaisRanqueados />}
            {category == 3 && <Aprendiz />}
            {category == 4 && <Hobbista />}
            {category == 5 && <Freelancer />}
            {category == 6 && <Profissional />}
            {category == 7 && <Design />}
            {category == 8 && <Hotsite />}
            {category == 9 && <_3D />}
            {category == 10 && <Backend />}
        </Container>
    );
}
