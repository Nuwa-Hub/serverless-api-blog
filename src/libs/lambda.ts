import middy from '@middy/core';

export const middyfy = (handler) => {
    return middy(handler);
    // .use(middleware);
};

