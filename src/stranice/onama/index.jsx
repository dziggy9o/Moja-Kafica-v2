import React from 'react'
import {Meni,Futer,Social} from '../../komponente'
import {ORLogo,LogoStari} from '../../tema/svg'

export const Onama = props => {
    return (
        <React.Fragment>
            <Meni klasa={''}/>
            <Social klasa={''}/>
            <div className="Onama">
                <div className='uvodSlika'/>
                <div className='uvod'>
                    <div className="uvodNaslov">
                        <ORLogo/>
                        <p><div className='naglaseno'>Moja Kafica,</div>uspeh izgrađen na tradiciji i poverenju</p>
                    </div>
                    <p className="uvodTekst">
                    Naime, mi smo domaća firma iz Kruševca koja posluje 10 godina na tržištu Republike Srbije. <br/>
                    Bavimo se proizvodnjom, pakovanjem i distribucijom kafe i šlaga. <br/>
                    Svojim proizvodima i kvalitetom stvorili smo prepoznatljivu robnu marku – MOJA KAFICA<br/>
                    Na današnji dan poslujemo aktivno sa preko 1200 komitenata širom naše zemlje. Trenutno smo u fazi ekspanzije i radimo na širenju naše mreže poslovanja prema novim strateskim i poslovnim partnerima kao i unapređenju svesti o brendu kroz mnoge marketinške aktivnosti.<br/>
                    <br/>
                    Trenutno radimo na pozicioniranju novog pravca, odnosno potpuno novog vizuala.<br/>
                    Tu je primenjen poptunio novi logo, ali smo zadržali I stari.<br/>
                    </p>
                </div>
                <div className="brendSekcija">
                    <div className="brendSadrzaj">
                        <LogoStari/>
                        <p>Moja Kafica, od srca!</p>
                        <img src='./res/brandOnamaKafa.png' alt='Moja kafica' />
                    </div>
                </div>
                <div className="Slike">
                    <img src='./res/slike/1.jpg' alt='MojaKafica'/>
                    <img src='./res/slike/2.jpg' alt='MojaKafica'/>
                    <img src='./res/slike/3.jpg' alt='MojaKafica'/>
                    <img src='./res/slike/4.jpg' alt='MojaKafica'/>
                </div>
            </div>
            <Futer/>
        </React.Fragment>
    )
}