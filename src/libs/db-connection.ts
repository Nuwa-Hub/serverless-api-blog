import { PrismaClient } from "@prisma/client";

let dbDataSource = null;

export const getDatabaseConnection = () => {
    try {
        if (!dbDataSource) {
            dbDataSource = new PrismaClient();
            console.log('Database connection initialized');
        }
        return dbDataSource;
    } catch (error) {
        console.log({ error });
    }
};