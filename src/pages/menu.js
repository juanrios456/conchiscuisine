import { Container, Heading, Tab, TabPanel, TabList, TabPanels, Tabs, Text, UnorderedList, ListItem, } from '@chakra-ui/react';
import { AiFillStar } from 'react-icons/ai';
import styles from '../styles/menu.module.css';
import Head from "next/head";
import {
  flautasArray,
  tacosArray,tortasArray,
  quesadillasArray,
  aguasFrescasArray,
  bottledDrinksArray,
  flansArray,
  gelatinsArray,
  empanadasArray,
  cakesArray,
  cheesecakesArray,
  piesArray,
  paletasArray,
  cookiesArray
} from '/lib/menuItems';


export default function Menu(){
  let tabArrayList = [ 'Full Menu', 'Main Courses', 'Desserts', 'Drinks'];

  return(
    <>
      <div className={styles.bodyContainer}>
      <Head>
          <title>
            Conchis Cuisine Menu
          </title>
          <meta name="description" content="View the conchis cuisine full menu including menu items, meats, drinks, desserts, and side dishes. Including Tacos, tortas, burritos, flan, empanadas, tres leches cakes, gelatin, jell-o, elote, horcata, steak, pastor, asada, beef, pork, chicken, and ice cream."/>
          <meta property="og:title" content="Conchis Cuisine Menu"/>
          <meta property="og:description" content="View Conchis Cuisines Full menu"/>
          <meta property="og:image" content="https://conchiscuisine.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdessert-cup.4eba89fe.png&w=1920&q=75"/>
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.conchiscuisine.com/menu"/>
            <link rel="icon" href="/logo.png" sizes="any"/>
     </Head>
        <Container py='30px' maxW='600px' bgColor={'blue.100'} borderRadius={'15px'} data-aos='fade-up'>
          <Heading textAlign='center' >Menu</Heading>
          <Text py='10px'>
            Below we have a display of the menu with all of the different
            food items that we offer. We offer traditional mexican food,
            including main courses, drinks, and desserts.
          </Text>
          <Text py='10px'>
            Below you have the option to look at specific menus if you
            choose. Click the button below this paragraph to see that particular
            part of the menu first.
          </Text>
        </Container>
        <Tabs variant='soft-rounded' py='35px' data-aos='fade-up'>
          <TabList>
            <div className={styles.tablistContainer}>
            {
              tabArrayList.map((item) =>(
                <Tab
                  className={styles.tabitem}
                  backgroundColor="blue.400"
                  color="white"
                  key={item}
                  _selected={{
                    bg: 'white',
                    borderBottom:'none',
                    color:'black',}}>
                  {item}
                </Tab>
              ))
            }
            </div>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Container data-aos='fade-up' my={10} backgroundColor='var(--bright-yellow)' className={styles.menuHeader} borderRadius='1000px'>
                <Heading  textAlign='center' py={10} >Full Menu</Heading>
              </Container>
              <Container maxW='950px' backgroundColor='var(--bright-yellow)' borderRadius='15px'>
                <MenuSectionTitle>Entrées</MenuSectionTitle>
                <div className={styles.foodSectionGrid}>
                  <FoodItemList foodArray={tacosArray} foodItem='Tacos'/>
                  <FoodItemList  foodArray={tortasArray} foodItem='Tortas'/>
                  <FoodItemList  foodArray={quesadillasArray} foodItem='Quesadillas'/>
                  <FoodItemList  foodArray={flautasArray} foodItem='Flautas'/>
                </div>
                <MenuSectionTitle>Drinks</MenuSectionTitle>
                <div className={styles.foodSectionGrid}>
                  <FoodItemList  foodArray={aguasFrescasArray} foodItem='Aguas Frescas'/>
                  <FoodItemList  foodArray={bottledDrinksArray} foodItem='Bottled Drinks'/>
                </div>
                <MenuSectionTitle>Desserts</MenuSectionTitle>
                <div className={styles.foodSectionGrid}>
                  <FoodItemList foodArray={flansArray} foodItem='Flans'>
                    <MenuAlert>
                      <Heading size='md' textAlign='center' borderBottom='2px' borderColor='black'>On Request</Heading>
                      <UnorderedList>
                        <ListItem>
                          Can add special nuts or special flavors
                        </ListItem>
                      </UnorderedList>
                    </MenuAlert>
                  </FoodItemList>
                  <FoodItemList foodArray={gelatinsArray} foodItem='Gelatin'>
                    <MenuAlert>
                      <Heading size='md' textAlign='center' borderBottom='2px' borderColor='black'>On Request</Heading>
                      <UnorderedList>
                        <ListItem>
                          Can make single portions or special sizes / shapes
                        </ListItem>
                        <ListItem>
                          Can also print premade designs/images
                        </ListItem>
                        <ListItem>
                          Can be special ordered with fruit
                        </ListItem>
                      </UnorderedList>
                      <Text textAlign='center'>
                      </Text>
                    </MenuAlert>
                  </FoodItemList>
                  <FoodItemList foodArray={empanadasArray} foodItem='Empanadas'>
                    <MenuAlert>
                      <Heading size='md' textAlign='center' borderBottom='2px' borderColor='black'>On Request</Heading>
                      <UnorderedList>
                        <ListItem>
                          Can add speical fruit filling
                        </ListItem>
                      </UnorderedList>
                    </MenuAlert>
                  </FoodItemList>
                  <FoodItemList foodArray={cakesArray} foodItem='Cakes'>
                    <MenuAlert>
                      <Heading size='md' textAlign='center' borderBottom='2px' borderColor='black'>On Request</Heading>
                      <UnorderedList>
                        <ListItem>
                          All cakes may have special fruit filling
                        </ListItem>
                        <ListItem>
                          Custom printed images can be applied
                        </ListItem>
                      </UnorderedList>
                    </MenuAlert>
                  </FoodItemList>
                  <FoodItemList foodArray={cheesecakesArray} foodItem='CheeseCakes'>
                    <MenuAlert>
                      <Heading size='md' textAlign='center' borderBottom='2px' borderColor='black'>On Request</Heading>
                      <UnorderedList>
                        <ListItem>
                          Can make special flavor on request (with natural fruit)
                        </ListItem>
                      </UnorderedList>
                    </MenuAlert>
                  </FoodItemList>
                  <FoodItemList foodArray={piesArray} foodItem='Pies'>
                    <MenuAlert>
                      <Heading size='md' textAlign='center' borderBottom='2px' borderColor='black'>On Request</Heading>
                      <UnorderedList>
                        <ListItem>
                          Can make special flavor on request (with natural fruit)
                        </ListItem>
                      </UnorderedList>
                    </MenuAlert>
                  </FoodItemList>
                  <FoodItemList foodArray={paletasArray} foodItem='Paletas'>
                    <MenuAlert>
                      <Heading size='md' textAlign='center' borderBottom='2px' borderColor='black'>On Request</Heading>
                      <UnorderedList>
                        <ListItem>
                          Can make special flavor on request (with natural fruit)
                        </ListItem>
                      </UnorderedList>
                    </MenuAlert>
                  </FoodItemList>
                  <FoodItemList foodArray={cookiesArray} foodItem='Cookies'>
                    <MenuAlert>
                      <Heading size='md' textAlign='center' borderBottom='2px' borderColor='black'>On Request</Heading>
                      <UnorderedList>
                        <ListItem>
                          Can print images on cookies
                        </ListItem>
                      </UnorderedList>
                    </MenuAlert>
                  </FoodItemList>
                </div>
              </Container>
            </TabPanel>
            <TabPanel>
              <Container my={5} backgroundColor='var(--bright-yellow)' className={styles.menuHeader} borderRadius='1000px'>
                <Heading  textAlign='center' py={10} >Main Courses</Heading>
              </Container>
              <Container maxW='950px' backgroundColor='var(--bright-yellow)' borderRadius='15px'>
                <MenuSectionTitle>Entrées</MenuSectionTitle>
                <div className={styles.foodSectionGrid}>
                  <FoodItemList foodArray={tacosArray} foodItem='Tacos'/>
                  <FoodItemList  foodArray={tortasArray} foodItem='Tortas'/>
                  <FoodItemList  foodArray={quesadillasArray} foodItem='Quesadillas'/>
                  <FoodItemList  foodArray={flautasArray} foodItem='Flautas'/>
                </div>
                <MenuSectionTitle>Drinks</MenuSectionTitle>
                <div className={styles.foodSectionGrid}>
                  <FoodItemList  foodArray={aguasFrescasArray} foodItem='Aguas Frescas'/>
                  <FoodItemList  foodArray={bottledDrinksArray} foodItem='Bottled Drinks'/>
                </div>
                <MenuSectionTitle>Desserts</MenuSectionTitle>
                <div className={styles.foodSectionGrid}>
                  <FoodItemList foodArray={flansArray} foodItem='Flans'>
                    <MenuAlert>
                      <Heading size='md' textAlign='center' borderBottom='2px' borderColor='black'>On Request</Heading>
                      <UnorderedList>
                        <ListItem>
                          Can add special nuts or special flavors
                        </ListItem>
                      </UnorderedList>
                    </MenuAlert>
                  </FoodItemList>
                  <FoodItemList foodArray={gelatinsArray} foodItem='Gelatin'>
                    <MenuAlert>
                      <Heading size='md' textAlign='center' borderBottom='2px' borderColor='black'>On Request</Heading>
                      <UnorderedList>
                        <ListItem>
                          Can make single portions or special sizes / shapes
                        </ListItem>
                        <ListItem>
                          Can also print premade designs/images
                        </ListItem>
                        <ListItem>
                          Can be special ordered with fruit
                        </ListItem>
                      </UnorderedList>
                      <Text textAlign='center'>
                      </Text>
                    </MenuAlert>
                  </FoodItemList>
                  <FoodItemList foodArray={empanadasArray} foodItem='Empanadas'>
                    <MenuAlert>
                      <Heading size='md' textAlign='center' borderBottom='2px' borderColor='black'>On Request</Heading>
                      <UnorderedList>
                        <ListItem>
                          Can add speical fruit filling
                        </ListItem>
                      </UnorderedList>
                    </MenuAlert>
                  </FoodItemList>
                  <FoodItemList foodArray={cakesArray} foodItem='Cakes'>
                    <MenuAlert>
                      <Heading size='md' textAlign='center' borderBottom='2px' borderColor='black'>On Request</Heading>
                      <UnorderedList>
                        <ListItem>
                          All cakes may have special fruit filling
                        </ListItem>
                        <ListItem>
                          Custom printed images can be applied
                        </ListItem>
                      </UnorderedList>
                    </MenuAlert>
                  </FoodItemList>
                  <FoodItemList foodArray={cheesecakesArray} foodItem='CheeseCakes'>
                    <MenuAlert>
                      <Heading size='md' textAlign='center' borderBottom='2px' borderColor='black'>On Request</Heading>
                      <UnorderedList>
                        <ListItem>
                          Can make special flavor on request (with natural fruit)
                        </ListItem>
                      </UnorderedList>
                    </MenuAlert>
                  </FoodItemList>
                  <FoodItemList foodArray={piesArray} foodItem='Pies'>
                    <MenuAlert>
                      <Heading size='md' textAlign='center' borderBottom='2px' borderColor='black'>On Request</Heading>
                      <UnorderedList>
                        <ListItem>
                          Can make special flavor on request (with natural fruit)
                        </ListItem>
                      </UnorderedList>
                    </MenuAlert>
                  </FoodItemList>
                  <FoodItemList foodArray={paletasArray} foodItem='Paletas'>
                    <MenuAlert>
                      <Heading size='md' textAlign='center' borderBottom='2px' borderColor='black'>On Request</Heading>
                      <UnorderedList>
                        <ListItem>
                          Can make special flavor on request (with natural fruit)
                        </ListItem>
                      </UnorderedList>
                    </MenuAlert>
                  </FoodItemList>
                  <FoodItemList foodArray={cookiesArray} foodItem='Cookies'>
                    <MenuAlert>
                      <Heading size='md' textAlign='center' borderBottom='2px' borderColor='black'>On Request</Heading>
                      <UnorderedList>
                        <ListItem>
                          Can print images on cookies
                        </ListItem>
                      </UnorderedList>
                    </MenuAlert>
                  </FoodItemList>
                </div>
              </Container>
            </TabPanel>
            <TabPanel>
              <Container my={5} backgroundColor='var(--bright-yellow)' className={styles.menuHeader} borderRadius='1000px'>
                <Heading  textAlign='center' py={10} >Desserts</Heading>
              </Container>
              <Container maxW='950px' backgroundColor='var(--bright-yellow)' borderRadius='15px'>
                <MenuSectionTitle>Desserts</MenuSectionTitle>
                <div className={styles.foodSectionGrid}>
                  <FoodItemList foodArray={flansArray} foodItem='Flans'>
                    <MenuAlert>
                      <Heading size='md' textAlign='center' borderBottom='2px' borderColor='black'>On Request</Heading>
                      <UnorderedList>
                        <ListItem>
                          Can add special nuts or special flavors
                        </ListItem>
                      </UnorderedList>
                    </MenuAlert>
                  </FoodItemList>
                  <FoodItemList foodArray={gelatinsArray} foodItem='Gelatin'>
                    <MenuAlert>
                      <Heading size='md' textAlign='center' borderBottom='2px' borderColor='black'>On Request</Heading>
                      <UnorderedList>
                        <ListItem>
                          Can make single portions or special sizes / shapes
                        </ListItem>
                        <ListItem>
                          Can also print premade designs/images
                        </ListItem>
                        <ListItem>
                          Can be special ordered with fruit
                        </ListItem>
                      </UnorderedList>
                      <Text textAlign='center'>
                      </Text>
                    </MenuAlert>
                  </FoodItemList>
                  <FoodItemList foodArray={empanadasArray} foodItem='Empanadas'>
                    <MenuAlert>
                      <Heading size='md' textAlign='center' borderBottom='2px' borderColor='black'>On Request</Heading>
                      <UnorderedList>
                        <ListItem>
                          Can add speical fruit filling
                        </ListItem>
                      </UnorderedList>
                    </MenuAlert>
                  </FoodItemList>
                  <FoodItemList foodArray={cakesArray} foodItem='Cakes'>
                    <MenuAlert>
                      <Heading size='md' textAlign='center' borderBottom='2px' borderColor='black'>On Request</Heading>
                      <UnorderedList>
                        <ListItem>
                          All cakes may have special fruit filling
                        </ListItem>
                        <ListItem>
                          Custom printed images can be applied
                        </ListItem>
                      </UnorderedList>
                    </MenuAlert>
                  </FoodItemList>
                  <FoodItemList foodArray={cheesecakesArray} foodItem='CheeseCakes'>
                    <MenuAlert>
                      <Heading size='md' textAlign='center' borderBottom='2px' borderColor='black'>On Request</Heading>
                      <UnorderedList>
                        <ListItem>
                          Can make special flavor on request (with natural fruit)
                        </ListItem>
                      </UnorderedList>
                    </MenuAlert>
                  </FoodItemList>
                  <FoodItemList foodArray={piesArray} foodItem='Pies'>
                    <MenuAlert>
                      <Heading size='md' textAlign='center' borderBottom='2px' borderColor='black'>On Request</Heading>
                      <UnorderedList>
                        <ListItem>
                          Can make special flavor on request (with natural fruit)
                        </ListItem>
                      </UnorderedList>
                    </MenuAlert>
                  </FoodItemList>
                  <FoodItemList foodArray={paletasArray} foodItem='Paletas'>
                    <MenuAlert>
                      <Heading size='md' textAlign='center' borderBottom='2px' borderColor='black'>On Request</Heading>
                      <UnorderedList>
                        <ListItem>
                          Can make special flavor on request (with natural fruit)
                        </ListItem>
                      </UnorderedList>
                    </MenuAlert>
                  </FoodItemList>
                  <FoodItemList foodArray={cookiesArray} foodItem='Cookies'>
                    <MenuAlert>
                      <Heading size='md' textAlign='center' borderBottom='2px' borderColor='black'>On Request</Heading>
                      <UnorderedList>
                        <ListItem>
                          Can print images on cookies
                        </ListItem>
                      </UnorderedList>
                    </MenuAlert>
                  </FoodItemList>
                </div>
                <MenuSectionTitle>Entrées</MenuSectionTitle>
                <div className={styles.foodSectionGrid}>
                  <FoodItemList foodArray={tacosArray} foodItem='Tacos'/>
                  <FoodItemList  foodArray={tortasArray} foodItem='Tortas'/>
                  <FoodItemList  foodArray={quesadillasArray} foodItem='Quesadillas'/>
                  <FoodItemList  foodArray={flautasArray} foodItem='Flautas'/>
                </div>
                <MenuSectionTitle>Drinks</MenuSectionTitle>
                <div className={styles.foodSectionGrid}>
                  <FoodItemList  foodArray={aguasFrescasArray} foodItem='Aguas Frescas'/>
                  <FoodItemList  foodArray={bottledDrinksArray} foodItem='Bottled Drinks'/>
                </div>
              </Container>
            </TabPanel>
            <TabPanel>
              <Container my={5} backgroundColor='var(--bright-yellow)' className={styles.menuHeader} borderRadius='1000px'>
                <Heading  textAlign='center' py={10} >Drinks</Heading>
              </Container>
              <Container maxW='950px' backgroundColor='var(--bright-yellow)' borderRadius='15px'>
                <MenuSectionTitle>Drinks</MenuSectionTitle>
                <div className={styles.foodSectionGrid}>
                  <FoodItemList  foodArray={aguasFrescasArray} foodItem='Aguas Frescas'/>
                  <FoodItemList  foodArray={bottledDrinksArray} foodItem='Bottled Drinks'/>
                </div>
                <MenuSectionTitle>Entrées</MenuSectionTitle>
                <div className={styles.foodSectionGrid}>
                  <FoodItemList foodArray={tacosArray} foodItem='Tacos'/>
                  <FoodItemList  foodArray={tortasArray} foodItem='Tortas'/>
                  <FoodItemList  foodArray={quesadillasArray} foodItem='Quesadillas'/>
                  <FoodItemList  foodArray={flautasArray} foodItem='Flautas'/>
                </div>
                <MenuSectionTitle>Desserts</MenuSectionTitle>
                <div className={styles.foodSectionGrid}>
                  <FoodItemList foodArray={flansArray} foodItem='Flans'>
                    <MenuAlert>
                      <Heading size='md' textAlign='center' borderBottom='2px' borderColor='black'>On Request</Heading>
                      <UnorderedList>
                        <ListItem>
                          Can add special nuts or special flavors
                        </ListItem>
                      </UnorderedList>
                    </MenuAlert>
                  </FoodItemList>
                  <FoodItemList foodArray={gelatinsArray} foodItem='Gelatin'>
                    <MenuAlert>
                      <Heading size='md' textAlign='center' borderBottom='2px' borderColor='black'>On Request</Heading>
                      <UnorderedList>
                        <ListItem>
                          Can make single portions or special sizes / shapes
                        </ListItem>
                        <ListItem>
                          Can also print premade designs/images
                        </ListItem>
                        <ListItem>
                          Can be special ordered with fruit
                        </ListItem>
                      </UnorderedList>
                      <Text textAlign='center'>
                      </Text>
                    </MenuAlert>
                  </FoodItemList>
                  <FoodItemList foodArray={empanadasArray} foodItem='Empanadas'>
                    <MenuAlert>
                      <Heading size='md' textAlign='center' borderBottom='2px' borderColor='black'>On Request</Heading>
                      <UnorderedList>
                        <ListItem>
                          Can add speical fruit filling
                        </ListItem>
                      </UnorderedList>
                    </MenuAlert>
                  </FoodItemList>
                  <FoodItemList foodArray={cakesArray} foodItem='Cakes'>
                    <MenuAlert>
                      <Heading size='md' textAlign='center' borderBottom='2px' borderColor='black'>On Request</Heading>
                      <UnorderedList>
                        <ListItem>
                          All cakes may have special fruit filling
                        </ListItem>
                        <ListItem>
                          Custom printed images can be applied
                        </ListItem>
                      </UnorderedList>
                    </MenuAlert>
                  </FoodItemList>
                  <FoodItemList foodArray={cheesecakesArray} foodItem='CheeseCakes'>
                    <MenuAlert>
                      <Heading size='md' textAlign='center' borderBottom='2px' borderColor='black'>On Request</Heading>
                      <UnorderedList>
                        <ListItem>
                          Can make special flavor on request (with natural fruit)
                        </ListItem>
                      </UnorderedList>
                    </MenuAlert>
                  </FoodItemList>
                  <FoodItemList foodArray={piesArray} foodItem='Pies'>
                    <MenuAlert>
                      <Heading size='md' textAlign='center' borderBottom='2px' borderColor='black'>On Request</Heading>
                      <UnorderedList>
                        <ListItem>
                          Can make special flavor on request (with natural fruit)
                        </ListItem>
                      </UnorderedList>
                    </MenuAlert>
                  </FoodItemList>
                  <FoodItemList foodArray={paletasArray} foodItem='Paletas'>
                    <MenuAlert>
                      <Heading size='md' textAlign='center' borderBottom='2px' borderColor='black'>On Request</Heading>
                      <UnorderedList>
                        <ListItem>
                          Can make special flavor on request (with natural fruit)
                        </ListItem>
                      </UnorderedList>
                    </MenuAlert>
                  </FoodItemList>
                  <FoodItemList foodArray={cookiesArray} foodItem='Cookies'>
                    <MenuAlert>
                      <Heading size='md' textAlign='center' borderBottom='2px' borderColor='black'>On Request</Heading>
                      <UnorderedList>
                        <ListItem>
                          Can print images on cookies
                        </ListItem>
                      </UnorderedList>
                    </MenuAlert>
                  </FoodItemList>
                </div>
              </Container>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </>
  );
}

function MenuSectionTitle({ children }){
  return(
    <Container py='10px' display='flex' justifyContent='center' alignItems='center' flexDirection='column' data-aos='fade-up'>
      <Heading textAlign='center'>{children}</Heading>
      <div className={styles.line}></div>
    </Container>
  );
};

function MenuAlert({children}){
  return(
    <Container
      backgroundColor='var(--bright-green)'
      maxW='400px'
      width='100%'
      borderRadius='15px'
      p='2'
      my='10px'
      display='flex'
      flexDirection='row'
    >
      <AiFillStar size='25px' color="var(--medium-blue)"/>
        <Container
          display='flex'
          flexDirection='column'
        >
          {children}
        </Container>
      <AiFillStar size='25px' color="var(--medium-blue)"/>
    </Container>
  );
}

function FoodItemList(props){
  const {children} = props
  const foodSection = props.foodItem;
  const foodArray = props.foodArray;

  const menuSection = foodArray.map((foodItem) =>
    <div className={styles.foodItemContainer} key={foodItem.id}>
      <div className={styles.foodItem}>
        <Heading size='sm'>{foodItem.item}({foodItem.itemInEnglish})</Heading>
      </div>
      <div className={styles.menuItemDescription}><Text pl={2}>{foodItem.descriptionInEnglish}</Text></div>
    </div>
  );
  return(
    <div data-aos='fade-up' className={styles.foodSectionGridBox}>
      <div className={styles.foodType} >
        <AiFillStar size='30px' color={"var(--medium-blue)"}/><Heading size='lg' >{foodSection}</Heading>
      </div>
      {menuSection}
      {children}
    </div>
  );
}
