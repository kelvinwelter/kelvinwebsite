import * as React from 'react';
import { graphql } from 'gatsby';
import Navbar from '../../components/Navbar';
import BlogpostCard from '../../components/BlogpostCard';
import { Center, Flex, Heading } from '@chakra-ui/react';

const PostsPage = ({ data }) => {
  return (
    <Flex as="main" direction="column">
      <Navbar/>
      <Center maxW="48rem" flexGrow={1} flexDirection="column" alignSelf="center" paddingX={4}>
        <Heading>Posts</Heading>
        {
          data.allMdx.nodes.map((node) => (
            <BlogpostCard node={node} />
          ))  
        }
      </Center>
    </Flex>
  )
}

export const query = graphql`
    query getPosts {
        allMdx(sort: {fields: frontmatter___date, order: DESC}) {
            nodes {
                frontmatter {
                    date(formatString: "MMMM D, YYYY")
                    title
                    preview
                }
                id
                slug
            }
        }
    }
`;

export default PostsPage;