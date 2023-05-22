import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import { Children } from 'react'
import navLogo from "../public/logo.png"
import navHamburger from "../public/nav-hamburger.png"
import navX from "../public/nav-x.png"

function openNavbarDropdown(){
  let navHamburger = document.getElementById("navHamburger");
  let navX = document.getElementById("navX");
  let navDropdownLinksContainer = document.getElementById("navLinksContainer");

  navHamburger.classList.add("removeHamburger");
  navX.classList.add("enterX");
  navDropdownLinksContainer.classList.add("open");
}

function closeNavbarDropdown(){
  let navHamburger = document.getElementById("navHamburger");
  let navX = document.getElementById("navX");
  let navDropdownLinksContainer = document.getElementById("navLinksContainer");

  navX.classList.remove("enterX");
  navHamburger.classList.remove("removeHamburger");
  navDropdownLinksContainer.classList.remove("open");
}
export default function Layout({children}){
  return(
  <>
    <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-NC5MH4VL4P"
        strategy="afterInteractive"
      />
    <Script id="google-analytics" strategy="afterInteractive">
        {`          
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-NC5MH4VL4P');
        `}
      </Script>
    <Navbar/>
      <main>{children}</main>
    <Footer/>
  </>
  );
}
export function Navbar(){
  return(
    <>
      <div className="navBar">
        <div className="navLogoContainer">
          <Link href="/" as="/">
            <Image
              src={navLogo}
              alt="Conchis Cuisine Logo"
              className="navLogo"
              priority
            />
          </Link>
        </div>
        <div className="navDropdownSymbols">
          <Image
            src={navHamburger}
            alt="Dropdown for Navigation Bar"
            className="navDropdownHamburger"
            id="navHamburger"
            width={85}
            height={75}
            onClick={openNavbarDropdown}
            priority
          />
          <Image
            src={navX}
            alt="X to Close Navigation Menu"
            className="navDropdownX"
            id="navX"
            width={85}
            height={75}
            onClick={closeNavbarDropdown}
            priority
          />
        </div>
        <div className="navLinksContainer" id="navLinksContainer">
          <Link className="navLinks" href="/" as="/"onClick={closeNavbarDropdown}><p>Home</p></Link>
          <Link className="navLinks" href="/contact" as="/contact" onClick={closeNavbarDropdown}><p>Contact</p></Link>
          <Link className="navLinks" href="/gallery" as="/gallery" onClick={closeNavbarDropdown}><p>Gallery</p></Link>
          <Link className="navLinks" href="/menu" as="/menu" onClick={closeNavbarDropdown} ><p>Menu</p></Link>
          <Link className="navLinks" href="/about-us" as="/about-us" onClick={closeNavbarDropdown} ><p>About Us</p></Link>
          <Link className="navLinks" href="/catering-and-events" as="/catering-and-events" onClick={closeNavbarDropdown} ><p>Catering/Events</p></Link>
        </div>
      </div>
    </>
  )
}

export function Footer (){
  return(
    <>
    <div className='footer'>
      <div className='footerContentContainer'>
        <div className='footerLogoContainer'>
          <Link href="/" as="/" className='footerLogoLink'>
            <Image
              src="/logo.png"
              alt="Footer Logo"
              width={100}
              height={100}
              className="footerLogo"
            />
          </Link>
        </div>
        <div className='footerSocialsContainer'>
          <a href="https://www.facebook.com/conchiscuisine" target='_blank' rel="noreferrer" className='footerSocialIcons'>
            <Image
              src="/social-icons/facebook-icon.png"
              className='footerIcons'
              width={30}
              height={30}
              alt="Facebook Icon"
            />
          </a>
          <a href="https://wa.me/17859251692" target='_blank' rel="noreferrer" className='footerSocialIcons'>
            <Image
              src="/social-icons/whatsapp-icon.png"
              className='footerIcons'
              width={30}
              height={30}
              alt="Whatsapp Icon"
            />
          </a>
          <a href="mailto:conchiscuisine@gmail.com"  target='_blank' rel="noreferrer" className='footerSocialIcons'>
            <Image
              src="/social-icons/gmail-icon.png"
              className='footerIcons'
              width={40}
              height={30}
              alt="Gmail Icon"
              id="footerGmailIcon"
            />
          </a>
          <a href="tel:+17859251692"  className='footerSocialIcons'>
            <Image
              src="/social-icons/phone-icon.png"
              className='footerIcons'
              width={25}
              height={30}
              alt="Phone Icon"
              id="footerPhoneIcon"
            />
          </a>
        </div>
        <div className='footerPageLinksContainer'>
          <Link href="/" as="/"className='footerPageLinks'>Home</Link>
          <span className='footerLinksDivider'></span>
          <Link href="/contact" as="/contact" className='footerPageLinks'>Contact</Link>
          <span className='footerLinksDivider'></span>
          <Link href="/gallery" as="/gallery" className='footerPageLinks'>Gallery</Link>
          <span className='footerLinksDivider'></span>
          <Link href="/menu" as="/menu" className='footerPageLinks'>Menu</Link>
          <span className='footerLinksDivider'></span>
          <Link href="/about-us" as="/about-us" className='footerPageLinks'>About Us</Link>
          <span className='footerLinksDivider'></span>
          <Link href="/catering-and-events" as="/catering-and-events" className='footerPageLinks'>Catering/Events</Link>
        </div>
        <div className='bottomBranding'>
            <p>Website Created By <a href="mailto:juanriis456@gmail.com" target="_blank" rel="noreferrer">Juan Rios</a></p>      
        </div>
      </div>
    </div>
    </>
  )
}
