import { Container, Heading, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import styles from "../styles/gallery.module.css";
import Image from "next/image";
//Event Images
import cakeEvent from "../../public/gallery/events/cake-event.png";
import cooking from "../../public/gallery/events/cooking.png";
import cookingAtEvent from "../../public/gallery/events/cooking-at-event.png";
import cookingTrompo from "../../public/gallery/events/cooking-trompo.png";
import cuttingTrompo from "../../public/gallery/events/cutting-trompo.png";
import fiestaLine from "../../public/gallery/events/fiesta-line.png";
import fiestaPosing from "../../public/gallery/events/fiesta-posing.png";
import foodTruck from "../../public/gallery/events/food-truck.png";
//Food Images
import burrito from "../../public/gallery/food/burrito-square.png";
import cakeSquare from "../../public/gallery/food/cake-square.png";
import cakeSquare2 from "../../public/gallery/food/cake-square2.png";
import dessertCup from "../../public/gallery/food/dessert-cup.png";
import quesadilla from "../../public/gallery/food/quesadilla.png";
import tacosSquare from "../../public/gallery/food/tacos-square.png";
import tacosWide from "../../public/gallery/food/tacos-wide.png";
import torta from "../../public/gallery/food/torta.png";

export default function Gallery(){
    
  const tabArrayList= [ 'All', 'Events/Catering', 'Food'];

  return(
    <>
      <div className={styles.pageContainer}>
        <Heading textAlign="center" data-aos="fade-up">Gallery</Heading>
        <Container
          maxW="750px"
          py="20px"
          bgColor="var(--light-yellow)"
          borderRadius="15px"
          my="20px"
          data-aos="fade-up"
        >
          <Text py="10px" fontSize="lg" >
            Throughout all of the hard work that we have accomplished, below are
            examples that we have had the opportunity to photograph and display
            for you. These images range anywhere from experiences with events,
            catering, and food that has been prepared. Enjoy !!
          </Text>
          <Text py="10px" fontSize="lg" >
            To see a mix of images from events, catering, and food that has
            been made. Click the &quot;All&quot; button below.
          </Text>
          <Text py="10px" fontSize="lg" >
            To only see examples from catering events, or public events,
            click the &quot;Catering/Events&quot; button below.
          </Text>
          <Text py="10px" fontSize="lg">
            To only view examples of all the food that we have prepared,
            click the &quot;food&quot; button below.
          </Text> 
          <Text
            py="10px"
            fontSize="lg"
            fontWeight="300"
            bgColor="red.100"
            textAlign="center"  
          >
            !! Warning You May Become Hungry !!
          </Text>
        </Container>
          <Tabs variant="enclosed" backgroundColor='white' py={4}>
            <TabList display='flex'  alignContent='center' justifyContent='center' >
            {
              tabArrayList.map((item) =>(
                <Tab
                  backgroundColor="blue.400"
                  color="white"
                  key={item}
                  margin="0 2px"
                  data-aos="fade-up"
                  _selected={{
                    bg: 'var(--light-grey)',
                    color: 'black',
                  }}>
                  {item}
                </Tab>
              ))
            }
            </TabList>
            <TabPanels>
              <TabPanel>
        <div className={styles.galleryContainer}>
          {
            shuffle(galleryImages).map((item) => (
              <div className={styles.imageContainer} key={item.id}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  width="auto"
                  height="auto"
                  className={styles.image}
                  data-aos="fade-up"
                  priority
                />
              </div>
            ))
          }
        </div>
              </TabPanel>
              <TabPanel>
        <div className={styles.galleryContainer}>
          {
            galleryImages.map((item) => {
              if(item.ImageType == 'event'){
                return(
                  <div className={styles.imageContainer} key={item.id}>
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width="auto"
                      height="auto"
                      data-aos="fade-up"
                      className={styles.image}
                      priority
                    />
                  </div>
                );
              }
            })
          }
        </div>
              </TabPanel>
              <TabPanel>
        <div className={styles.galleryContainer}>
          {
            galleryImages.map((item) => {
                if(item.ImageType == 'food'){
                return(
                <div className={styles.imageContainer} key={item.id}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  width="auto"
                  height="auto"
                  data-aos="fade-up"
                  className={styles.image}
                  priority
                />
              </div>);
                
              }
            })
          } 
        </div>
              </TabPanel>
            </TabPanels>
          </Tabs>
      </div>
    </>
  );
}

export function shuffle(array){
  var arrayLength = array.length;
  var currentElementPosition;
  var itemChooser;
  
  while(arrayLength){
    //Picks a remaining element in the array
    itemChooser = Math.floor(Math.random() *arrayLength--);
    
    //Swaps new element with current element in array position
    currentElementPosition = array[arrayLength];
    array[arrayLength] = array[itemChooser];
    array[itemChooser] = currentElementPosition;
  }

  return array;
}
const galleryImages = [
  {
    src:cakeEvent,
    alt: 'Quinceañera set up with over 12 tables with a mini cake for each table',
    ImageType: 'event',
    id: 1,
  },
  {
    src:cooking,
    alt: 'Cooking fajitas, and chicken, while someone else is setting up the stand.',
    ImageType: 'event',
    id: 2,

  },
  {
    src:cookingAtEvent,
    alt: 'Cooking meats and preparing for the fiesta mexicana event in Topeka, KS.',
    ImageType: 'event',
    id: 3,

  },
  {
    src:cookingTrompo,
    alt: 'Cooking a trompo while cooking meats and preparing tacos',
    ImageType: 'event',
    id: 4,

  },
  {
    src:cuttingTrompo,
    alt: 'Cooking and cutting meat off a spinning meat top',
    ImageType: 'event',
    id: 5,

  },
  {
    src:fiestaLine,
    alt: 'Very long line of people wanting to order food from conchis cuisine',
    ImageType: 'event',
    id: 6,

  },
  {
    src:fiestaPosing,
    alt: 'Consepcion the founder and chef, waving at the camera',
    ImageType: 'event',
    id: 7,

  },
  {
    src:foodTruck,
    alt: 'Consepcion set up in her food truck with her trompo and all of her food items',
    ImageType: 'event',
    id: 8,
  },
  {
    src: burrito,
    alt: 'Picture of a burrito',
    ImageType: 'food',
    id: 9,
  },
  {
    src: cakeSquare,
    alt: 'Large cake for a quinceañera, 15 year old party',
    ImageType: 'food',
    id: 10,
  },
  {
    src: cakeSquare2,
    alt: '8in. cake with white and purple frosting',
    ImageType: 'food',
    id: 11,
  },
  {
    src: dessertCup,
    alt: 'Cup of fresas con cremas with conchis cuisine sticker on the side.',
    ImageType: 'food',
    id: 12,
  },
  {
    src: quesadilla,
    alt: 'Quesadillas made of steak, chicken, and fajitas',
    ImageType: 'food',
    id: 13,
  },
  {
    src: tacosSquare,
    alt: '4 pork pastor tacos with limes, grilled onions, and radishes',
    ImageType: 'food',
    id: 14,
  },
  {
    src: tacosWide,
    alt: '4 pork pastor tacos with limes, grilled onions, and radishes',
    ImageType: 'food',
    id: 15,
  },
  {
    src: torta,
    alt: 'Chicken torta with guacamole, cheese, and a jalapeño on top',
    ImageType: 'food',
    id: 16,
  },
];