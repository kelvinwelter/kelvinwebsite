import * as React from 'react';
import Navbar from '../components/Navbar';
import { Center, Flex, Heading, Text } from '@chakra-ui/react';

const ProjectsPage = () => {
  return (
    <Flex as="main" direction="column">
      <Navbar/>
      <Center maxW="48rem" flexGrow={1} flexDirection="column" alignSelf="center">
        <Heading mb={8}>Projects</Heading>
        <Text>Coming soon 👀</Text>
      </Center>
    </Flex>
  )
}

export default ProjectsPage;