import React from "react";
import { GitPullRequest, MoreVertical, Star, ThumbsUp } from "react-feather";
import { cardData } from "../../Utils/MockData";

const YourChallenges = (props) => {
    return (
        <div className="">
            <p>Seus Desafios</p>
        </div>
    );
};

const Pendings = (props) => {
    return (
        <div className="">
            <p>Pendências</p>
        </div>
    );
};

const Submissions = (props) => {
    return (
        <div className="">
            <p>Submissões</p>
        </div>
    );
};

const Card = (props) => {
    const data = cardData[0];
    return (
        <div className="bg-secondary rounded-md w-[551px] h-[131px] mt-8 flex text-text_primary">
            <div className="w-1/3">
                <img src={data.img} className="h-full rounded-l-md"></img>
            </div>
            <div classname="w-2/3">
                <div>
                    <p>{data.title}</p>
                    <div>
                        <MoreVertical size="14px" />
                    </div>
                </div>
                <div>
                    <p>{data.desc}</p>
                </div>
                <div>
                    Nível:
                    <p>{data.level}</p>
                </div>
                <div>
                    <Star size={"16px"} />
                    <p>{data.stars}</p>
                </div>
                <div>
                    <ThumbsUp size={"16px"} />
                    <p>{data.likes}</p>
                </div>
                <div>
                    <GitPullRequest size={"16px"} />
                    <p>{data.gitPulls}</p>
                </div>
            </div>
        </div>
    );
};

export default function Challenges() {
    return (
        <div className="flex flex-col">
            <div className="flex gap-5 mt-10 text-text_primary">
                <YourChallenges />
                <Pendings />
                <Submissions />
            </div>
            <Card />
        </div>
    );
}
