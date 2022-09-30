import React from "react";

const Header = (props) => {
    return (
        <div>
            <h5 className="text-text_primary text-t4 font-bold">Freelancer</h5>
        </div>
    );
};

export default function Freelancer() {
    return (
        <div className="flex justify-between">
            <Header />
        </div>
    );
}
