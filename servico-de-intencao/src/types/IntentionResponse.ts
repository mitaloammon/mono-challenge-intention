import { Field, ObjectType } from 'type-graphql';
import { Intention } from '../entity/intention';

@ObjectType()
export class IntentionResponse {
    @Field()
        success: boolean;

    @Field()
        message: string;

    @Field(() => Intention, { nullable: true })
        intention?: Intention;

    constructor(success: boolean, message: string, intention: Intention) {
        this.success = success;
        this.message = message;
        this.intention = intention;
    }
}