import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom"
import styled from 'styled-components';

import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";

import Home from "./views/Home/home";

const Page = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`

const Router: React.FC = () => {
    return (
        <Page>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route path='/' component={Home} />
                </Switch>
                <Footer />
            </BrowserRouter>
            
        </Page>
    );
};

export default Router