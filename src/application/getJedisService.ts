// src/application/getJedisService.ts
import JediRepository from '../domain/repositories/JediRepository';

const getJedisService = async () => {
  return JediRepository.getAllJedis();
};

export default getJedisService;
