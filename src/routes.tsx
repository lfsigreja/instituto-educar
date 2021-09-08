import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom"
import styled from 'styled-components';

import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";

import Home from "./views/Home/home";
import Quemsomos from "./views/quem-somos/quemsomos";

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
                    <Route path='/' exact component={Home} />
                    <Route path='/quem-somos' component={Quemsomos} />
                    <Route path='/contato' component={Home} />
                    <Route path='/blog' component={Home} />
                    <Route path='/contribua' component={Home} />
                    <Route path='/quero-ser-voluntario' component={Home} />
                    <Route path='/quero-ser-aluno' component={Quemsomos} />
                </Switch>
                <Footer />
            </BrowserRouter>
            
        </Page>
    );
};

export default Router