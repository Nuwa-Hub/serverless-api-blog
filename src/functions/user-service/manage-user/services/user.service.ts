import { UserInputTypeDto } from "src/models/inputTypes/User.InputType.model";
import { UserRepository } from "../repositories/user.repository";


export class UserService {
    private readonly userRepository: UserRepository;
    constructor() {
        this.userRepository = new UserRepository();
    }
    public async createUser(User:UserInputTypeDto): Promise<UserInputTypeDto> {
        try {
            const newUser = await this.userRepository.createUser(User);
            return newUser;
        } catch (error) {
            console.log('error', error);
        }
    }
    public async fetchUsers(): Promise<[UserInputTypeDto]> {
        try {
            const users = await this.userRepository.fetchUsers();
            return users;
        } catch (error) {
            console.log('error', error);
        }
    }
}