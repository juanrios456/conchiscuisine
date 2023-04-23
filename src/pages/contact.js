import { Heading, Container, FormControl, FormLabel, Input, Textarea, FormErrorMessage, Button, Text, useToast, ButtonGroup, Wrap, WrapItem, Link} from "@chakra-ui/react";
import { sendContactForm } from "lib/api";
import styles from "../styles/contact.module.css";
import { useState } from 'react';
import { FaFacebook, FaWhatsappSquare } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { BsTelephoneFill } from 'react-icons/bs';

const initValues = {
  name: '',
  phone: '',
  email: '',
  subject: '',
  message: '',
};

const initState = {values: initValues};


export default function Contact(){
  return(
  <div>
    <ContactBody/>
    <ContactForm/>
    <SocialLinks/>
  </div>
  );
}

export function ContactBody(){
  return(
  <>
    <div className={styles.topSectionContainer}>
    <Container
      maxW="750px"
      py="45px"
      data-aos="fade-up"
    >
      <Heading textAlign="center" px="10px">Contact Us Today</Heading>
      <Text py="20px">
        If you are contacting for a catering order please provide as much information as
        possible about your event, including the amount of people attending the event, the location,
        and the date of the event. We will get back to you as soon as possible, Thank you.
      </Text>
      <Text py="20px">
        If you are interested in having Conchis Cuisine be a vendor for your event, please provide as
        much information as possible about the event name, location, date and contact information
        of who is in charge of the event. We will get back to you as soon as possible, Thank You.
      </Text>
      <Text py="20px" textAlign="center" fontSize="2xl" fontWeight="100">
        Feel free to reach out to us with any questions.
      </Text>
    </Container>
    </div>
  </>
  );
}
export function SocialLinks(){
  return(
    <>
      <div  className={styles.buttonsSectionContainer}>
        <Heading data-aos="fade-up" textAlign='center'>Follow Us</Heading>
          <div data-aos="fade-up" className={styles.buttonsContainer} >
            <div className={styles.buttonsBox}>
              <a href="https://www.facebook.com/conchiscuisine" target='_blank' rel="noreferrer">
                <Button
                  colorScheme='facebook'
                  leftIcon={<FaFacebook/>}
                  width="160px"
                >
                  Facebook
                </Button>
              </a>  
            </div>
            <div className={styles.buttonsBox}>
              <a href="https://wa.me/17859251692" target='_blank' rel="noreferrer" >
                <Button
                  colorScheme='whatsapp'
                  leftIcon={<FaWhatsappSquare/>}
                  width="160px"
                >
                  Whatsapp
                </Button>
              </a>
            </div>
            <div className={styles.buttonsBox}>
              <a href="mailto:conchiscuisine@gmail.com" target="_blank" rel="noreferrer">
                <Button
                  backgroundColor={'blue.400'}
                  leftIcon={<SiGmail/>}
                  width="160px"
                >
                  Email
                </Button>
              </a>
            </div>
            <div className={styles.buttonsBox}>
              <a href="tel:+17859251692">
                <Button
                  backgroundColor={'green.100'}
                  leftIcon={<BsTelephoneFill/>}
                  width="160px"
                >
                  Call us Today
                </Button>
              </a>
            </div>
          </div>
      </div>    
    </>
  );
}

export function ContactForm(){
  const toast = useToast();
  const [ state, setState ] = useState(initState);
  const [ touched, setTouched ] = useState({});

  const { values, isLoading, error } = state;

  const onBlur = ({target}) => setTouched((prev) => ({...prev,
    [target.name]:true
  }));

  const handleChange = ({target}) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,  
      },
  }));

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    
    try {
      await sendContactForm(values);
      setTouched({});
      setState(initState);
      toast({
        title:"Message Sent",
        status: "success",
        duration: 3000,
        position: "top",
      });
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }

  };

  return(
<>
  <div className={styles.contactFormContainer}>

    <Container 
      textAlign='center'
      fontSize='2xl'
      maxW='450px'
    >
      <Heading data-aos="fade-up">Contact</Heading>

      {error && (
        <Text color="red.300" my={4} fontSize="xl">
          {error}
        </Text>
      )}

      <FormControl data-aos="fade-up" isRequired mb="15px" isInvalid={touched.name && !values.name}>
        <FormLabel>Name</FormLabel>
        <Input
          bgColor="white"
          errorBorderColor="red.300"
          borderColor='gray.400'
          type='text'
          name='name'
          value={values.name}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>
      <FormControl isRequired data-aos="fade-up" mb="15px" isInvalid={touched.phone && !values.phone}>
        <FormLabel>Phone Number</FormLabel>
        <Input
          bgColor="white"
          errorBorderColor="red.300"
          borderColor='gray.400'
          type='number'
          name='phone'
          value={values.phone}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>
      <FormControl isRequired mb="15px" data-aos="fade-up" isInvalid={touched.email && !values.email}>
        <FormLabel>Email</FormLabel>
        <Input
          bgColor="white"
          errorBorderColor="red.300"
          borderColor='gray.400'
          type='email'
          name='email'
          value={values.email}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>
      <FormControl isRequired mb="15px" data-aos="fade-up" isInvalid={touched.subject && !values.subject}>
        <FormLabel>Subject</FormLabel>
        <Input
          bgColor="white"
          errorBorderColor="red.300"
          borderColor='gray.400'
          type='text'
          name='subject'
          value={values.subject}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>
      <FormControl isRequired mb='15px' data-aos="fade-up" isInvalid={touched.message && !values.message}>
        <FormLabel>Message</FormLabel>
        <Textarea
          bgColor="white"
          errorBorderColor="red.300"
          borderColor='gray.400'
          type='text'
          rows={4}
          name='message'
          value={values.message}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>
      <Button
        bgColor="white"
        variant='outline'
        isLoading={isLoading}
        colorScheme='blue'
        data-aos="fade-up"
        isDisabled={
          !values.name ||
          !values.phone ||
          !values.email ||
          !values.subject ||
          !values.message
        }
        onClick={onSubmit}
      >
      Submit
      </Button>
    </Container>
  </div>
</>
  );
}