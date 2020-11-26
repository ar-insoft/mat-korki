import React, { useState, useEffect } from 'react';
import { Container, Accordion, Label, Icon, List } from "semantic-ui-react";
import MyMathJax from './MyMathJax';
import * as utils from '../lib/utils.js';

export const WidokAccordion = ({ listaZadan, listaWybranych, callbacks}) => {
    return (
        <Accordion fluid styled exclusive={false} defaultActiveIndex={[1, 2]}>
        {
            //console.log('listaZadan', listaZadan) utils.zadaniaByParent(listaZadan, '')
                utils.zadaniaByParent(listaZadan, '').map(zadanie => <>
                    <Accordion.Title index={zadanie.id} active={true}>
                        <Icon name='dropdown' />
                        {zadanie.nr}. {zadanie.title}                   
                    </Accordion.Title>
                    <Accordion.Content active={true}>
                        <List>
                            {utils.zadaniaByParent(listaZadan, zadanie.id).map(zad =>
                                <List.Item>
                                    <List.Content>
                                        <List.Header>
                                            {zad.typ}. {zad.id}     _
                                            {
                                                listaWybranych.includes(zad.id)
                                                    ?
                                                    <List.Icon name='cancel' color="red" onClick={() => callbacks.usunZWybranych(zad.id)} />
                                                    :
                                                    <List.Icon name='share' color="green" onClick={() => callbacks.dodajDoWybranych(zad.id)} />
                                            }
                                        </List.Header>
                                        <List.Description>
                                            <MyMathJax rownanie={zad.text} />
                                        </List.Description>
                                    </List.Content>
                                </List.Item>)}
                        </List>
                    </Accordion.Content>
                {/* <Label as='a'>
                        {zadanie.typ}. {zadanie.id}
                    <Icon name='delete' />
                </Label> */}
            </>)
        }
    </Accordion>
    )
}