import { DocumentNode } from 'graphql';
import { IResolvers } from 'apollo-server-express';

import node from './node';
import paging from './paging';
import query from './query';

export interface PartialGraphqlSchemaDefinition {
  readonly schema: DocumentNode;
  readonly resolvers: IResolvers;
}

const schemaDefinitions: PartialGraphqlSchemaDefinition[] = [node, paging, query];

export default schemaDefinitions;
