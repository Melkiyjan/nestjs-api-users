import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";

import { UserEntity } from "../entities/user.entity";
import { UserService } from './servises/user/user.service';
import { UserResolver } from './resolves/user/user.resolver';
import { UserController } from "./controller/user.controller";


@Module({
    imports: [TypeOrmModule.forFeature([UserEntity])],
    providers: [UserService, UserResolver],
    controllers: [UserController]
})
export class UsersModule {}
