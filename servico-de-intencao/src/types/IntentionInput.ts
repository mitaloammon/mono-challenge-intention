import { Field, InputType } from 'type-graphql';

@InputType()
export class IntentionInput {
    @Field()
        name: string = '';

    @Field(() => [String])
        products: string = '';

    @Field()
        address: string = '';
}
