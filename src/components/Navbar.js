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
            <IconButton icon={<FiGithub />} />
            <IconButton icon={<FiLinkedin />} />
            <IconButton icon={<FiMail />} />
        </ButtonGroup>
    </Flex>
)

export default Navbar;
