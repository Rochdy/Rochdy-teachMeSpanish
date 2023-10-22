# Teach me spanish

An app that sends me WhatsApp messages teaching me a random Spanish word every day with its meaning.
A full article explaining this app: [https://blog.roshdy.dev/i-wrote-an-aws-lambda-function-to-teach-me-spanish](https://blog.roshdy.dev/i-wrote-an-aws-lambda-function-to-teach-me-spanish)


![](https://cdn.hashnode.com/res/hashnode/image/upload/v1698010595799/5c6dd7da-7708-4c7f-aaec-1d182e6740f6.png)

### Used AWS Services

- `EventBridge` to manage triggering the lambda function
- `Lambda` to build the function that do the logic


### Used Tools

- The serverless framework
- NodeJS/Typescript
- paunovic/random-words to generate random spanish word
- bing-translate-api to translate the word
- Twilio to send the whatsapp message


### To setup

- This built using serverless framework, so Just `npm i` then `sls deploy`, and don't forget to add the api keys & provider infos