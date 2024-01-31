// src/application/getJediTranslateService.ts
import {SwapiAdapter} from '../infrastructure/adapters/SwapiAdapter';

const getJediTranslateService = async () => {
  return SwapiAdapter.getJediData();
};

export default getJediTranslateService;
