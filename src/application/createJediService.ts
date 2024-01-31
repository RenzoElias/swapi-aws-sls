// src/application/createJediService.ts
import { v4 as uuidv4 } from 'uuid';
import JediRepository from '../domain/repositories/JediRepository';

const createJediService = async (jediData: any) => {
  const id = uuidv4();
  const fechaCreacion = Date.now();

  const newJedi = {
    id,
    fechaCreacion,
    ...jediData,
  };

  await JediRepository.addJedi(newJedi);

  return newJedi;
};

export default createJediService;
