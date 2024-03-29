import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom"
import styled from 'styled-components';

import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import Blog from "./views/Blog";
import Contato from "./views/Contato";

import Contribua from "./views/Contribua";
import Home from "./views/Home/home";
import Quemsomos from "./views/quem-somos/quemsomos";
import queroSerAluno from "./views/queroSerAluno";
import queroSerVoluntario from "./views/queroSerVoluntario";

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
                    <Route path='/contato' component={Contato} />
                    <Route path='/blog' component={Blog} />
                    <Route path='/contribua' component={Contribua} />
                    <Route path='/quero-ser-voluntario' component={queroSerVoluntario} />
                    <Route path='/quero-ser-aluno' component={queroSerAluno} />
                </Switch>
                <Footer />
            </BrowserRouter>

        </Page>
    );
};

export default Router