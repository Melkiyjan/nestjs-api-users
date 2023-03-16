import { Controller, Post, Body, Get } from '@nestjs/common';

import { UserResolver } from "../resolves/user/user.resolver";
import { UserEntity } from "../../entities/user.entity";
import { CreateUserInput } from "../inputs/create-user.input";


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
