import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { Intention } from '../entity/intention';
import { IntentionInput } from '../types/IntentionInput';
import { IntentionResponse } from '../types/IntentionResponse';
import { IntentionRepository } from '../repository/IntentionRepository';
import { getCustomRepository } from 'typeorm';

@Resolver()
export class IntentionResolver {
  private intentionRepository: IntentionRepository;

  constructor() {
    this.intentionRepository = getCustomRepository(IntentionRepository);
  }

  @Query(() => [Intention])
  async intentions(): Promise<Intention[]> {
    return this.intentionRepository.find();
  }

  @Mutation(() => IntentionResponse)
  async createIntention(
    @Arg('intention') intention: IntentionInput
  ): Promise<IntentionResponse> {
    const newIntention = this.intentionRepository.create(intention);
    const savedIntention = await this.intentionRepository.save(newIntention);

    return {
      success: true,
      message: 'Intention created successfully',
      intention: savedIntention,
    };
  }
}