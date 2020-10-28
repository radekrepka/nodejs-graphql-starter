import { normalizePort } from './utils';

export enum Environment {
  production = 'production',
  development = 'development',
}

const config = {
  port: normalizePort(process.env.PORT),
  accessControlAllowOrigin: process.env.ACCESS_CONTROL_ALLOW_ORIGIN || '*',
  environment: process.env.ENVIRONMENT || Environment.production,
  routes: {
    graphql: '/graphql',
  },
};

export default config;
