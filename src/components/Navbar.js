import React from 'react';
import { FiGithub, FiLinkedin, FiMail} from 'react-icons/fi';
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
                Home
            </Button>
            <Button>
                Projects
            </Button>
            <Button>
                Posts
            </Button>
            <Button>
                About
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
