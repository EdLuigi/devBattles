import React from "react";
import Header from "./components/Header";
import Rotas from "./routes/Rotas";
import { BrowserRouter } from "react-router-dom";

const Container = (props) => {
    return <div className="min-h-screen bg-background">{props.children}</div>;
};

export default function App() {
    return (
        <Container>
            <BrowserRouter>
                <Header />
                <Rotas />
            </BrowserRouter>
        </Container>
    );
}
