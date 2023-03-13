import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "../../../entities/user.entity";
import { Repository } from "typeorm";
import { CreateUserInput } from "../../inputs/create-user.input";


@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
    ) {
    }

    async createUser(userInput: CreateUserInput): Promise<UserEntity> {
        const saltRounds = 10;
        const bcrypt = require('bcrypt');
        const hashedPassword = await bcrypt.hash(userInput.password, saltRounds);
        const user = this.userRepository.create({
            email: userInput.email,
            firstName: userInput.firstName,
            lastName: userInput.lastName,
            password: hashedPassword,
        });

        return await this.userRepository.save(user)
    }

    async getOneUser(id: string): Promise<UserEntity> {
        return await this.userRepository.findOneBy({ id })
    }

    async getAllUsers(): Promise<UserEntity[]> {
        return await this.userRepository.find()
    }
}
