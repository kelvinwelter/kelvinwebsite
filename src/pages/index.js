import * as React from 'react';
import Navbar from '../components/Navbar';
import { Flex, Center, Text } from '@chakra-ui/react';

import '../styles/global.css';

const IndexPage = () => {
  return (
    <Flex as="main" direction="column">
      <Navbar/>
      <Center flexGrow={1}>
        <Text fontSize="5xl">Hey there! I'm <Text fontSize="6xl" color="blue">Kelvin Welter</Text></Text>
      </Center>
    </Flex>
  )
}

export default IndexPage;