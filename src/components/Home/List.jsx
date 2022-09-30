import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { linkList1, linkList2, linkList3 } from "../../Utils/LinkList";

export default function List() {
    const { index } = useParams();
    const [title, setTitle] = useState("");
    const lists = [...linkList1, ...linkList2, ...linkList3];

    useEffect(() => {
        lists.map((i) => {
            if (i.id == index) {
                setTitle(i.title);
            }
        });
    }, [index]);

    return <div className="bg-gray-600 w-[800px]">{title}</div>;
}
