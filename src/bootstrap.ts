import http from 'http';
import { createExpressApp } from './api/createExpressApp';
import config from './config';
import { createGraphqlServer } from './api/graphqlServerFactory';

const init = () => {
  const expressApp = createExpressApp(config.port);
  const server = http.createServer(expressApp);
  const graphqlServer = createGraphqlServer();

  graphqlServer.installSubscriptionHandlers(server);
  graphqlServer.applyMiddleware({
    app: expressApp,
    path: config.routes.graphql,
  });

  server.listen(config.port);
};

init();
console.log(`Server listening on port ${config.port}`);
