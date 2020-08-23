import React from 'react'
import {Logo, LogoStari} from '../tema/svg'

const trenutnaGodina = new Date().getFullYear();

const kontaktInfo = [
    {id: 1, naslov: 'Deco Cake d.o.o.', info: <a href='https://goo.gl/maps/c8z3r1fz6qUqn2Vc7' target='_blank' rel="noopener noreferrer">Jasički put 25, 37000 Kruševac, Srbija</a>},
    {id: 2, naslov: 'Kruševac', info: <React.Fragment><a href='tel:38137421870'>+381 37 421 870;</a><a href='tel:381606420117'> +381 60 642 0 117</a></React.Fragment>},
    {id: 3, naslov: 'Beograd', info: <a href='tel:381600666234'>+381 60 0 666 234</a>},
]

export const Futer = props => {
    return (
        <React.Fragment>
            <div className="kontakt-wrapper">
                <div className="kontakt">
                    <div className="Logo">
                        <Logo/>
                        <LogoStari/>
                    </div>
                    <div className="kontaktInfo">
                        {kontaktInfo.map(x => {
                            return (
                                <React.Fragment key={x.id}>
                                    <p>{x.naslov}</p>
                                    {x.info}
                                </React.Fragment>
                            )
                        })}
                    </div>
                    
                </div>
            </div>
            <div className="copyright-wrapper">
                <div className="copyright">
                Sva prava zadržana &copy; {trenutnaGodina}.
                </div>
            </div>
        </React.Fragment>
    )
}