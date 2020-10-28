import { formatError as originalFormatError, GraphQLError, GraphQLFormattedError } from 'graphql';

interface CustomGraphQLFormattedError extends GraphQLFormattedError {
  readonly type?: string;
}

export const formatError = (error: GraphQLError): CustomGraphQLFormattedError => {
  const originalFormattedError = originalFormatError(error);

  return Object.assign({}, originalFormattedError, {
    type: 'server_error',
  });
};
