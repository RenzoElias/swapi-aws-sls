// src/handlers.ts
import { handler as healthCheckHandler } from './interfaces/httpApiHandlers/healthCheckHandler';
import { handler as getJediTranslateHandler } from './interfaces/httpApiHandlers/getJediTranslateHandler';
import { handler as createJediHandler } from './interfaces/httpApiHandlers/createJediHandler';
import { handler as getJedisHandler } from './interfaces/httpApiHandlers/getJedisHandler';

export {
  healthCheckHandler,
  getJediTranslateHandler,
  createJediHandler,
  getJedisHandler,
};
