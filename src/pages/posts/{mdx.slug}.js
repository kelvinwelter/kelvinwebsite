import * as React from 'react';
import { graphql } from 'gatsby'
import Navbar from '../../components/Navbar';
import MDXStyleProvider from '../../components/MDXStyleProvider';
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Box, Flex, Heading, Text } from '@chakra-ui/react';

const BlogPost = ({ data }) => {
    return (
        <Flex as="main" direction="column">
          <Navbar/>
          <Box p={4} maxW="48rem" flexGrow={1} flexDirection="column" alignSelf="center">
            <Heading as="h1" color="gray.700" textAlign="center">{data.mdx.frontmatter.title}</Heading>
            <Text pb={4} color="gray.500" fontSize="sm" textAlign="center">{data.mdx.frontmatter.date}</Text>
            <MDXStyleProvider>
              <MDXRenderer>
                {data.mdx.body}
              </MDXRenderer>
            </MDXStyleProvider>
          </Box>
        </Flex>
      )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        preview
      }
      body
    }
  }
`;

export default BlogPost