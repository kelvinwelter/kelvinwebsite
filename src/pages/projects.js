import * as React from 'react';
import { graphql } from 'gatsby';
import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';
import { Center, Flex, Heading, Text } from '@chakra-ui/react';

const ProjectsPage = ({ data }) => {
  return (
    <Flex as="main" direction="column">
      <Navbar/>
      <Center maxW="48rem" flexGrow={1} flexDirection="column" alignSelf="center" paddingX={4}>
        <Heading>Projects</Heading>
        {
          data.allMdx.nodes.map((node) => (
            <ProjectCard node={node} />
          ))  
        }
      </Center>
    </Flex>
  )
}

export const query = graphql`
    query {
        allMdx(sort: {fields: frontmatter___date, order: DESC}, filter: {fileAbsolutePath: {regex: "/content/projects/"}}) {
            nodes {
                frontmatter {
                    title
                    preview
                    link
                }
                id
            }
        }
    }
`;

export default ProjectsPage;