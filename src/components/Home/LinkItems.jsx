import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Item = ({ i }) => {
    const { index = 0 } = useParams();
    const navigate = useNavigate();

    const handleClick = (i) => {
        navigate(`/${i}`);
    };

    return (
        <div className="flex py-[6px]">
            <a
                className={
                    "cursor-pointer py-1 text-t1 w-full hover:bg-divider " +
                    (index == i.id
                        ? " text-text_primary pointer-events-none"
                        : " text-text_secondary")
                }
                onClick={() => {
                    handleClick(i.id);
                }}
            >
                {i.title}
            </a>
        </div>
    );
};

export default function LinkItems(props) {
    return (
        <>
            {props.list.map((i) => (
                <Item i={i} key={i.id} />
            ))}
        </>
    );
}
