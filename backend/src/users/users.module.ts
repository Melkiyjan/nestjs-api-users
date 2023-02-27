import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "../entities/user.entity";
import { UserService } from './servises/user/user.service';
import { UserResolver } from './resolves/user/user.resolver';

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity])],
    providers: [UserService, UserResolver]
})
export class UsersModule {}
