import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from 'next/script';
import styles from "../styles/index.module.css";
import wideImage from "../../public/index-images/index-top-image.png";
import trompoImage from "../../public/index-images/trompo-image.png";
import exampleSectionbg from "../../public/backgrounds/Untitled-7.png";
import tacosWide from "../../public/gallery/food/tacos-wide.png";
import tacosSquare from "../../public/gallery/food/tacos-square.png";
import cakeSquare from "../../public/gallery/food/cake-square.png";
import fiestaLine from "../../public/gallery/events/fiesta-line.png";
import cakeEvent from "../../public/gallery/events/cake-event.png";
import foodTruck from "../../public/gallery/events/food-truck.png";
import AliceCarousel from "react-alice-carousel";
import 'react-alice-carousel/lib/alice-carousel.css';
import { SocialLinks } from "./contact";
import {Heading} from '@chakra-ui/react';



const handleDragStart = (e) => e.preventDefault();

export default function Home (){
  return(
    <>
      <Section1/>
      <Section2/>
      <Section3/>
      <SocialLinks/>
    </>
  );
}
export function Section1(){
  
  const items = [];
  const buildImageArray = imageInformation.map((image) =>
    items.push(
      <Image src={image.src} alt={image.alt} placeholder="blur" width='auto' data-aos='fade-up' height='auto' onDragStart={handleDragStart} className={styles.topSectionImage} role="presentation"/>,
    )
  );
  return(
    <>
      <div className={styles.topSectionContainer} >
        <Head>
          <title>
            Conchis Cuisine Authentic Mexican Food | Food vendor in Topeka Kansas that offers authentic mexican food, desserts, and aguas frescas(natural juices)
          </title>
          <meta name="description" content="Our services include catering parties, weddings, luncheons pop up truck, school events, and food truck events such as carnivals, fairs, festivals, rodeos, and more. Primarily in Topeka but we also visit events in surrounding cities like Kansas City Ks, Kansas City Mo, Emporia Ks, Manhattan KS, Alma KS,. Some of our food options are tacos, tortas, burritos, flautas, corn, cakes, empanadas, gelatin flan, chocoflan, ice cream, popsicles, and aguas frescas."/>
          <meta property="og:title" content="Conchis Cuisine Authentic Mexican Food | Tacos, Tortas, burritos, cakes, gelatin , aguas frescas and more!"/>
          <meta property="og:description" content="Food Truck in the Topeka Kansas area serving food, desserts and drinks in neighboring cities as well. Services include pop up truck, party catering, office luncheons, weddings, festivals and more."/>
          <meta property="og:image" content="https://www.conchiscuisine.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdessert-cup.4eba89fe.png&w=1920&q=75"/>
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.conchiscuisine.com"/>
          <link rel="icon" href="/logo.png" sizes="any"/>
        </Head>
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-NC5MH4VL4P"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-NC5MH4VL4P');
</script>
        <span className={styles.topSectionBanner}></span>
        <div data-aos='fade-up' className={styles.topSectionBackground}>
          <div className={styles.topSectionTextContainer}>
            <div className={styles.topSectionText}>
              <p>Welcome To</p> 
              <p className={styles.conchisCuisineText}>Conchis Cuisine</p>
            </div>
            <div className={styles.topSectionEventsButton}>
              <Link href="/catering-and-events" className={styles.blueButton}>
                View Upcoming Events
              </Link>
            </div>
          </div>
          <div className={styles.topSectionImageContainer}>
            <div className={styles.topSectionImageBox}>
          <AliceCarousel data-aos='fade-up' mouseTracking items={items} infinite='true'  animationDuration='200' />
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
//Make Sure all of the images are in square shape for the card section
export function Section2(){
  return(
    <>
      <div className={styles.exampleSectionContainer}>
        <Image src={exampleSectionbg} alt='background for the second section' width={'auto'} height={'auto'} className={styles.exampleSectionbg}/>
          <Heading textAlign="center" px="10px" data-aos='fade-up'>
            Authentic Mexican Cuisine
          </Heading>
        <div className={styles.exampleSectionCardContainer}>
          <div className={styles.exampleCardContainer}>
            <div className={styles.exampleCard} data-aos='fade-up'>
              <div className={styles.exampleCardImageContainer}>
                <Image
                  src={trompoImage}
                  alt="Trompo slow roasting, pork roasting as a spinning top"
                  className={styles.cardImage}
                  placeholder="blur"
                />
              </div>
              <div className={styles.exampleCardTextContainer}>
              <p>Famous tacos de trompo.</p>
              </div>
            </div>
          </div>
          <div className={styles.exampleCardContainer}>
            <div className={styles.exampleCard} data-aos='fade-up'>
              <div className={styles.exampleCardImageContainer}>
                <Image
                  src={tacosSquare}
                  alt="Plate of Tacos topped with cilantro and onion"
                  className={styles.cardImage}
                  placeholder="blur"
                />
              </div>
              <div className={styles.exampleCardTextContainer}>
              <p>Delicious traditional mexican tacos with different types of meat</p>
              </div>
            </div>
          </div>
          <div className={styles.exampleCardContainer}>
            <div className={styles.exampleCard} data-aos='fade-up'>
              <div className={styles.exampleCardImageContainer}>
                <Image
                  src={cakeSquare}
                  alt="Tres Leches Cake example"
                  className={styles.cardImage}
                  placeholder="blur"
                />
              </div>
              <div className={styles.exampleCardTextContainer}>
              <p>Tres Leches cakes, and many more traditionl mexican desserts!</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.exampleSectionButton} data-aos='fade-up'>
          <Link href="/menu" className={styles.blueButton}>
            View Full Menu
          </Link>
        </div>
      </div>
    </>
  );
}
//Make Sure all of the images are in square shape for the Services section
export function Section3(){
  return(
    <>
      <div className={styles.serviceSectionContainer}>
        <div className={styles.curve2}></div>
          <Heading data-aos='fade-up' textAlign="center" px="10px">
            Services
          </Heading>
        <div className={styles.serviceBoxesContainer}>
          <div className={styles.serviceBoxContainer}>
            <div className={styles.serviceBox}>
              <div className={styles.serviceImageContainer}>
                <Image
                  src={fiestaLine}
                  alt="Conchis Cuisine at an event serving, and cooking food"
                  className={styles.serviceImage} 
                  placeholder="blur"
                  data-aos='fade-up'
                />
              </div>
              <div data-aos='fade-up' className={styles.serviceBoxTextContainer}>
                <div  className={styles.serviceTitle}>
                  <p >Events</p>
                </div>
                <div className={styles.serviceBoxText}>
                  <p>We participate in events including, but not limited to:</p>
                </div>
                <div className={styles.serviceBoxList}>
                  <ul>
                    <li>Festivals</li>
                    <li>Concerts</li>
                    <li>Rodeos</li>
                    <li>And More!!</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <span className={styles.serviceBoxDivider}></span>
          <div className={styles.serviceBoxContainer}>
            <div className={`${styles.serviceBox} ${styles.secondBox}`}>
              <div className={styles.serviceImageContainer}>
                <Image
                  src={cakeEvent}
                  alt="Conchis Cuisine at an event serving, and cooking food"
                  className={styles.serviceImage} 
                  placeholder="blur"
                  data-aos='fade-up'
                />
              </div>
              <div data-aos='fade-up' className={styles.serviceBoxTextContainer}>
                <div className={styles.serviceTitle}>
                  <p>Catering</p>
                </div>
                <div className={styles.serviceBoxText}>
                  <p>We cater to all events including but not limited to:</p>
                </div>
                <div className={styles.serviceBoxList}>
                  <ul>
                    <li>Office Partys</li>
                    <li>Holidays</li>
                    <li>Birthdays</li>
                    <li>And More!!</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.serviceButton} data-aos='fade-up'>
          <Link className={styles.blueButton} href="catering-and-events">
            Learn More
          </Link>
        </div>
        <div className={styles.curve3}></div>
      </div>
    </>
  );
}
const imageInformation = [
    {
      src: fiestaLine,
      alt: 'Very long line of people wanting to order food from conchis cuisine',
    },
    {
      src: tacosWide,
      alt: '4 pork pastor tacos with limes, grilled onions, and radishes',
    },
    {
      src: wideImage,
      alt: 'Conchis cuisine showing a jalapeño to the camera as the meat is cooking for her food event',
    },
    {
      src: foodTruck,
      alt: 'Consepcion set up in her food truck with her trompo and all of her food items',
    },
  ];
