import React from 'react';
import { FiGithub, FiLinkedin, FiMail} from 'react-icons/fi';
import { Link } from 'gatsby';
import { 
    Button,
    ButtonGroup,
    Flex,
    IconButton,
    Spacer
} from '@chakra-ui/react';

const Navbar = (props) => (
    <Flex 
        as="nav"
        padding={4}
        {...props}
    >
        <ButtonGroup colorScheme="blackAlpha" variant="ghost" spacing="4">
            <Button>
                <Link to='/'>
                    Home
                </Link>
            </Button>
            <Button>
                <Link to='/projects'>
                    Projects
                </Link>
            </Button>
            <Button>
                <Link to='/posts'>
                    Posts
                </Link>
            </Button>
            <Button>
                <Link to='/about'>
                    About
                </Link>
            </Button>
        </ButtonGroup>
        <Spacer />
        <ButtonGroup colorScheme="blackAlpha" variant="ghost" spacing="4">
            <IconButton icon={<FiGithub />} />
            <IconButton icon={<FiLinkedin />} />
            <IconButton icon={<FiMail />} />
        </ButtonGroup>
    </Flex>
)

export default Navbar;
