import React from "react";
import Header from "./components/Header";
import Rotas from "./routes/Rotas";

const Container = (props) => {
    // return <div className="min-h-screen bg-background">{props.children}</div>;
    return <div className="min-h-screen bg-gray-700">{props.children}</div>;
};

export default function App() {
    return (
        <Container>
            <Header />
            <Rotas />
        </Container>
    );
}
