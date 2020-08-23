import React, {useState} from 'react'
import PropTypes from "prop-types"
import axios from "axios";

export const Forma = props => {
    const [mailSent, setMailSent] = useState(false);
    const [error, setError] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [msg, setMsg] = useState('');
    const [email, setEmail] = useState('');
    const [tema, setTema] = useState('');
    const [greska, setGreska] = useState(false);
    
    const uslovi = () => tema.trim() !==''
                && firstName.trim() !==''
                && phone.trim() !==''
                && !Number.isNaN(Number(phone))
                && email.trim() !==''
                && email.indexOf("@") > 0
                && msg.trim() !==''

    const posaljiEmail = e => {
        e.preventDefault();
        let data = {"firstName": `${firstName}`,"lastName":`${lastName}`,"msg":`Tema: ${tema}\nPoruka: ${msg}\nKontakt telefon: ${phone}\nKontakt email: ${email}`, "email":`${email}`}
        const konfig = {
            method: "post",
            url: `${process.env.REACT_APP_API}`,
            headers: { "content-type": "application/json" },
            data: data
        }
        if(uslovi) {
            axios(konfig)
            .then(res => {
                if(res.data.sent) {
                    setMailSent(res.data.sent);
                    setError(false);
                    setFirstName('');
                    setLastName('');
                    setMsg('');
                    setEmail('');
                    setTema('');
                    setPhone('');
                    setGreska(false);
                } else { setError(true);setGreska(true)}
            })
            .catch(err => {
                setError(err.message)
            })
        }
        else setGreska(true)
        
    }
    const { successMessage, errorMessage, fieldsConfig} = props.config;
    return (
            <React.Fragment>
                <div className="InputPolja">
                <input style={{gridArea: 'tema'}} placeholder='Tema' type='text' value={tema} onChange={e => setTema(e.target.value)}/>
                <input style={{gridArea: 'email'}} placeholder='Email' type='text' value={email} onChange={e => setEmail(e.target.value)}/>
                <input style={{gridArea: 'ime'}} placeholder='Ime i prezime' type='text' value={firstName} onChange={e => setFirstName(e.target.value)} />
                <input style={{gridArea: 'telefon'}} placeholder='Telefon' type='text' value={phone}  onChange={e => setPhone(e.target.value)}   />
                <textarea rows="4" style={{gridArea: 'poruka'}} placeholder='Poruka' value={msg}  onChange={e => setMsg(e.target.value)}  />
                </div>
                <button  onClick={e => posaljiEmail(e)} >Pošalji</button>
                {greska ? <p>Niste pravilno popunili polja!</p> : null}
            </React.Fragment>
    )
}
Forma.propTypes = {
    config: PropTypes.object.isRequired
};


