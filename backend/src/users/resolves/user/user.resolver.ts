import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserService } from "../../servises/user/user.service";
import { UserEntity } from "../../../entities/user.entity";
import { CreateUserInput } from "../../inputs/create-user.input";


@Resolver('User')
export class UserResolver {
    constructor(
        private readonly userService: UserService,
    ) {
    }

    @Mutation(() => UserEntity)
    async createUser(@Args('createUser') createUserInput: CreateUserInput): Promise<UserEntity> {
        return await this.userService.createUser(createUserInput);
    }

    @Query(() => UserEntity)
    async getOneUser(@Args('id') id: string): Promise<UserEntity> {
        return await this.userService.getOneUser(id)
    }

    @Query(() => UserEntity)
    async getAllUsers(): Promise<UserEntity[]> {
        return await this.userService.getAllUsers()
    }
}