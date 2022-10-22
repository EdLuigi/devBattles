import React, { useState } from "react";
import { Star } from "react-feather";

export default function Stars({ data, size = "16px" }) {
    const [star, setStar] = useState(false);

    const handleStar = () => {
        setStar(!star);
    };

    return (
        <div
            className={
                "flex gap-2 font-light cursor-pointer select-none hover:text-text_primary " +
                (star ? "text-text_primary" : "text-text_secondary")
            }
            onClick={handleStar}
        >
            <Star
                size={size}
                className={star ? "fill-text_primary" : undefined}
            />
            <p>{data.stars}</p>
        </div>
    );
}
