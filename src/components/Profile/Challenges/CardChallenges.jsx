import React from "react";
import { GitPullRequest, MoreVertical, Star, ThumbsUp } from "react-feather";

const Container = (props) => {
    return (
        <div className="bg-secondary rounded-md w-[551px] h-[131px] flex text-text_primary">
            {props.children}
        </div>
    );
};

const Img = (props) => {
    return (
        <div className="w-1/3 flex">
            <img src={props.img} className="w-full rounded-l-md object-cover" />
        </div>
    );
};

const Title = (props) => {
    return (
        <div>
            <p>{props.title}</p>
            <div>
                <MoreVertical size="14px" />
            </div>
        </div>
    );
};

const Desc = (props) => {
    return (
        <div>
            <p>{props.desc}</p>
        </div>
    );
};

const Level = (props) => {
    return (
        <div>
            <p>Nível:</p>
            <p>{props.level}</p>
        </div>
    );
};

const Stars = (props) => {
    return (
        <div>
            <Star size={"16px"} />
            <p>{props.stars}</p>
        </div>
    );
};

const Likes = (props) => {
    return (
        <div>
            <ThumbsUp size={"16px"} />
            <p>{props.likes}</p>
        </div>
    );
};

const GitPull = (props) => {
    return (
        <div>
            <GitPullRequest size={"16px"} />
            <p>{props.gitPulls}</p>
        </div>
    );
};

export default function CardChallenges(props) {
    return (
        <Container>
            <Img img={props.data.img} />
            <div className="w-2/3 p-4">
                <Title title={props.data.title} />
                <Desc desc={props.data.desc} />
                <Level level={props.data.level} />
                <Stars star={props.data.stars} />
                <Likes likes={props.data.likes} />
                <GitPull gitPulls={props.data.gitPulls} />
            </div>
        </Container>
    );
}
