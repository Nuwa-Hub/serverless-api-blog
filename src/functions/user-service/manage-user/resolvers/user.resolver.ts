/* eslint-disable @typescript-eslint/no-unused-vars */
import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { User } from "src/models/objectType/User";
import { UserInputTypeDto } from "src/models/inputTypes/User.InputType.model";
import { UserService } from "../services/user.service";

@Resolver()
export class ManageUserResolver {
  private readonly userService: UserService;

  constructor() {
    this.userService = new UserService();
  }
  /**
   * Get All users
   */
  @Query((_returns) => [User], { description: "Get All users" })
  async fetchAlluserss(): Promise<[User]> {
    return await this.userService.fetchUsers();
  }
  /**
   * Create new user
   */
  @Mutation(() => User, { description: "Create new User" })
  async createUser(
    @Arg("user", () => UserInputTypeDto) user: UserInputTypeDto
  ): Promise<User> {
    return await this.userService.createUser(user);
  }
}
