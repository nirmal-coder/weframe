"use client"
import React from 'react'

import Card from '../Card'
import "./index.css"
import Image from 'next/image'

const MoreProduct = () => {
  return (
    <div className="moreProduct-container">
        <div className="head">
            <h3>Ces produits pourraient vous intéresser</h3>
            <p>Voir toute la collection</p>
        </div>
        <div className="moreCardCon">
        <div className="card2">
        <div className="header2">
            <Image src="/heart-icon.png" alt="heart-icon" width={30} height={30} className='heart-icon2' />
            <span>Art de la table</span>
        </div>
        <Image src="/Table_ronde_165cm_Festi_1-removebg-preview.png" alt="heart-icon" width={150} height={150} />
        <div className="des-con2">
            <h3>Title</h3>
            <p>O<sup></sup></p>
        </div>
        <div className="des-con3">
            <p>0,35€/Pièce · RÉF : VABGN5</p>
            <p>20 pièces</p>
        </div>
    </div>
    <div className="card2">
        <div className="header2">
            <Image src="/heart-icon.png" alt="heart-icon" loading="lazy" width={30} height={30} className='heart-icon2' />
            <span>Art de la table</span>
        </div>
        <Image src="/Table_ronde_165cm_Festi_1-removebg-preview.png" loading="lazy" alt="heart-icon" width={150} height={150} />
        <div className="des-con2">
            <h3>Title</h3>
            <p>O<sup></sup></p>
        </div>
        <div className="des-con3">
            <p>0,35€/Pièce · RÉF : VABGN5</p>
            <p>20 pièces</p>
        </div>
    </div>
    <div className="card2">
        <div className="header2">
            <Image src="/heart-icon.png" alt="heart-icon" width={30} height={30} loading="lazy" className='heart-icon2' />
            <span>Art de la table</span>
        </div>
        <Image src="/Table_ronde_165cm_Festi_1-removebg-preview.png" alt="heart-icon" loading="lazy" width={150} height={150} />
        <div className="des-con2">
            <h3>Title</h3>
            <p>O<sup></sup></p>
        </div>
        <div className="des-con3">
            <p>0,35€/Pièce · RÉF : VABGN5</p>
            <p>20 pièces</p>
        </div>
    </div>
    <div className="card2">
        <div className="header2">
            <Image src="/heart-icon.png" alt="heart-icon" width={30} height={30} loading="lazy" className='heart-icon2' />
            <span>Art de la table</span>
        </div>
        <Image src="/Table_ronde_165cm_Festi_1-removebg-preview.png" alt="heart-icon" width={150}  loading="lazy" height={150} />
        <div className="des-con2">
            <h3>Title</h3>
            <p>O<sup></sup></p>
        </div>
        <div className="des-con3">
            <p>0,35€/Pièce · RÉF : VABGN5</p>
            <p>20 pièces</p>
        </div>
    </div>
        </div>
    </div>
  )
}

export default MoreProduct