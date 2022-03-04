import React from 'react';
import { Box, Center, Flex, Heading, Text, Stack } from '@chakra-ui/react';
import { 
    FiExternalLink 
} from 'react-icons/fi';

const ProjectCard = ({ node }) => (
    <Center py={6}>
        <a href={node.frontmatter.link}>
            <Box
                key={node.id} 
                maxW="440px" 
                w="full" 
                boxShadow="lg"
                rounded="md" 
                p={4} 
                bg="white"
                border="1px solid whitesmoke"
            >
                <Stack>
                <Flex justifyContent="space-between">
                    <Heading color="gray.700" fontSize={'2xl'}>
                        {node.frontmatter.title}
                    </Heading>
                    <FiExternalLink />
                </Flex>
                <Text color="gray.500">
                    {node.frontmatter.preview}
                </Text>
                </Stack>
            </Box>
        </a>
    </Center>
)

export default ProjectCard;
