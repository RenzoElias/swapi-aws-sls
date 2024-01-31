// src/interfaces/httpApiHandlers/getJedisHandler.ts
import { APIGatewayProxyHandler } from 'aws-lambda';
import getJedisService from '../../application/getJedisService';

export const handler: APIGatewayProxyHandler = async () => {
  try {
    const persons = await getJedisService();

    return {
      statusCode: 200,
      body: JSON.stringify({ persons }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal Server Error' }),
    };
  }
};
