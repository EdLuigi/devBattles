import React, { useState } from "react";
import Pendings from "./Pendings";
import Submissions from "./Submissions";
import YourChallenges from "./YourChallenges";

const CategoryTitle = (props) => {
    return (
        <div
            className={
                // "text-t2 font-medium p-1 cursor-pointer hover:text-text_primary rounded-md" +
                "text-t2 font-medium p-1 cursor-pointer hover:bg-secondary rounded-md" +
                (props.categoryIndex == props.value
                    ? " text-text_primary"
                    : " text-text_secondary")
            }
            onClick={() => {
                props.handleCategoryIndex(props.value);
            }}
        >
            {props.title}
        </div>
    );
};

const Categories = (props) => {
    const list = ["Seus desafios", "Pendências", "Submissões"];
    return (
        <div className="flex gap-5 mx-[-4px]">
            {list.map((i) => (
                <CategoryTitle
                    key={list.indexOf(i)}
                    value={list.indexOf(i)}
                    title={i}
                    categoryIndex={props.categoryIndex}
                    handleCategoryIndex={props.handleCategoryIndex}
                />
            ))}
        </div>
    );
};

const ChallegesContent = (props) => {
    return (
        <div className="flex flex-col mt-4">
            {props.index == 0 && <YourChallenges />}
            {props.index == 1 && <Pendings />}
            {props.index == 2 && <Submissions />}
        </div>
    );
};

export default function Challenges() {
    const [categoryIndex, setCategoryIndex] = useState(0);

    const handleCategoryIndex = (e) => {
        setCategoryIndex(e);
    };

    return (
        <div className="flex flex-col mt-10">
            <Categories
                categoryIndex={categoryIndex}
                handleCategoryIndex={handleCategoryIndex}
            />
            <ChallegesContent index={categoryIndex} />
        </div>
    );
}
