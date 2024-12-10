"use client"
import Image from 'next/image'
import React from 'react'
import "./index.css"

const Card = () => {
  return (
    <div className="card">
        <div className="header">
            <Image src="/heart-icon.png" alt="heart-icon" width={30} height={30} loading="lazy" className='heart-icon' />
            <span>Art de la table</span>
        </div>
        <Image src="/Table_ronde_165cm_Festi_1-removebg-preview.png" alt="heart-icon" width={150} loading="lazy"height={150} />
        <div className="des-con">
            <h3>Title</h3>
            <p>O<sup></sup></p>
        </div>
        <div className="des-con2">
            <p>0,35€/Pièce · RÉF : VABGN5</p>
            <p>20 pièces</p>
        </div>
    </div>
  )
}

export default Card