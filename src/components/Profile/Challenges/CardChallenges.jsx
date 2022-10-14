import React from "react";
import { cardData } from "../../../Utils/MockData";
import { GitPullRequest, MoreVertical, Star, ThumbsUp } from "react-feather";

export default function CardChallenges(props) {
    const data = cardData[0];
    return (
        <div className="bg-secondary rounded-md w-[551px] h-[131px] mt-8 flex text-text_primary">
            <div className="w-1/3">
                <img src={data.img} className="h-full rounded-l-md"></img>
            </div>
            <div className="w-2/3">
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
}
