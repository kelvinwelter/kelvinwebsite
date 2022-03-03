import React from 'react';
import { Link } from 'gatsby';
import { 
    FiGithub, 
    FiLinkedin, 
    FiMail, 
    FiMenu, 
    FiX, 
    FiHome, 
    FiCode, 
    FiFile, 
    FiUser 
} from 'react-icons/fi';
import { 
    Button,
    ButtonGroup,
    Divider,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    DrawerCloseButton,
    Flex,
    IconButton,
    Spacer,
    useDisclosure,
} from '@chakra-ui/react';

const Navbar = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Flex 
                as="nav"
                padding={4}
                {...props}
            >
                <Flex
                    flex={{ base: 1, md: 'auto' }}
                    ml={{ base: -2 }}
                    display={{ base: 'flex', md: 'none' }}
                >
                    <IconButton
                        onClick={onOpen}
                        icon={
                        isOpen ? <FiX w={3} h={3} /> : <FiMenu w={5} h={5} />
                        }
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                </Flex>

                <ButtonGroup colorScheme="blackAlpha" variant="ghost" spacing="4" display={{ base: 'none', md: 'inline-flex' }}>
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
                <ButtonGroup colorScheme="blackAlpha" variant="ghost" spacing="4" display={{ base: 'none', md: 'inline-flex' }}>
                    <a aria-label='Open Github' href='https://github.com/kelvinwelter'><IconButton icon={<FiGithub />} /></a>
                    <a aria-label="Open LinkedIn" href='https://www.linkedin.com/in/kelvinwelter/'><IconButton icon={<FiLinkedin />} /></a>
                    <a aria-label="Send email" href='mailto:kelvinwelter.b@gmail.com'><IconButton icon={<FiMail />} /></a>
                </ButtonGroup>
            </Flex>
            <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader />
                    <DrawerBody>
                        <DrawerCloseButton />
                        <Divider my={2} />
                        <ButtonGroup flexDirection="column" colorScheme="blackAlpha" variant="ghost" spacing={0}>
                            <Link to='/'>
                                <Button leftIcon={<FiHome />}>
                                    Home
                                </Button>
                            </Link>
                            <Link to='/projects'>
                                <Button leftIcon={<FiCode />}>
                                    Projects
                                </Button>
                            </Link>
                            <Link to='/posts'>
                                <Button leftIcon={<FiFile />}>
                                    Posts
                                </Button>
                            </Link>
                            <Link to='/about'>
                                <Button leftIcon={<FiUser />}>
                                    About
                                </Button>
                            </Link>
                        </ButtonGroup>
                        <Divider my={2} />
                        <ButtonGroup flexDirection="column" colorScheme="blackAlpha" variant="ghost" spacing={0}>
                            <a aria-label='Open Github' href='https://github.com/kelvinwelter'>
                                <Button leftIcon={<FiGithub />}>
                                    Github
                                </Button>
                            </a>
                            <a aria-label="Open LinkedIn" href='https://www.linkedin.com/in/kelvinwelter/'>
                                <Button leftIcon={<FiLinkedin />}>
                                    LinkedIn
                                </Button>
                            </a>
                            <a aria-label="Send email" href='mailto:kelvinwelter.b@gmail.com'>
                                <Button leftIcon={<FiMail />}>
                                    Email
                                </Button>
                            </a>
                        </ButtonGroup>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}
  

export default Navbar;
