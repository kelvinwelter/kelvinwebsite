import React from 'react';
import { Link } from 'gatsby';
import { Box, Center, Heading, Text, Stack } from '@chakra-ui/react';

const BlogpostCard = ({ node }) => (
    <Center py={6}>
        <Link to={`/posts/${node.slug}`}>
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
                <Heading color="gray.700" fontSize={'2xl'}>
                    {node.frontmatter.title}
                </Heading>
                <Text color="gray.500">
                    {node.frontmatter.preview}
                </Text>
                </Stack>
                <Text mt={4} fontSize="sm" spacing={0} color="gray.500">
                    Posted: {node.frontmatter.date}
                </Text>
            </Box>
        </Link>
    </Center>
)

export default BlogpostCard;
