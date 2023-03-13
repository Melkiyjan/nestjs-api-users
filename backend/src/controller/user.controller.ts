import { Controller, Post, Body, Get } from '@nestjs/common';

import { CreateUserInput } from "../users/inputs/create-user.input";
import { UserResolver } from "../users/resolves/user/user.resolver";
import { UserEntity } from "../entities/user.entity";

@Controller('user')
export class UserController {
    constructor(private readonly userResolver: UserResolver) {}

    @Post('/registration')
    async create(@Body() createUserInput: CreateUserInput): Promise<UserEntity> {
        return this.userResolver.createUser(createUserInput);
    }

    @Get('/users/list')
    async list(): Promise<UserEntity[]> {
        return this.userResolver.getAllUsers();
    }
}
