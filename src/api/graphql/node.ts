import { gql, IResolvers } from 'apollo-server-express';

const schema = gql`
  interface Node {
    id: ID!
  }
`;

const resolvers: IResolvers = {
  Node: {
    __resolveType: (node: object): string => {
      return typeof node;
    },
  },
};

export default {
  schema,
  resolvers,
};
