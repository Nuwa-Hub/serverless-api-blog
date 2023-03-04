
import { getDatabaseConnection } from '@libs/db-connection';
import { User } from '@prisma/client';

export class UserRepository {
    private prisma = getDatabaseConnection();

    public async createUser(user: User): Promise<User> {
        return this.prisma.user.create({
            data: {
                ...user,
            },
        });
    }
    public async fetchUsers(): Promise<[User]> {
        return this.prisma.user.findMany();
    }
}
