import { forEach } from 'lodash';
import DataLoader from 'dataloader';

export interface DataLoaders {
  clearAll(): void;
}

export const createDataLoaders = (): DataLoaders => {
  const dataLoaders = {};

  const methods = {
    clearAll: () => {
      forEach(dataLoaders, (dataLoader: DataLoader<unknown, unknown>) => {
        dataLoader.clearAll();
      });
    },
  };

  return {
    ...dataLoaders,
    ...methods,
  };
};
