import { Container, Heading, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import styles from "../styles/gallery.module.css";
import Image from "next/image";
import Head from "next/head";

export default function Gallery(){
    
  const tabArrayList= [ 'All', 'Events/Catering', 'Food'];

  return(
    <>
      <div className={styles.pageContainer}>
      <Head>
          <title>
            Conchis Cuisine Image Gallery
          </title>
          <meta name="description" content="Contact Conchis about about any food vendor event, food truck event, party, wedding, lunch, pop up truck, catering, including drinks and desserts.  "/>
          <meta property="og:title" content="Conchis Cuisine Image Gallery"/>
          <meta property="og:description" content="View pictures of our menu items, cooking, and our participation in numerous events."/>
          <meta property="og:image" content="https://conchiscuisine.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffiesta-line.72984c46.png&w=3840&q=75"/>
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.conchiscuisine.com/gallery"/>
              <link rel="icon" href="/logo.png" sizes="any"/>
     </Head>
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
                  width={900}
                  height={800}
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
                      width={900}
                      height={800}
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
                  width={900}
                  height={800}
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
    src:"/gallery/events/cake-event.png",
    alt: 'Quinceañera set up with over 12 tables with a mini cake for each table',
    ImageType: 'event',
    id: 1,
  },
  {
    src: "/public/gallery/events/cooking.png",
    alt: 'Cooking fajitas, and chicken, while someone else is setting up the stand.',
    ImageType: 'event',
    id: 2,

  },
  {
    src: "/public/gallery/events/cooking-at-event.png",
    alt: 'Cooking meats and preparing for the fiesta mexicana event in Topeka, KS.',
    ImageType: 'event',
    id: 3,

  },
  {
    src: "/public/gallery/events/cooking-trompo.png",
    alt: 'Cooking a trompo while cooking meats and preparing tacos',
    ImageType: 'event',
    id: 4,

  },
  {
    src: "/public/gallery/events/cutting-trompo.png",
    alt: 'Cooking and cutting meat off a spinning meat top',
    ImageType: 'event',
    id: 5,

  },
  {
    src: "/public/gallery/events/fiesta-line.png",
    alt: 'Very long line of people wanting to order food from conchis cuisine',
    ImageType: 'event',
    id: 6,

  },
  {
    src: "/public/gallery/events/fiesta-posing.png",
    alt: 'Consepcion the founder and chef, waving at the camera',
    ImageType: 'event',
    id: 7,

  },
  {
    src: "/public/gallery/events/food-truck.png",
    alt: 'Consepcion set up in her food truck with her trompo and all of her food items',
    ImageType: 'event',
    id: 8,
  },
  {
    src: "/public/gallery/food/burrito-square.png",
    alt: 'Picture of a burrito',
    ImageType: 'food',
    id: 9,
  },
  {
    src: "/public/gallery/food/cake-square.png",
    alt: 'Large cake for a quinceañera, 15 year old party',
    ImageType: 'food',
    id: 10,
  },
  {
    src: "/public/gallery/food/cake-square2.png",
    alt: '8in. cake with white and purple frosting',
    ImageType: 'food',
    id: 11,
  },
  {
    src: "/public/gallery/food/dessert-cup.png",
    alt: 'Cup of fresas con cremas with conchis cuisine sticker on the side.',
    ImageType: 'food',
    id: 12,
  },
  {
    src: "/public/gallery/food/quesadilla.png",
    alt: 'Quesadillas made of steak, chicken, and fajitas',
    ImageType: 'food',
    id: 13,
  },
  {
    src: "/public/gallery/food/tacos-square.png",
    alt: '4 pork pastor tacos with limes, grilled onions, and radishes',
    ImageType: 'food',
    id: 14,
  },
  {
    src: "/public/gallery/food/tacos-wide.png",
    alt: '4 pork pastor tacos with limes, grilled onions, and radishes',
    ImageType: 'food',
    id: 15,
  },
  {
    src: "/public/gallery/food/torta.png",
    alt: 'Chicken torta with guacamole, cheese, and a jalapeño on top',
    ImageType: 'food',
    id: 16,
  },
];
