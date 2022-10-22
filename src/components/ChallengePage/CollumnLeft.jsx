import React from "react";

const Container = (props) => {
    return (
        <div className="flex flex-col gap-6 w-2/3 pr-10">{props.children}</div>
    );
};

const Title = (props) => {
    return (
        <div className="text-text_primary font-bold text-t3">
            <p>{props.title}</p>
        </div>
    );
};

const Description = (props) => {
    return (
        <div className="text-text_secondary">
            <p>{props.desc}</p>
        </div>
    );
};

const Img = (props) => {
    return (
        <div className="">
            <img src={props.img} className="rounded-md w-[532px] h-[286px]" />
        </div>
    );
};

const Section = (props) => {
    return (
        <div className="text-text_primary text-t2 font-medium">
            Explicação do desafio
        </div>
    );
};

const Explanation = (props) => {
    return (
        <div className="text text-t2 text-text_secondary">
            {props.explanation}
        </div>
    );
};

export default function CollumnLeft(props) {
    return (
        <Container>
            <div>
                <Title title={props.challenge.title} />
                <Description desc={props.challenge.desc} />
            </div>
            <Img img={props.challenge.img} />
            <Section />
            <Explanation explanation={props.challenge.explanation} />
        </Container>
    );
}
