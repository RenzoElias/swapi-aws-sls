// src/domain/repositories/JediRepository.ts
import DynamoDBRepository from '../../infrastructure/repositories/DynamoDBRepository';

const JediRepository = {
  addJedi: async (newJedi: any) => {
    await DynamoDBRepository.addJedi(newJedi);
  },

  getAllJedis: async () => {
    return DynamoDBRepository.getAllJedis();
  },
};

export default JediRepository;
