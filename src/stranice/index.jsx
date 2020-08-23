import React from 'react'
import {Route} from 'react-router-dom'
import {Pocetna} from './pocetna'
import {Kontakt} from './kontakt'
import {Onama} from './onama'
import {Proizvodi, TradicionalnaKafa, InstantKafa, ListaProizvoda} from './proizvodi'

export const Rute = props => {
    return (
        <React.Fragment>
            <Route exact path='/'>
                <Pocetna/>
            </Route>
            <Route exact path='/proizvodi'>
                <Proizvodi/>
            </Route>
            <Route exact path='/onama'>
                <Onama/>
            </Route>
            <Route exact path='/kontakt'>
                <Kontakt/>
            </Route>
            <Route exact path='/tradicionalnakafa'>
                <TradicionalnaKafa/>
            </Route>
            <Route exact path='/instantkafa'>
                <InstantKafa/>
            </Route>
        </React.Fragment>
        
    )
}