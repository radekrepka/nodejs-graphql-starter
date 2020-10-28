import { Request } from 'express';
import { createDataLoaders } from '../model/dataLoaders';

export const createRequestContext = (request: Request) => {
  return {
    request,
    dataLoaders: createDataLoaders(),
  };
};
