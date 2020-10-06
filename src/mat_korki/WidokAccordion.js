import React, { useState, useEffect } from 'react';
import { Container, Accordion, Label, Icon, List } from "semantic-ui-react";
import * as utils from '../lib/utils.js';

export const WidokAccordion = ({listaZadan}) => {
    return (
    <Accordion fluid styled>
        {
            //console.log('listaZadan', listaZadan) utils.zadaniaByParent(listaZadan, '')
                utils.zadaniaByParent(listaZadan, '').map(zadanie => <>
                    <Accordion.Title active={true} >
                        <Icon name='dropdown' />
                        {zadanie.nr}. {zadanie.title}                   
                    </Accordion.Title>
                    <Accordion.Content active={true}>
                        <List>
                            {utils.zadaniaByParent(listaZadan, zadanie.id).map(zad =>
                                <List.Item>
                                    <List.Content>
                                        <List.Header as='a'>{zad.typ}. {zad.id}</List.Header>
                                        <List.Description as='a'>{zad.text}</List.Description>
                                        <List.Icon name='share' />
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