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

const internalLinks = ['Home', 'Projects', 'Posts', 'About'];
const externalLinks = ['Github', 'LinkedIn', 'Email'];

const iconsMap = {
    'Home': <FiHome />,
    'Projects': <FiCode />,
    'Posts': <FiFile />,
    'About': <FiUser />,
    'Github': <FiGithub />,
    'LinkedIn': <FiLinkedin />,
    'Email': <FiMail />,
}

const internalLinksMap = {
    'Home': '/',
    'Projects': '/projects',
    'Posts': '/posts',
    'About': '/about',
}

const externalLinksMap = {
    'Github': 'https://github.com/kelvinwelter',
    'LinkedIn': 'https://www.linkedin.com/in/kelvinwelter/',
    'Email': 'mailto:kelvinwelter.b@gmail.com',
}

const labelsMap = {
    'Github': 'Open Github',
    'LinkedIn': 'Open LinkedIn',
    'Email': 'Send email',
}

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
                    {internalLinks.map((link) => (
                        <Link to={internalLinksMap[link]}>
                            <Button>
                                {link}
                            </Button>
                        </Link>    
                    ))}
                </ButtonGroup>
                <Spacer />
                <ButtonGroup colorScheme="blackAlpha" variant="ghost" spacing="4" display={{ base: 'none', md: 'inline-flex' }}>
                    {externalLinks.map((link) => (
                        <a aria-label={labelsMap[link]} href={externalLinksMap[link]}><IconButton icon={iconsMap[link]}/></a>    
                    ))}
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
                            {internalLinks.map((link) => (
                                <Link to={internalLinksMap[link]}>
                                    <Button leftIcon={iconsMap[link]}>
                                        {link}
                                    </Button>
                                </Link>    
                            ))}
                        </ButtonGroup>
                        <Divider my={2} />
                        <ButtonGroup flexDirection="column" colorScheme="blackAlpha" variant="ghost" spacing={0}>
                            {externalLinks.map((link) => (
                                <a aria-label={labelsMap[link]} href={externalLinksMap[link]}>
                                    <Button leftIcon={iconsMap[link]}>
                                        {link}
                                    </Button>    
                                </a>    
                            ))}
                        </ButtonGroup>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}
  

export default Navbar;
