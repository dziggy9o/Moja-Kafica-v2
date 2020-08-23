import React from 'react'
import {Meni, Futer,Social} from '../../komponente'
import {Link} from 'react-router-dom'

export const Proizvodi = props => {
    return (
        <React.Fragment>
            <Meni klasa={''}/>
            <Social klasa={''}/>
            <div className="Proizvodi">
                <h2>Proizvodi</h2>
                <p>Naši proizvodi proizvodeni su od pažljivo biranih vrsta kafa i po najvišim standardima. Pakovani su u zaštitnoj atmosferi poseduju sertifikovani HACCP sistem za bezbednost hrane.</p>
                <div className="Kategorije">
                    <Link to='/tradicionalnakafa'>
                        <img src='./res/tradicionalna_kafa.png' alt='Tradicionalna kafa'/>
                        <p>Tradicionalna kafa</p>
                    </Link>
                    <Link to='/instantkafa'>
                        <img src='./res/instant_kafa.png' alt='Instant kafa'/>
                        <p>Instant kafa</p>
                    </Link>
                </div>
            </div>
            <Futer/>
        </React.Fragment>
    )
}
export {TradicionalnaKafa, InstantKafa} from './kategorije'
export {ListaProizvoda} from './lista'