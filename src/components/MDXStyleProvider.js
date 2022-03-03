import React from 'react';
import { MDXProvider } from "@mdx-js/react";
import { Link, Text } from '@chakra-ui/react';

export default function MDXStyleProvider({ children }) {
  return (
    <MDXProvider
      components={{
        a: props => <Link {...props} color="teal" isExternal/>,
        p: props => <Text {...props} color="gray.900" py={2}/>,
      }}
    >
      {children}
    </MDXProvider>
  )
}

