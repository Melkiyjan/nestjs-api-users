import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
@Entity('posts')
class PostEntity {
    @PrimaryGeneratedColumn('identity', {
        generatedIdentity: 'ALWAYS',
    })
    id: number;

    @Field()
    @Column()
    title: string;

    @Field()
    @Column()
    content: string;
}
