import { APIGatewayProxyEvent } from 'aws-lambda';
import { initialize } from '@paunovic/random-words';

const { translate } = require('bing-translate-api');
const RANDOM = initialize({ countryCode: 'es' })
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

export const handler = async (event: APIGatewayProxyEvent) => {

    try {
        
        const word = RANDOM.word();
        const translation = await translate(word, 'es', 'en');
        const message = {
            from: `whatsapp:${process.env.TWILIO_SENDER}`,
            body: `Hola! 🙋 \nToday's word is: *${translation.text}* \nWhich means: *${translation.translation}*`,
            to: `whatsapp:${process.env.TWILIO_RECEIVER}`
        };
        
        await client.messages.create(message);

        console.log({
            word: translation.text,
            translation: translation.translation,
            message,
        });
    } catch (error) {
        console.log(error);
    }
};