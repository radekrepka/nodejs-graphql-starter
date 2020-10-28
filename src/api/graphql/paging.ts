import { gql, IResolvers } from 'apollo-server-express';

const schema = gql`
  type PageInfo {
    hasNextPage: Boolean!
    hasPreviousPage: Boolean!
    startCursor: String
    endCursor: String
  }

  interface NodeEdge {
    node: Node!
    cursor: String!
  }

  interface NodeConnection {
    edges: [NodeEdge!]!
    pageInfo: PageInfo!
  }
`;

const resolvers: IResolvers = {
  NodeEdge: {
    __resolveType: (nodeEdge: object): string => {
      return typeof nodeEdge;
    },
  },
  NodeConnection: {
    __resolveType: (nodeConnection: object): string => {
      return typeof nodeConnection;
    },
  },
};

export default {
  schema,
  resolvers,
};
