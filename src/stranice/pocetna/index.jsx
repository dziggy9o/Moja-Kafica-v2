import React from 'react'
import {Meni,Social} from '../../komponente'

export const Pocetna = props => {
    return (
        <React.Fragment>
            <div className="PocetnaPozadina"/>
            <Meni klasa={'pocetna'}/>
            <Social klasa={'pocetna'}/>
            <div className="ProizvodiSlika"><img src='./res/Proizvodi.png' alt='Moja kafica proizvodi'/></div>
        </React.Fragment> 
    )
}