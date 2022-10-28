import React, { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "react-feather";
import { linkList1, linkList2, linkList3 } from "../../Utils/LinkList";
import LinkItems from "./LinkItems";

const Container = (props) => {
    return <div className="w-[190px]">{props.children}</div>;
};

const Divider = () => {
    return <div className="bg-divider w-full h-[2px] my-2" />;
};

const DropDown = (props) => {
    const handleClick = () => {
        props.setCategoriaClick(!props.categoriaClick);
    };

    return (
        <div
            className="flex select-none gap-1 items-center mb-2 cursor-pointer w-min p-3 -mt-5"
            onClick={handleClick}
        >
            <p className="text-t3 text-text_primary">Categorias</p>
            <div className="flex items-center">
                {props.categoriaClick ? (
                    <ChevronUp
                        className="text-text_primary mt-0.5"
                        size={"14px"}
                        strokeWidth={"3px"}
                    />
                ) : (
                    <ChevronDown
                        className="text-text_primary mt-0.5"
                        size={"14px"}
                        strokeWidth={"3px"}
                    />
                )}
            </div>
        </div>
    );
};

const ContainerLinkItems = (props) => {
    return (
        <div className="w-3/5 absolute bg-background mx-3">
            {props.children}
        </div>
    );
};

export default function Sidebar(props) {
    const [categoriaClick, setCategoriaClick] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const isMobile = width <= 767;

    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", handleWindowSizeChange);
        return () => {
            window.removeEventListener("resize", handleWindowSizeChange);
        };
    }, []);

    return (
        <Container>
            {isMobile ? (
                <div>
                    <DropDown
                        categoriaClick={categoriaClick}
                        setCategoriaClick={setCategoriaClick}
                    />

                    {categoriaClick && (
                        <ContainerLinkItems>
                            <LinkItems list={linkList1} />
                            <Divider />
                            <LinkItems list={linkList2} />
                            <Divider />
                            <LinkItems list={linkList3} />
                        </ContainerLinkItems>
                    )}
                </div>
            ) : (
                <div>
                    <LinkItems list={linkList1} />
                    <Divider />
                    <LinkItems list={linkList2} />
                    <Divider />
                    <LinkItems list={linkList3} />
                </div>
            )}
        </Container>
    );
}
