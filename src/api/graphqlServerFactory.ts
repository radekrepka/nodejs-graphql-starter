import { ApolloServer } from 'apollo-server-express';
import { GraphQLError } from 'graphql';
import { createSchema } from './schemaFactory';
import { formatError } from './graphQlErrorFormatter';
import { createRequestContext } from './requestContextFactory';
import config, { Environment } from '../config';

export const createGraphqlServer = () => {
  const schema = createSchema();

  return new ApolloServer({
    schema,
    context: ctx => createRequestContext(ctx.req),
    formatError: (error: GraphQLError) => formatError(error),
    debug: config.environment === Environment.development,
    playground: config.environment === Environment.development,
  });
};
