import React, { useState, useEffect } from 'react';
import { Container } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'
import './Panel.css'

export const Panel = () => {

    return (
        <div className="all">
            <Left />
            <Main />
        </div>
    )
}

const Left = () => {

    return (
        <div className="leftPanel">
            left
            <Container>
                Container
            </Container>
        </div>
    )
}

const Main = () => {

    return (
        <div className="mainPanel">
            main
            <Container>
                Container
            </Container>
        </div>
    )
}