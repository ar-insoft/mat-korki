import React, { useState, useEffect } from 'react';
import { Container } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'
import './Panel.css'
import './WidokAccordion'
import { WidokAccordion } from './WidokAccordion';
import { zadaniaDoTestow } from '../test_resources/zadaniaDoTestow.json'

export const Panel = () => {
    const [listaZadan, setListaZadan] = useState([])
    const [listaWybranych, setListaWybranych] = useState([])

    useEffect(() => {
        loadZadania()
    })

    async function loadZadania() {
        const jsonName = '/data/zadania.json'
        const response = await fetch(jsonName);
        const myJson = await response.json();
        //console.log('myJson', myJson)
        setListaZadan(myJson)
    }

    function dodajDoWybranych(id) {
        const zadanie = listaZadan.filter(el => el.id === id).reduceRight((accumulator, currentValue) => currentValue)
    }

    function usunZWybranych(id) {

    }
        //console.log('zadaniaDoTestow', zadaniaDoTestow)

    return (
        <div className="all">
            <Left listaZadan={listaZadan} />
            <Main />
        </div>
    )
}

const Left = ({listaZadan}) => {

    return (
        <div className="leftPanel">
            left
            <Container>
                Container
               <WidokAccordion listaZadan={listaZadan} />
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