import React from 'react'
import {Link} from 'react-router-dom'
import {Logo} from '../tema/svg'

const Lokacije = [
    {id:1, naziv: 'Početna', slika: false, adresa: '/'},
    {id:2, naziv: 'Proizvodi', slika: false, adresa: '/proizvodi'},
    {id:3, naziv: 'Logo', slika: true, adresa: '/'},
    {id:4, naziv: 'O nama', slika: false, adresa: '/onama'},
    {id:5, naziv: 'Kontakt', slika: false, adresa: '/kontakt'}
]

export const Meni = props => {
    return (
        <div className={`meni-wrapper ${props.klasa}`}>
        <div className={`meni`}>
            {Lokacije.map(x => {
                if(!x.slika) {
                    return <div key={x.id} className="meni-item"><Link to={x.adresa}>{x.naziv}</Link></div>
                }
                else {
                    return <div key={x.id}className="meni-item"><Logo/></div>
                }
            })}
        </div>
        </div>

    )
}