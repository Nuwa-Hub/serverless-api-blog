import { handlerPath } from '@libs/handler-resolver';

export default {
    handler: `${handlerPath(__dirname)}/handler.main`,
    events: [
        {
            http: {
                method: 'any',
                path: 'manage-user',
            },
        },
    ],
};
