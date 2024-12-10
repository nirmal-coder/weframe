"use client"
import React from 'react'
import "./index.css"
import Image from 'next/image'

const Features = () => {
  return (
    <div className="FeaturesContainer">
        <div className="first">
            <h1>On s’occupe de <span>tout</span></h1>
            <p>Office ipsum you must be muted. It meeting commitment busy pain.</p>

            <div className="cardlistCon">
                <div className='cardItems'>
                        <Image src="/Groupe_25.png" alt="delivary" width={50} height={50} />
                        <h4>Livraison & Reprise</h4>
                        <p>Selon vos besoins</p>
                </div>
                <div className='cardItems'>
                        <Image src="/dish.png" alt="delivary" width={50} height={50} />
                        <h4>Nettoyage</h4>
                        <p>Selon vos besoins</p>
                </div>
                <div className='cardItems'>
                        <Image src="/Groupe_56.png" alt="delivary" width={50} height={50} />
                        <h4>Commande Illimitée</h4>
                        <p>Tout est possible</p>
                </div>
                <div className='cardItems'>
                        <Image src="/Groupe_123.png" alt="delivary" width={50} height={50} />
                        <h4>Transport & Enlèvement.</h4>
                        <p>On s’occupe de tout.</p>
                </div>
            </div>

            
        </div>
        <div className="emailAndBanner">
            <Image src="/BUFFET_037 1.png" alt="delivary" width={500} height={200}  loading="lazy" className='banner'/>
            <div className="emailcon">
                    <h4>S’inscrire & économiser <span>10%</span> </h4>
                    <p>Office ipsum you must be muted. Synergize helicopter prioritize anyway job due harvest most opportunity didn't. Yet busy any meeting shark light marginalised 4-blocker message. Productize corporate nail caught synergy highlights lunch. Company another pushback items dear or any.</p>
                    <div className="inputEmailCon">
                        <input type="email" name="email" id="email" placeholder='john@doe.com' />
                        <button type="button">S’inscrire</button>
                    </div>
            </div>

            </div>
    </div>
  )
}

export default Features