import React from 'react'
import {Meni, Futer, Social} from '../../komponente'
import {Logo, Email, Phone} from '../../tema/svg'
import {Forma} from './forma'
import {konfigForme} from './konfigforme'

export const Kontakt = props => {
    return (
        <React.Fragment>
            <Meni klasa={''}/>
            <Social klasa={''}/>
            <div className="Kontakt">
                <iframe title='Moja Kafica mapa' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2889.6707131727053!2d21.3151487!3d43.5925747!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475688746f58c1cf%3A0xc51975a96d862e1c!2sDECO%20CAKE%20DOO%20MOJA%20KAFICA!5e0!3m2!1sen!2srs!4v1597576534181!5m2!1sen!2srs" width="100%" height="224" frameBorder="0" style={{border: '0px'}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                <div className='KontaktInfo'>
                    <h2>Tu smo za sva Vaša pitanja</h2>
                    <div className="Informacije">
                        <div className="InfoItem">
                            <Logo/>
                            <p></p>
                            <a href='https://goo.gl/maps/c8z3r1fz6qUqn2Vc7' target='_blank' rel="noopener noreferrer"><p>Jasički put 25,<br/> 37000 Kruševac, Srbija</p></a>
                        </div>
                        <div className="InfoItem">
                            <Phone/>
                            <a href='tel:38137421870'><p>+ 381 37 421 870</p></a>
                            <a href='tel:381606420117'><p>+ 381 60 642 0 117</p></a>
                            <a href='tel:381600666234'><p>+ 381 60 666 234</p></a>
                        </div>
                        <div className="InfoItem">
                            <Email/>
                            <a href='mailto:office@mojakafica.rs'><p>office@mojakafica.rs</p></a>
                        </div>
                    </div>
                    <div className="Forma">
                        <Forma config={konfigForme}/>
                    </div>
                </div>
            </div>
            <Futer/>
        </React.Fragment>
    )
}