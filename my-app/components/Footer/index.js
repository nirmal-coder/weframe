import Image from 'next/image'
import React from 'react'
import "./index.css"

const Footer = () => {
  return (
    <div className="footerContainer">
        <Image src="/logo.png" width={200} height={100} alt='logo' className='logoFooter'/>
        <div>
            <h4>INFOS PRATIQUES</h4>
            <p>À propos</p>
            <p>Livraisons & Reprises</p>
            <p>Mode d’emploi</p>
            <p>Mode d’emploi</p>
        </div>
        <div>
            <h4>LÉGAL</h4>
            <p>Mentions légales</p>
            <p>CGU</p>
            <p>CGV</p>
            <p>Politique de confidentialité</p>
        </div>
        <div>
            <h4>MON COMPTE</h4>
            <p>Accéder à mon compte</p>
            <p>Ma liste d’envie</p>
            <p>Créer un compte</p>
            <p>Mot de passe oublié</p>
        </div>
        <div>
            <p>NOUS SUIVRE</p>
            <div className='social-con'>
            <Image src="/twitter.png" width={50} height={50} alt='logo' loading="lazy" className='social'/>
            <Image src="/instagram.png" width={50} height={50} alt='logo' loading="lazy" className='social'/>
            <Image src="/linkedin-in.png" width={50} height={50} alt='logo' loading="lazy" className='social'/>
            </div>
        </div>
    </div>
  )
}

export default Footer