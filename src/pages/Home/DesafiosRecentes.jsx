import React from "react";

const Header = (props) => {
    return (
        <div>
            <h5 className="text-text_primary text-t4 font-bold">
                Desafios recentes
            </h5>
        </div>
    );
};

export default function DesafiosRecentes() {
    return (
        <div className="flex justify-between">
            <Header />
        </div>
    );
}
