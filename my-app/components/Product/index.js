"use client"
import React, { useState } from 'react'
import "./index.css"
import Image from 'next/image'
import { FaMinus, FaPlus } from 'react-icons/fa6'

const Product = () => {
    const [numItem , setNum] = useState(1)
  return (
    <div className="product-container">
        <h2 className="page">Home  . <span>Art de la table</span></h2>
        <div className="product">
            {/* product image */}
            <div className="product-img-container">
                <Image src="/Location_Cheese_big_picture_1-removebg-preview.png" alt="Cheese big" width={200} height={200} className='bigProduct' loading="lazy"/>


                <div className="topImages">
                <Image src="/Table ronde 165cm Festi 2.png" alt="Cheese big" width={30} height={30} />
                <Image src="/Group 96.png" alt="Cheese big" width={30} height={30} loading="lazy"/>
                <Image src="/Group 97.png" alt="Cheese big" width={30} height={30} loading="lazy"/>
                <Image src="/Group 98.png" alt="Cheese big" width={30} height={30} loading="lazy"/>
                </div>
            </div>
            <div className="description-container">
                <div>
                <div className="pro-heading">
                <h2>Cheese – appareil à raclette 1/2 roue</h2>
                <Image src="/heart-icon.png" alt="heart-icon" width={20} height={20} />
                </div>
                <h3 className='sub-h3'>39,50€ <span>/pièce</span></h3>
                <div className="measurement">
                    <div className="scale">
                        <span>
                            <Image src="/Capa_1.png" alt="scale" width={20} height={20} loading="lazy"/>
                            <h4>20<sup>cm</sup></h4>
                        </span>
                        <span>
                            <Image src="/Page-1.png" alt="scale" width={20} height={20} loading="lazy"/>
                            <h4>50<sup>cm</sup></h4>
                        </span>
                    </div>
                    <p>RÉF : VABGN5</p>
                </div>
                <p className='des'>Location appareil à raclette - Raclette traditionnelle 1/2 roue
                Réglable en hauteur
                Appareil à raclette professionnel
                Boîtier de chauffe horizontal réglable en hauteur
                 
                220V
                900W</p>
                <br/>
                <p className='des'>220V</p>
                <p className='des'>900V</p>
                </div>
                
                <div className="cartBtnContainer">
                <hr />
                    <div className='addItemContainer'>
                        <button type='button'><FaPlus /></button>
                        <p>
                            {numItem}
                        </p>
                        <button type='button'><FaMinus /></button>
                    </div>
                    <button className='card-button-max'>Ajouter au panier</button>
                </div>
            </div>

            <div className="productBriefDes">
                <h3>Description produit</h3>
                <p>Festi vous propose à la location un/une "Jewel – grand couteau/10pc" pour votre évenement et ce dès 0,35 € / pièce (HTVA). Que ce soit pour votre mariage, une fête d'anniversaire ou du personnel, ce produit a fait l'objet d'une sélection rigoureuse par notre équipe. Il est en location chez nous sous la référence "VAJGC". Nous sommes à votre disposition pour que les événements de nos clients, même en last-minute, soient toujours une réussite. Vous pourrez trouver tout une série d'autre produit à louer de ce type dans la catégorie "Art de la Table".</p>
            </div>

            <div className="accordion-con">
                <div>
                    <p>Livraisons</p>
                    <FaPlus />
                </div>
                <div>
                    <p>Questions</p>
                    <FaPlus />
                </div>
            </div>

        </div>

    </div>
    
  )
}

export default Product