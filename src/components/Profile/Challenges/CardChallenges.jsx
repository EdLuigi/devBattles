import React, { useState } from "react";
import { GitPullRequest, MoreVertical, Star, ThumbsUp } from "react-feather";

const Container = (props) => {
    return (
        <div className="bg-secondary rounded-md w-[551px] h-[131px] flex text-text_secondary">
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
    const handleClick = () => {
        console.log("click config");
    };
    return (
        <div className="flex justify-between">
            <div className="">
                <p className="font-bold text-t2 text-text_primary line-clamp-1">
                    {props.title}
                </p>
            </div>
            <div
                className=" cursor-pointer hover:text-text_primary bg-green-700b mr-[-0.25rem]"
                onClick={handleClick}
            >
                <MoreVertical size="20px" />
            </div>
        </div>
    );
};

const Desc = (props) => {
    return (
        <div>
            <div className="text-t1 line-clamp-2 pr-2 mt-0.5 leading-snug">
                <p>{props.desc}</p>
            </div>
        </div>
    );
};

const Level = (props) => {
    return (
        <div className="text-t1 flex gap-1 mt-2.5">
            <p>Nível:</p>
            <p>{props.level}</p>
        </div>
    );
};

const Container_Star_Likes_GitPull = (props) => {
    return (
        <div className="flex gap-4 text-t1 font-light mt-1">
            {props.children}
        </div>
    );
};

const Stars = (props) => {
    const [star, setStar] = useState(false);

    const handleStar = () => {
        setStar(!star);
    };

    return (
        <div
            className={
                "flex gap-2 cursor-pointer select-none hover:text-text_primary items-center " +
                (star ? "text-text_primary" : "text-text_secondary")
            }
            onClick={handleStar}
        >
            <Star
                size={"14px"}
                className={star ? "fill-text_primary" : undefined}
            />
            <h5>{props.stars}</h5>
        </div>
    );
};

const Likes = (props) => {
    const [like, setLike] = useState(false);

    const handleLike = () => {
        setLike(!like);
    };

    return (
        <div
            className={
                "flex gap-2 font-light cursor-pointer select-none items-center " +
                (like
                    ? "text-text_primary"
                    : "text-text_secondary hover:text-text_primary")
            }
            onClick={handleLike}
        >
            <ThumbsUp
                size={"14px"}
                className={
                    like ? "fill-text_primary text-secondary" : undefined
                }
            />
            <h5>{props.likes}</h5>
        </div>
    );
};

const GitPull = (props) => {
    const [gitPull, setGitPull] = useState(false);

    const handleGitPull = () => {
        setGitPull(!gitPull);
    };

    return (
        <div
            className={
                "flex gap-2 cursor-pointer select-none hover:text-text_primary items-center " +
                (gitPull ? "text-text_primary" : "text-text_secondary")
            }
            onClick={handleGitPull}
        >
            <GitPullRequest
                size={"14px"}
                className={
                    gitPull ? "fill-secondary text-text_primary" : undefined
                }
            />
            <h5>{props.gitPulls}</h5>
        </div>
    );
};

export default function CardChallenges(props) {
    return (
        <Container>
            <Img img={props.data.img} />
            <div className="w-2/3 p-3 pl-6 gap-0 flex flex-col">
                <Title title={props.data.title} />
                <Desc desc={props.data.desc} />
                <Level level={props.data.level} />

                <Container_Star_Likes_GitPull>
                    <Stars stars={props.data.stars} />
                    <Likes likes={props.data.likes} />
                    <GitPull gitPulls={props.data.gitPulls} />
                </Container_Star_Likes_GitPull>
            </div>
        </Container>
    );
}
