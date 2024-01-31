// src/interfaces/httpApiHandlers/createJediHandler.ts
import { APIGatewayProxyHandler } from 'aws-lambda';
import createJediHandler from '../../application/createJediService';

export const handler: APIGatewayProxyHandler = async (event) => {
  try {
    const jediData = JSON.parse(event.body ?? '{}');

    const newJedi = await createJediHandler(jediData);

    return {
      statusCode: 200,
      body: JSON.stringify(newJedi),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal Server Error' }),
    };
  }
};
