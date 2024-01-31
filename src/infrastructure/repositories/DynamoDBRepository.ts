// src/infrastructure/repositories/DynamoDBRepository.ts
import DynamoDBAdapter from '../adapters/DynamoDBAdapter';

const tableName = 'StarWarsTable';

const DynamoDBRepository = {
  addJedi: async (newJedi: any) => {
    await DynamoDBAdapter.putItem(tableName, newJedi);
  },

  getAllJedis: async () => {
    return DynamoDBAdapter.scanItems(tableName);
  },
};

export default DynamoDBRepository;
