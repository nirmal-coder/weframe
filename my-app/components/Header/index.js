"use client"
import React, { useState } from 'react'
import { FaBarsStaggered } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import "./index.css"
import Image from 'next/image'
import Link from 'next/link';

const tabItem = [
  "Art de la table",
  "Mobilier",
  "Nappage",
  "Matériel de salle",
  "Cuisine",
  "Barbecue",
  "Tente",
  "Chauffage",
  "Podium - Piste de danse",
  "Son et lumière",
  "Packs"
]

const Header = () => {
  const [navToggle , setToggle] = useState(false)

  const closeNav = ()=>{
    setToggle((prev) => !prev)
  }
  return (
    <>
    {/* {small devices} */}
    <div className='nav-sm'>
        <nav className="sm-container">
            <Image src="/logo.png" width={150} height={70} alt="logo" className='logo' loading="lazy"/>
            <button type="button" className='navBtn sm-d' onClick={()=> setToggle((prev) => !prev)}><FaBarsStaggered /></button>
        </nav>
        <div className="search-container sm">
                <input type="search" name="search" id="search"  placeholder='search' />
                <Image src="/search-lg.png" width={60} height={60} loading="lazy" alt="search"/>
        </div>
        <ul className="tabs sm-d">
            {tabItem.slice(0,4).map(each => (
              <li key={each}>
                <Link href="/" className={`tablink ${each === "Art de la table" ? "selectedLink" : ""}`}>{each}</Link>
              </li>
            ))}
        </ul>
    </div>
    {/* {medium devices} */}
    <div className='nav-md'>
        <nav className='nav-md-container'>
        <Image src="/logo.png" width={160} height={70} alt="logo" className='logo-md' loading="lazy"/>
        <div className="search-container search-md">
                <input type="search" name="search" id="search"  placeholder='search' />
                <Image src="/search-lg.png" width={60} height={60} alt="search" loading="lazy"/>
        </div>
        <button type="button" className='navBtn' onClick={()=> setToggle((prev) => !prev)}><FaBarsStaggered /></button>
        </nav>
        <ul className="tabs">
            {tabItem.slice(0,6).map(each => (
              <li key={each}>
                <Link href="/" className={`tablink ${each === "Art de la table" ? "selectedLink" : ""}`}>{each}</Link>
              </li>
            ))}
        </ul>
    </div>

    <div className="nav-lg">
    <nav className='nav-lg-container'>
        <Image src="/logo.png" width={160} height={70} alt="logo" className='logo-lg' loading="lazy"/>
        <div className="search-container search-lg">
                <input type="search" name="search" id="search"  placeholder='search' />
                <Image src="/search-lg.png" width={60} height={60} alt="search" loading="lazy"/>
        </div>
        <div className="Inspirations">
          <Image src="/bulb-icon.png" width={15} height={15} alt="bulb-icon" className='' loading="lazy"/>
          <p>Inspirations</p>
        </div>
        <div className="Inspirations">
          <Image src="/heart-icon.png" width={15} height={15} alt="heart-icon" className='' loading="lazy"/>
          <p>Mes favoris</p>
          <span className='span'>24</span>
        </div>
        <span className="cart">
          <Image src="/cart-icon.png" width={15} height={15} alt="cart-icon"  loading="lazy"/>
          Panier
        </span>
        <div className="profile">
          <Image src="/Avatar.png" alt="avatar" width={44} height={44} loading="lazy"/>
          <button>FR <Image src="/chevron-down.png" alt="down" width={10} height={10} loading="lazy"/></button>
        </div>
        </nav>
        <ul className="tabs lg-links">
            {tabItem.map(each => (
              <li key={each}>
                <Link href="/" className={`tablink ${each === "Art de la table" ? "selectedLink" : ""}`}>{each}</Link>
              </li>
            ))}
        </ul>
    </div>

    {navToggle && (
      <div className="navToggle">
      <div className="navItem-container">
            <div className="profileNav">
              <div className='avadhar'></div>
              <h3>FR</h3>
            </div>
            <div className="Inspirations navMobileItem">
          <Image src="/bulb-icon.png" width={15} height={15} alt="bulb-icon" loading="lazy"/>
          <p>Inspirations</p>
        </div>
        <div className="Inspirations navMobileItem">
          <Image src="/heart-icon.png" width={15} height={15} alt="heart-icon" loading="lazy"/>
          <p>Mes favoris</p>
          <span className='span'>24</span>
        </div>
        <span className="cart navMobileItem cart-sm-btn">
          <Image src="/cart-icon.png" width={15} height={15} alt="cart-icon" loading="lazy" />
          Panier
        </span>
      </div>
      <IoMdClose className='closeIcon' onClick={closeNav}/>
    </div>
    )}
    </>
    
    
  )
}

export default Header