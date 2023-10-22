import { AWS } from '@serverless/typescript';

const functions: AWS['functions'] = {
    teach: {
        handler: "src/functions/teach/index.handler",
        events: [
            {
                schedule: {
                    rate: ["rate(1 day)"]
                 }
            }
        ]
    }
}

export default functions;