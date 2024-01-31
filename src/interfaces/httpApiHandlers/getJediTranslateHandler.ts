// src/interfaces/httpApiHandlers/getJediTranslateHandler.ts
import { APIGatewayProxyHandler } from 'aws-lambda';
import getJediTranslateHandler from '../../application/getJediTranslateService';

export const handler: APIGatewayProxyHandler = async () => {
  try {
    const translatedData = await getJediTranslateHandler();

    return {
      statusCode: 200,
      body: JSON.stringify(translatedData),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal Server Error' }),
    };
  }
};
