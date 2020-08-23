import React from 'react' 
import {ListaProizvoda} from './lista'
import {Meni, Futer,Social} from '../../komponente'
import {ORLogo} from '../../tema/svg'

export const TradicionalnaKafa = props => {
    return (
        <React.Fragment>
            <Meni klasa={''}/>
            <Social klasa={''}/>
            <div className="Proizvodi">
                {ListaProizvoda.map(x => {
                    if(x.kategorija === 'Tradicionalna kafa') {
                        return (
                            <Proizvod key={x.id} {...x}/>
                        )
                    }
                    else {return null}
                })}
            </div>
            <Futer/>
        </React.Fragment>
    )
}
export const InstantKafa = props => {
    return (
        <React.Fragment>
            <Meni klasa={''}/>
            <Social klasa={''}/>
            <div className="Proizvodi">
                {ListaProizvoda.map(x => {
                        if(x.kategorija === 'Instant kafa') {
                            return (
                                <Proizvod key={x.id} {...x}/>
                            )
                        }
                        else {return null}
                    })}
            </div>
            <Futer/>
        </React.Fragment>
    )
}
export const Proizvod = props => (
    <div className="Proizvod" >
        <img src={`./res/proizvodi/${props.alias}.png`} alt={props.naziv}/>
        <div className='sadrzaj'>
            <p className='kategorija'>{props.kategorija}</p>
            <p className='naziv'>{props.naziv}</p>
            <p className='tekst'>{props.tekst}</p>
            <p className='dostupnost'>Dostupna u pakovanjima od:</p>
            <p className='pakovanje'>{props.pakovanje}</p>
            <div className='original'><ORLogo/></div>
        </div>
    </div>
)