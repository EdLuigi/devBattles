import React, { useState } from "react";
import { ThumbsUp } from "react-feather";

export default function Likes({ data, size = "16px" }) {
    const [like, setLike] = useState(false);

    const handleLike = () => {
        setLike(!like);
    };

    return (
        <div
            className={
                "flex gap-2 font-light cursor-pointer select-none " +
                (like
                    ? "text-text_primary"
                    : "text-text_secondary hover:text-text_primary")
            }
            onClick={handleLike}
        >
            <ThumbsUp
                size={size}
                className={
                    like ? "fill-text_primary text-secondary" : undefined
                }
            />
            <h5>{data.likes}</h5>
        </div>
    );
}
