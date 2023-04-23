import Image from "next/image";
import cuttingTrompo from "../../public/gallery/events/cutting-trompo-square.png";
import wideImage from "../../public/index-images/index-top-image.png";
import section3bg from "../../public/backgrounds/about-us-bg.png";
import styles from '../styles/about.module.css';
import { Container, Text, Heading } from "@chakra-ui/react";
import 'react-alice-carousel/lib/alice-carousel.css';
import fiestaLine from "../../public/gallery/events/fiesta-line.png";
import tacosWide from "../../public/gallery/food/tacos-wide.png";
import foodTruck from "../../public/gallery/events/food-truck.png";
import AliceCarousel from "react-alice-carousel";

const handleDrageStart = (e) => e.preventDefault();
const responsiveGallery = {
  0: {items: 1},
  
}

export default function About(){
  const items = [];
  const buildImageArray = imageInformation.map((image) =>
    items.push(
      <Image src={image.src} alt={image.alt} width='auto' data-aos='fade-up' height='auto' onDragStart={handleDrageStart} className={styles.slideshowImage} role="presentation"/>,
    )
  );

  return(
    <div className={styles.bodyContainer}>
      <div className={styles.topBanner}>
<svg id="visual" viewBox="0 0 1440 300" xmlns="http://www.w3.org/2000/svg" version="1.1"className={styles.curve}><path d="M0 45L160 100L320 51L480 61L640 137L800 46L960 152L1120 81L1280 151L1440 41L1440 301L1280 301L1120 301L960 301L800 301L640 301L480 301L320 301L160 301L0 301Z" fill="#fe4141"></path><path d="M0 175L160 115L320 104L480 165L640 126L800 186L960 183L1120 110L1280 128L1440 98L1440 301L1280 301L1120 301L960 301L800 301L640 301L480 301L320 301L160 301L0 301Z" fill="#fe6966"></path><path d="M0 151L160 224L320 230L480 200L640 166L800 149L960 165L1120 229L1280 226L1440 172L1440 301L1280 301L1120 301L960 301L800 301L640 301L480 301L320 301L160 301L0 301Z" fill="#f98a89"></path><path d="M0 263L160 207L320 239L480 248L640 233L800 230L960 271L1120 223L1280 207L1440 268L1440 301L1280 301L1120 301L960 301L800 301L640 301L480 301L320 301L160 301L0 301Z" fill="#eea9a9"></path></svg>
      </div>
      <div className={styles.section2}>
        <div className={styles.headerBodyContainer}>
          <div className={styles.headerBody}>
            <div className={styles.headerImageContainer}>
            <Image
              height='auto'
              width='auto'
              src={cuttingTrompo}
              alt='Picture of Conchis, the founder'
              className={styles.headerImage}
              data-aos='fade-up'
            />
            </div>
            <div className={styles.titleContainer}>
              <div className={styles.titleWordsContainer}>
                <Heading textAlign='center' fontSize='40px' data-aos='fade-up' >About Conchis Cuisine and The Founder</Heading>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.section3}>
        <Image src={section3bg} width={'auto'}  style={{opacity: '.3' }} height={'auto'} alt='Image background' className={styles.section3bg} />
        <Container maxW='900px' py={10}  borderRadius={'15px'} >
            <Heading size={'lg'} pt={6}>Who are you, and where are you from?</Heading>
            <Text fontWeight='semibold' py='10px' data-aos='fade-up' pl={5}> 
              My name is Consepcion Cruz I am from Oaxaca, Mexico in a
              village called Santa Cruz Papalutla.
            </Text>
            <Heading size={'lg'} pt={6}>When did you learn how to cook?</Heading>
            <Text fontWeight='semibold' py='10px' data-aos='fade-up' pl={5}>
              I learned how to cook since I was a little girl but I remember the specific day that I discovered that not only was it
              something that I enjoyed, but it was also a necessity because it was important to help my parents get through economically
              difficult times like any other family. My mother, who was very worried and afflicted with pain told me when I was 8 years old
              'I need to go wash some clothes and today you need to be in charge of making food for your dad and brothers once they
              come back from work.' I nervously responded by saying 'Sure mom don't worry just tell me what I need to do' and that is how I learned.
              It was fun because at that age everything was like a game I still wasn't aware of responsibilities. After I was finished making the
              food just as my mom had told me, everyone came in to eat and as they were leaving my dad gave me a hug and told me the food was
              delicious. For me this was the beginning of my adventures in the kitchen.
            </Text>
            <Heading size={'lg'} pt={6}>Tell us a little about your business.</Heading>
            <Text fontWeight='semibold' py='10px' data-aos='fade-up' pl={5}>
              My business has been like many others it started with a dream that was never left behind. There have been a couple of stages of my
              life starting with the first one when I was 5 years old that used to walk down the streets carrying a basket with all types of candy
              to school so I could sell it all, and when I was 10 years old my dad bought me a wheelbarrow where I carried drinks, candy, and bracelets.
              I would walk many blocks so I could get to the market where I would sell all of my items. When I was 13 years old I had to leave the
              village to go find work and fill myself with more experience and knowledge that I longed for. I had thousands of experiences both good and bad
              that cause my heart and mind to strengthen. Life and its circumstances I've always said that things don't just happen. I waited many years
              for an opportunity to make my dreams come true, my first victory was making my first plate and my second which is also the most important,
              was the privelege of being a mother. 
            </Text>
            <Heading size={'lg'} pt={6}>When did you first start to sell things?</Heading>
            <Text fontWeight='semibold' py='10px' data-aos='fade-up' pl={5}>
              I learned how to sell since I was 5 years old my mom would prepare gelatin in a cup and I would walk the streets going door to door, or announcing
              it to the public yelling "Gelatinas compren gelatinas" on occasions I would sell and on others I would have some owe me but I always knew that
              business worked like that at times. Sometimes I would give them away to other kids because I knew they wanted one but didn't have the money to buy it.
            </Text>
            <Heading size={'lg'} pt={6}>What is your favorite dish to cook?</Heading>
            <Text fontWeight='semibold' py='10px' data-aos='fade-up' pl={5}>
              I like to cook eggs with beans, since that was the first meal that I have ever prepared in my life that I made from scratch.
            </Text>
            <Heading size={'lg'} pt={6}>What has inspired you?</Heading>
            <Text fontWeight='semibold' py='10px' data-aos='fade-up' pl={5}>
              My children inspire me to keep moving forward and become stronger every day to show them that what you persever in life, reach it and we should never
              put our dreams to the side and quoting an old client "Tonight I am satisfied with my services your work is very hard and is not easy, for that very
              reason not anyone can do it." Those words inspire me to keep moving forward. <br/>
              Thank you very much 
            </Text>
            <Text fontWeight='bold' textAlign={'center'} py={50} data-aos='fade-up' fontSize={'2xl'} pl={5}>
              Never let your dreams fall. Nothing is easy because just how God rewards us each day when we wake up, that is how we strengthen our dreams.<br/>
              -Consepcion Cruz
            </Text>
          <AliceCarousel data-aos='fade-up' mouseTracking items={items} infinite='true' animationDuration='200' />
        </Container>
      </div>
    </div>
  );
}

const imageInformation = [
    {
      src: fiestaLine,
      alt: 'trompoImage',
    },
    {
      src: tacosWide,
      alt: 'trompoImage',
    },
    {
      src: wideImage,
      alt: 'trompoImage',
    },
    {
      src: foodTruck,
      alt: 'trompoImage',
    },
  ];