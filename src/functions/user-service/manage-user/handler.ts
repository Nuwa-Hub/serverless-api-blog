import 'reflect-metadata';
import { ApolloServer } from '@apollo/server';
import { handlers, startServerAndCreateLambdaHandler } from '@as-integrations/aws-lambda';
import { buildSchemaSync } from 'type-graphql';
import { middyfy } from '@libs/lambda';
import { ManageUserResolver } from './resolvers/user.resolver';

const schema = buildSchemaSync({
    resolvers: [ManageUserResolver],
    validate: false,
});

const server = new ApolloServer({
    schema,
});

export const main = middyfy(
    startServerAndCreateLambdaHandler(server, handlers.createALBEventRequestHandler())
);
