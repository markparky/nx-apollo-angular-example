import { NgModule } from '@angular/core';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import {
  ApolloClientOptions,
  ApolloLink,
  InMemoryCache,
} from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { setContext } from '@apollo/client/link/context';

const uri = 'http://localhost:3333/graphql'; // <-- add the URL of the GraphQL server here
export function createApollo(httpLink: HttpLink): {
  link: ApolloLink;
  cache: InMemoryCache;
} {
  const auth = setContext(() => {
    return {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json; charset=utf-8',
      },
    };
  });

  const link = ApolloLink.from([auth, httpLink.create({ uri })]);

  return {
    link: link,
    cache: new InMemoryCache(),
  };
}
// export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
//   return {
//     link: httpLink.create({ uri }),
//     cache: new InMemoryCache(),
//     headers: {
//       'Access-Control-Allow-Origin': '*',
//       'Content-Type': 'application/jsonshit',
//     },
//   };
// }

// export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
//   return {
//     link: httpLink.create({uri}),
//     cache: new InMemoryCache(),
//   };
// }

@NgModule({
  exports: [ApolloModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}

// import {NgModule} from '@angular/core';
// import {ApolloModule, APOLLO_OPTIONS} from 'apollo-angular';
// // import {HttpLinkModule} from 'apollo-angular/http/http-link'
// import { HttpLink } from 'apollo-angular/http';
// import { InMemoryCache } from '@apollo/client/core';

// const uri = 'http://localhost:3333/graphql'; // <-- add the URL of the GraphQL server here
// export function createApollo(httpLink: HttpLink) {
//   return {
//     link: httpLink.create({uri}),
//     cache: new InMemoryCache(),
//   };
// }

// @NgModule({
//   exports: [ApolloModule],
//   providers: [
//     {
//       provide: APOLLO_OPTIONS,
//       useFactory: createApollo,
//       deps: [HttpLink],
//     },
//   ],
// })
// export class GraphQLModule {}
