import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
@Entity('users')
export class UserEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Field()
    @Column()
    firstName:string

    @Field()
    @Column()
    lastName: string

    @Field()
    @Column({unique: true})
    email: string

    @Field()
    @Column()
    password: string
}