import * as React from 'react';
import Navbar from '../components/Navbar';
import { Center, Flex, Heading, Text } from '@chakra-ui/react';

const AboutPage = () => {
  return (
    <Flex as="main" direction="column">
      <Navbar/>
      <Center maxW="48rem" flexGrow={1} flexDirection="column" alignSelf="center" paddingX={4}>
        <Heading mb={8}>I am always learning, always discovering</Heading>
        <Text mb={4}>
          Hello, I'm Kelvin! I help build fast, elegant, and innovative software.
          I have been working for over three years developing Javascript-based software (Node.js, React.js, and React Native). 
          Furthermore, I recently completed my bachelor's degree in computer science at the State University of Santa Catarina.
        </Text>
        <Text mb={4}>
          I was born and raised in Brazil π§π·, but I have already had experiences working remotely with American companies πΊπΈ.
          Until now, all my work experience has been based in startups. 
          I love the environment and culture of startups, the pace of work, the feeling of creation and innovation in these companies. 
          All this motivates me to keep working in this environment, collaborating and innovating to achieve the best possible result.
        </Text>
        <Text mb={4}>
          I live life knowing that our time is limited and wanting to make the most of it.
          I enjoy life learning more about software engineering, blockchains, management, cryptocurrencies, business, and so on. 
          I am constantly learning and studying, even following this confusing and chaotic line on various topics
        </Text>
        <Text mb={4}>
          Besides living my life trying to gather as much knowledge as possible, I live a life full of hobbies. 
          My main hobby is tourism; I love to travel. 
          The feeling of getting to know new places, exploring the unknown, and discovering as much of our planet as possible is priceless to me. 
          Currently, the best trip of my life was to Porto de Galinhas. 
          Let's see what the future holds.
        </Text>
        <Text mb={4}>
          Other than traveling, I love to read books, ride my bike, work out, play video games, and watch movies, not necessarily in this order.
        </Text>
        <Text mb={4}>
          Well, I guess that's a good summary of who I am. 
          Finally, I would like to mention my challenge with myself. 
          I've heard about the #LearnInPublic concept in the last few months. 
          It's about the habit of creating and publishing content about what I'm currently learning. 
          With that in mind, I challenged myself to build this habit. 
          I believe it is a positive attitude, both for the community and me.
          So I will use this website for publishing content about what I am learning at the moment. 
          I very much hope that I will succeed in building this habit. 
          It is time to get out of "learn in private"!
        </Text>
      </Center>
    </Flex>
  )
}

export default AboutPage;