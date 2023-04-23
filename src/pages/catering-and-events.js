import { Card, useDisclosure, CardHeader, CardFooter, CardBody, Button, Container, Heading, Text, UnorderedList, ListItem, ListIcon, List, Divider, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from '@chakra-ui/react';
import styles from '../styles/CandE.module.css';
import wideImage from "../../public/index-images/index-top-image.png";
import trompoImage from "../../public/index-images/trompo-image.png";
import section3bg from "../../public/backgrounds/Untitled-6.png";
import plate from "../../public/plate.png";
import foodTruck from "../../public/gallery/events/food-truck.png";
import tacosImage from "../../public/gallery/food/tacos-square.png";
import cookingImage from "../../public/gallery/events/cooking-at-event.png";
import Image from 'next/image';
import Link from 'next/link';
import {MdCheckCircle} from 'react-icons/md';
import {GiTacos} from 'react-icons/gi';
import { useRef } from 'react';


export default function Page(){
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef(null)

  const events = [
  //  {
  //    title: 'Fiesta Mexicana',
  //    date: '1/1/23',
  //    location: '1422 SW. Tyler St.',
  //    description: 'Celebration performed annually in Topeka, Kansas in the Oakland area.',
  //    id: 1,
  //  },
    {
      id: 1,
      title: 'Lowman Hill Fundraiser',
      date: '4/28/23',
      location: '1101 SW Garfield Ave, Topeka, KS 66604',
      description: 'Fundraiser event at lowman hill elementary school',
    },
    {
      id: 2,
      title: 'Downtown Emporia',
      date: '4/29/23',
      location: 'Downtown 15th and commercial Emporia, KS',
      description: 'Farmers market that goes on a couple blocks in downtown Emporia',
    },
    {
      id: 3,
      title: 'Frito Lay',
      date: '5/3/23',
      location: 'Frito Lay Co. Topeka, KS.',
      description: 'We will be serving lunch for the employees of Frito Lay',
    },
    {
      id: 4,
      title: 'La Plasita',
      date: '5/6/23',
      location: 'Unknown',
      description: 'Not Sure',
    },
  ];



  return(
    <div className={`${styles.bodyContainer}`}>
      <div className={styles.topBannerContainer}>
<svg className={styles.firstSVG} id="visual" viewBox="0 0 1500 750" xmlns="http://www.w3.org/2000/svg"  version="1.1"><rect x="0" y="0"  fill="#f2f2f2"></rect><path d="M0 250L214 352L429 343L643 318L857 254L1071 216L1286 281L1500 348L1500 801L1286 801L1071 801L857 801L643 801L429 801L214 801L0 801Z" fill="#fe4141"></path><path d="M0 423L214 378L429 448L643 365L857 369L1071 391L1286 433L1500 412L1500 801L1286 801L1071 801L857 801L643 801L429 801L214 801L0 801Z" fill="#ff7226"></path><path d="M0 537L214 508L429 481L643 486L857 499L1071 425L1286 552L1500 532L1500 801L1286 801L1071 801L857 801L643 801L429 801L214 801L0 801Z" fill="#ff9d00"></path><path d="M0 585L214 569L429 639L643 595L857 564L1071 601L1286 574L1500 632L1500 801L1286 801L1071 801L857 801L643 801L429 801L214 801L0 801Z" fill="#ffc700"></path><path d="M0 688L214 678L429 656L643 648L857 647L1071 643L1286 641L1500 690L1500 801L1286 801L1071 801L857 801L643 801L429 801L214 801L0 801Z" fill="#f5f107"></path></svg>
        <div className={styles.headerImageContainer}>
          <Image
            src={foodTruck}
            width='auto'
            height='auto'
            className={styles.headerImage}
            alt='events-image'
            data-aos='fade-up'
          />
        </div>
        <Container>
          <div className={styles.headerPlateContainer}>
            <Image
              src={plate}
              alt='plate'
              width='100%'
              height='100%'
              className={styles.headerPlate}
            />
          <Heading backgroundColor='#fffff5' borderRadius='2xl' textAlign='center' className={styles.headerPlateItem}>Events / Catering Information </Heading>
          <Image
            src={tacosImage}
            alt='Trompo sitting on the spinning plate'
            width='100%'
            height='100%'
            className={styles.headerPlateItem2}
            style={{ borderRadius: '100%'}}
          />
          </div>
        </Container>
      </div>
      <div className={`${styles.container1}`}   >
        <div className={styles.section1}  >
          <Container py={10} data-aos='fade-up'>
            <Heading size='2xl' textAlign='center' pb={3}>Events Schedule</Heading>
            <Text fontSize={'lg'}>
              Below is the list of upcoming events we will be attending. To view
              more information about the event, location, or the food menu for the event click &quot;Read More&quot;
            </Text>
          </Container>
          <div className={styles.eventListGrid}>
            {events.map((event) =>(
              <Container data-aos='fade-up' display='flex' justifyContent='center' key={event.id}>
                  <Card w={{sm: '300px'}} borderRadius='15px'>
                    <CardHeader>
                      <Heading size='md' textAlign={'center'}>{event.title}</Heading>
                    </CardHeader>
                    <Divider/>
                    <CardBody py={'10px'}>
                      <List >
                        <ListItem><ListIcon as={MdCheckCircle} color='green.500' />Event Date: <Text display={'inline'} fontWeight={'semibold'}>{event.date}</Text></ListItem>
                        <ListItem><ListIcon as={MdCheckCircle} color='green.500' />Event Address: <Text display={'inline'} fontWeight={'semibold'}>{event.location}</Text></ListItem>
                      </List>
                      <Text pt={3}>{event.description}</Text>
                    </CardBody>
                    <CardFooter justifyContent={'center'}  >
                    {
                    //  <Button onClick={onOpen} ref={btnRef}>Read More</Button>
                    //  <Modal
                    //    onClose={onClose}
                    //    finalFocusRef={btnRef}
                    //    isOpen={isOpen}
                    //    scrollBehavior='outside'
                    //  >
                    //    <ModalOverlay
                    //      bg='blackAlpha.500'
                    //    />
                    //    <ModalContent>
                    //      <ModalHeader>Testing 1 2 3</ModalHeader>
                    //      <ModalCloseButton/>
                    //      <ModalBody>Pfiat di! Das ausgemergelt Ganove. Augenweide und Affenzahn schlampampen pompös Schluckspecht. Die fatal Absacker bemuttern. Der halbstark Früchtchen foppen. Die Dachshund bauchpinseln der garstig Luder. Groschengrab und Damenbart katzbuckeln halbstark Tölpel. Das Kinkerlitzchen meucheln der hurtig Sauerkraut. Das blümerant Panzerkampfwagen. Die stramm Augenweide bohnern. Der famos Mettigel. Der halbstark Unsitte. Das Kaffeekränzchen bemuttern das halbstark Quacksalber. Habe die Ehre!</ModalBody>
                    //      <ModalFooter>
                    //        <Button colorScheme='blue' onClick={onClose}>Close</Button>
                    //      </ModalFooter>
                    //    </ModalContent>
                    //  </Modal>
                    }
                    </CardFooter>
                  </Card>
              </Container>
            ))}
          </div>
        </div>
      </div>
      <div className={`${styles.container2}`}>
          <Heading pb={10} textAlign={'center'} size={'2xl'}>Events</Heading>
        <div className={styles.eventsSection}>
          <Container display={'flex'} justifyContent={'center'}>
            <div className={styles.eventsImageContainer}>
            <Image
              src={cookingImage}
              width='auto'
              height='auto'
              className={styles.eventsImage}
              alt='events-image'
              data-aos='fade-up'
            />
            </div>
          </Container>
          <Container textAlign={'left'} fontWeight={'bold'} data-aos='fade-up' fontSize={'large'} >
            <Text className={styles.eventsTextPadding} >
              Currently our team participates in events such as festivals, parties, weddings,
              quinceanera, concerts, and any kind of celebration near the Topeka, Kansas area.
              although we do travel outside of the city.
            </Text>
            <Text pt={2}>
              Some events we have participated in, are...
            </Text>
            <UnorderedList listStyleType={'none'} py={6} >
              <ListItem><ListIcon as={GiTacos} color='brown' />Alma Hot Nights - Alma, KS.</ListItem>
              <ListItem><ListIcon as={GiTacos} color='brown' />Day of the dead festival - Kansas City, KS.</ListItem>
              <ListItem><ListIcon as={GiTacos} color='brown' />Rodeos</ListItem>
              <ListItem><ListIcon as={GiTacos} color='brown' />The UNBOUND Gravel Race - Emporia, KS.</ListItem>
            </UnorderedList>
            <Text>
              To book us for your upcoming event or have suggestions for upcoming events,
              click the button below and fill out the contact form with information
              regarding the event.
            </Text>
            <Container display={'flex'} justifyContent={'center'} pt={6} ><Link href='/contact'><Button variant={'ghost'} backgroundColor={'blue.300'} >Book an Event</Button></Link></Container>
          </Container>
        </div>
      </div>			
      <div className={`${styles.container3}`}>
        <Image src={section3bg} width={'auto'} height={'auto'} alt='Image background' className={styles.section3bg} />
        <Heading textAlign={'center'} size={'2xl'} pb={10}>Catering</Heading>
        <div className={styles.eventsSection}>
          <Container display={'flex'} justifyContent={'center'}>
            <div className={styles.eventsImageContainer}>
            <Image
              src={wideImage}
              width='auto'
              height='auto'
              className={styles.eventsImage}
              alt='events-image'
              data-aos='fade-up'
            />
            </div>
          </Container>
          <Container textAlign={'left'} fontWeight={'bold'} data-aos='fade-up' fontSize={'large'} >
            <Text className={styles.eventsTextPadding} >
              Our catering services offer many options to meet the needs of any events,
              wether it is for desserts, main courses, or both, we are here for you.
              We offer many packages ranging from food catering services, to pop-up-trucks
              and everything in between.
            </Text>
            <Text pt={2}>
              A few of our examples are...
            </Text>
            <UnorderedList listStyleType={'none'} py={6} >
              <ListItem><ListIcon as={GiTacos} color='brown' />Office Parties</ListItem>
              <ListItem><ListIcon as={GiTacos} color='brown' />Quinceañera</ListItem>
              <ListItem><ListIcon as={GiTacos} color='brown' />Weddings</ListItem>
              <ListItem><ListIcon as={GiTacos} color='brown' />Pop-Up Truck</ListItem>
            </UnorderedList>
            <Text>
              To book us for your upcoming event or have suggestions for upcoming events,
              click the button below and fill out the contact form with information
              regarding the event.
            </Text>
            <Container display={'flex'} justifyContent={'center'} pt={6} ><Link href='/contact'><Button variant={'ghost'} backgroundColor={'blue.300'} >Book an Event</Button></Link></Container>
          </Container>
        </div>
      </div>
    </div>
  );
}