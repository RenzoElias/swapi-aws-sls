// src/infrastructure/adapters/DynamoDBAdapter.ts
import { DocumentClient } from 'aws-sdk/clients/dynamodb';

const dynamodb = new DocumentClient();

const DynamoDBAdapter = {
  putItem: async (tableName: string, item: any) => {
    await dynamodb.put({ TableName: tableName, Item: item }).promise();
  },

  scanItems: async (tableName: string) => {
    const result = await dynamodb.scan({ TableName: tableName }).promise();
    return result.Items;
  },
};

export default DynamoDBAdapter;
