import React, { useState, useEffect } from 'react';
import { Container } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'
import './Panel.css'
import './WidokAccordion'
import { WidokAccordion } from './WidokAccordion';
import { zadaniaDoTestow } from '../test_resources/zadaniaDoTestow.json'
import * as utils from '../lib/utils.js';

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

        const index = listaWybranych.indexOf(id)
        if (index === -1) {
            setListaWybranych(listaWybranych.concat(id))
        }
    }

    function usunZWybranych(id) {
        const listaWybranychCopy = listaWybranych.slice() // [...listaWybranych]
        const index = listaWybranychCopy.indexOf(id);
        if (index > -1) {
            listaWybranychCopy.splice(index, 1);
            setListaWybranych(listaWybranychCopy)
        }
    }
    
    const callbacks = {
        dodajDoWybranych: (id) => {
            const index = listaWybranych.indexOf(id)
            if (index === -1) {
                setListaWybranych(listaWybranych.concat(id))
            }
        },
        usunZWybranych: (id) => {
            const listaWybranychCopy = listaWybranych.slice() // [...listaWybranych]
            const index = listaWybranychCopy.indexOf(id);
            if (index > -1) {
                listaWybranychCopy.splice(index, 1);
                setListaWybranych(listaWybranychCopy)
            }
        }
    }

    return (
        <div className="all">
            {/* <Left listaZadan={listaZadan} listaWybranych={listaWybranych} callbacks={callbacks} /> */}
            <Main listaZadan={listaZadan} listaWybranych={listaWybranych} callbacks={callbacks} />
        </div>
    )
}

const Left = ({ listaZadan, listaWybranych, callbacks}) => {

    return (
        <div className="leftPanel">
            left
            <Container>
                Container
               <WidokAccordion listaZadan={listaZadan} listaWybranych={listaWybranych} callbacks={callbacks} />
            </Container>
        </div>
    )
}

const Main = ({ listaZadan, listaWybranych, callbacks}) => {

    return (
        <div className="mainPanel">
            <div className="wybrane_div">
                {listaWybranych.map(zadId => {
                    const zad = utils.zadanieById(listaZadan, zadId)
                    return (
                        <div className="wybrane_zad_card" title={zad.text}>
                            {zad.nr}<br/> {zad.text}
                        </div>
                    )
                    
                })}
            </div>
                {/* main {listaWybranych.toString()} */}
            <Container>
               <WidokAccordion listaZadan={listaZadan} listaWybranych={listaWybranych} callbacks={callbacks} />
            </Container>
        </div>
    )
}