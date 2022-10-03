import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Star, ThumbsUp } from "react-feather";
import { levels, cardData } from "../../Utils/MockData";
import { Header } from "../../Utils/ListHeader";

const Button = () => {
    return (
        <div className="">
            <button className="text-t2 font-medium border-[1px] rounded-[4px] w-full p-1 text-primary border-primary hover:bg-primary hover:text-text_primary">
                Ver mais
            </button>
        </div>
    );
};

const Card = (props) => {
    const [like, setLike] = useState(false);
    const [star, setStar] = useState(false);

    const handleLike = () => {
        setLike(!like);
    };
    const handleStar = () => {
        setStar(!star);
    };

    return (
        <div className="w-[280px] h-[370px] bg-secondary rounded-md">
            <div className="flex w-full h-1/3 bg-white rounded-t-md"></div>
            <div className="flex flex-col p-4 h-2/3 rounded-b-md gap-3">
                <div className="h-11 overflow-hidden">
                    <div className="flex h-6 overflow-hidden">
                        <h5 className="font-bold text-t3 text-text_primary">
                            {props.data.title}
                        </h5>
                    </div>
                    <div className="flex h-5 overflow-hidden">
                        <h5 className="text-text_secondary text-t1">
                            {props.data.user}
                        </h5>
                    </div>
                </div>
                <div className="h-11 overflow-hidden mt-0">
                    <h5 className="text-text_secondary text-t2">
                        {props.data.desc}
                    </h5>
                </div>
                <div className="flex flex-col gap-3 overflow-hidden mt-1">
                    <div className="flex gap-5">
                        <div
                            className={
                                "flex gap-2 text-t1 font-light cursor-pointer select-none " +
                                (star
                                    ? "text-text_primary"
                                    : "text-text_secondary")
                            }
                            onClick={handleStar}
                        >
                            <Star size={"16px"} fill={star ? "white" : ""} />
                            <h5>{props.data.stars}</h5>
                        </div>
                        <div
                            className={
                                "flex gap-2 text-t1 font-light cursor-pointer select-none " +
                                (like
                                    ? "text-text_primary"
                                    : "text-text_secondary")
                            }
                            onClick={handleLike}
                        >
                            <ThumbsUp size={"16px"} />
                            <h5>{props.data.likes}</h5>
                        </div>
                    </div>

                    <div className="overflow-hidden">
                        <h5 className="text-text_secondary text-t1">
                            {"Nível: " + props.data.level}
                        </h5>
                    </div>
                </div>

                <div className=" overflow-hidden mt-1.5">
                    <Button />
                </div>
            </div>
        </div>
    );
};

export default function DesafiosPopulares() {
    return (
        <div>
            <Header
                title="Desafios populares"
                subtitle="Exercite seus conhecimentos"
            />
            <div className="flex gap-12 flex-wrap justify-center">
                {cardData.map((i) => (
                    <Card data={i} key={i.id} />
                ))}
            </div>
        </div>
    );
}
