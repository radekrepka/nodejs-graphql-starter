import { gql, IResolvers } from 'apollo-server-express';

const schema = gql`
  type Foo {
    id: String
  }

  type Query {
    foo: Foo
  }
`;

const resolvers: IResolvers = {
  Query: {
    foo: () => {
      id: 'id';
    },
  },
};

export default {
  schema,
  resolvers,
};
