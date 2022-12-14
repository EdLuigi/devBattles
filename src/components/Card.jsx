import React, { useEffect, useState } from "react";
import { Star as StarIcon, ThumbsUp } from "react-feather";
import { useNavigate } from "react-router-dom";

const Container = (props) => {
    return (
        <div className="w-[280px] h-[370px] bg-secondary rounded-md">
            {props.children}
        </div>
    );
};

const Img = (props) => {
    const placeholder = "/src/assets/Background_Placeholder.png";
    const [imgsrc, setImgsrc] = useState("");

    // const callApi = () => {
    //     fetch("https://api.thecatapi.com/v1/images/search/?size=full")
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setImgsrc(data[0].url);
    //         });
    // };

    // useEffect(() => {
    //     callApi();
    // }, []);

    return (
        <div
            className={
                "bg-primary opacity-100 flex w-full h-1/3 rounded-t-md justify-center " +
                (props.data.img == null && "opacity-60")
            }
        >
            <img
                src={props.data.img != null ? props.data.img : placeholder}
                className={
                    "rounded-t-md " +
                    (props.data.img != null ? " w-full object-cover" : "p-3")
                }
            ></img>
        </div>
    );
};

const InfoContainer = (props) => {
    return (
        <div className="flex flex-col h-2/3 p-4 rounded-b-md gap-3">
            {props.children}
        </div>
    );
};

const Title_User_Container = (props) => {
    return <div className="h-11 overflow-hidden">{props.children}</div>;
};

const Title = (props) => {
    return (
        <div className="flex h-6 overflow-hidden">
            <h5 className="font-bold text-t3 text-text_primary line-clamp-1">
                {props.data.title}
            </h5>
        </div>
    );
};

const User = (props) => {
    return (
        <div className="flex h-5 overflow-hidden">
            <h5 className="text-text_secondary text-t1">{props.data.user}</h5>
        </div>
    );
};

const Description = (props) => {
    return (
        <div className="h-11 overflow-hidden mt-0">
            <h5 className="text-text_secondary text-t2 line-clamp-2 leading-snug">
                {props.data.desc}
            </h5>
        </div>
    );
};

const Star_Like_Level_Container = (props) => {
    return (
        <div className="flex flex-col gap-3 overflow-hidden mt-1">
            <div className="flex gap-5">
                <Star data={props.data} />
                <Like data={props.data} />
            </div>
            <Level data={props.data} />
        </div>
    );
};

const Star = (props) => {
    const [star, setStar] = useState(false);

    const handleStar = () => {
        setStar(!star);
    };

    return (
        <div
            className={
                "flex gap-2 text-t1 font-light cursor-pointer select-none hover:text-text_primary " +
                (star ? "text-text_primary" : "text-text_secondary")
            }
            onClick={handleStar}
        >
            <StarIcon
                size={"16px"}
                className={star ? "fill-text_primary" : undefined}
            />
            <h5>{props.data.stars}</h5>
        </div>
    );
};

const Like = (props) => {
    const [like, setLike] = useState(false);

    const handleLike = () => {
        setLike(!like);
    };

    return (
        <div
            className={
                "flex gap-2 text-t1 font-light cursor-pointer select-none " +
                (like
                    ? "text-text_primary"
                    : "text-text_secondary hover:text-text_primary")
            }
            onClick={handleLike}
        >
            <ThumbsUp
                size={"16px"}
                className={
                    like ? "fill-text_primary text-secondary" : undefined
                }
            />
            <h5>{props.data.likes}</h5>
        </div>
    );
};

const Level = (props) => {
    return (
        <div className="overflow-hidden">
            <h5 className="text-text_secondary text-t1">
                {"N??vel: " + props.data.level}
            </h5>
        </div>
    );
};

const Button = (props) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/challenge/${props.data.id}`);
    };

    return (
        <div className="overflow-hidden mt-1.5">
            <button
                className="text-t2 font-medium border-[1px] rounded-[4px] w-full p-1 text-primary border-primary hover:bg-primary hover:text-text_primary"
                onClick={handleClick}
            >
                Ver mais
            </button>
        </div>
    );
};

export default function Card(props) {
    return (
        <Container>
            <Img data={props.data} />

            <InfoContainer>
                <Title_User_Container data={props.data}>
                    <Title data={props.data} />
                    <User data={props.data} />
                </Title_User_Container>

                <Description data={props.data} />

                <Star_Like_Level_Container data={props.data} />

                <Button data={props.data} />
            </InfoContainer>
        </Container>
    );
}
