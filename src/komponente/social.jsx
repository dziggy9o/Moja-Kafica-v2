import React from 'react'
import {FbIcon, IgIcon} from '../tema/svg'

export const Social = props => {
    return (
        <div className={`SocialIcons ${props.klasa}`}>
            <a href='https://www.instagram.com/mojakafica' target='_blank' rel="noopener noreferrer"><IgIcon/></a>
            <a href='https://www.facebook.com/MojaKafica' target='_blank' rel="noopener noreferrer"><FbIcon/></a>
        </div>
    )
}