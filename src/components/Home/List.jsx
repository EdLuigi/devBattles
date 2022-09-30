import React from "react";
import { useParams } from "react-router-dom";

export default function List() {
    const { index } = useParams();
    return <div className="bg-gray-600 w-[800px]">{index}</div>;
}
