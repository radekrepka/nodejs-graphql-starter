import { makeExecutableSchema } from 'apollo-server-express';
import schemas from './graphql';
import { DocumentNode } from 'graphql';

export const createSchema = () => {
  const params = schemas.reduce(
    (acc, { schema, resolvers }) => {
      return {
        typeDefs: [...acc.typeDefs, schema],
        resolvers: { ...acc.resolvers, ...resolvers },
      };
    },
    { typeDefs: [] as DocumentNode[], resolvers: {} },
  );

  return makeExecutableSchema(params);
};
