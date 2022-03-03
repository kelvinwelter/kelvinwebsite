import React from 'react';
import { FiGithub, FiLinkedin, FiMail} from 'react-icons/fi';
import { Link } from 'gatsby';
import { 
    Button,
    ButtonGroup,
    Flex,
    IconButton,
    Spacer,
} from '@chakra-ui/react';

const Navbar = (props) => (
    <Flex 
        as="nav"
        padding={4}
        {...props}
    >
        <ButtonGroup colorScheme="blackAlpha" variant="ghost" spacing="4">
            <Link to='/'>
                <Button>
                    Home
                </Button>
            </Link>
            <Link to='/projects'>
                <Button>
                    Projects
                </Button>
            </Link>
            <Link to='/posts'>
                <Button>
                    Posts
                </Button>
            </Link>
            <Link to='/about'>
                <Button>
                    About
                </Button>
            </Link>
        </ButtonGroup>
        <Spacer />
        <ButtonGroup colorScheme="blackAlpha" variant="ghost" spacing="4">
            <a aria-label='Open Github' href='https://github.com/kelvinwelter'><IconButton icon={<FiGithub />} /></a>
            <a aria-label="Open LinkedIn" href='https://www.linkedin.com/in/kelvinwelter/'><IconButton icon={<FiLinkedin />} /></a>
            <a aria-label="Send email" href='mailto:kelvinwelter.b@gmail.com'><IconButton icon={<FiMail />} /></a>
        </ButtonGroup>
    </Flex>
)

export default Navbar;
