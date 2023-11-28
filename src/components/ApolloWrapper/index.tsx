"use client";

import {
  ApolloLink,
  HttpLink,
} from "@apollo/client";

import {
  ApolloNextAppProvider,
  NextSSRApolloClient,
  NextSSRInMemoryCache,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr";

function makeClient() {
  const httpLink = new HttpLink({
    headers:{
      authorization: `Bearer ${process.env.CONTENTFUL_API_KEY}`,
    },
    uri: `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
  });

  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    connectToDevTools: true,
    link:
      typeof window === "undefined"
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true,
            }),
            httpLink,
          ])
        : httpLink,
  });
}

function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}

export default ApolloWrapper
