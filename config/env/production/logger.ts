import { winston } from '@strapi/logger';

export default () => ({
  transports: [
    new winston.transports.Console({
      level: 'error',
    }),
  ],
});
