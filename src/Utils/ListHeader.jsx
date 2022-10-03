import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const TitleSubtitle = (props) => {
    return (
        <div>
            <h5 className="text-text_primary text-t4 font-bold">
                {props.title}
            </h5>
            <h5 className="text-text_secondary text-t2">{props.subtitle}</h5>
        </div>
    );
};

const SelectBox = (props) => {
    const { index } = useParams();
    const [select, setSelect] = useState(0);

    useEffect(() => {}, [index]);

    const handleSelect = (e) => {
        setSelect(e.currentTarget.value);
    };

    return (
        <div className="flex items-center">
            <select
                defaultValue={select}
                onChange={handleSelect}
                className="py-1 text-t2 text-text_primary bg-transparent border-b-2"
            >
                <option value={0}>Este ano</option>
                <option value={1}>Este mês</option>
                <option value={2}>Todo período</option>
            </select>
        </div>
    );
};

export const Header = (props) => {
    return (
        <div className="flex justify-between mb-12">
            <TitleSubtitle title={props.title} subtitle={props.subtitle} />
            <SelectBox />
        </div>
    );
};
