import { Injectable } from '@nestjs/common';
import { CreateIntentionDto } from './dto/create-intention.dto';
import { UpdateIntentionDto } from './dto/update-intention.dto';
import { IntentionRepository } from './repositories/intentions.repositories';

@Injectable()
export class IntentionService {
  constructor(private repository: IntentionRepository) {}

  async create(createIntentionDto: CreateIntentionDto) {
    try {
      return await this.repository.create(createIntentionDto);
    } catch (error) {
      console.error('Error', error);
    }
  }

  async findAll() {
    return await this.repository.findAll();
  }

  async findOne(id: number) {
    return await this.repository.findOne(id);
  }

  async update(id: number, updateIntentionDto: UpdateIntentionDto) {
    return `This action updates a #${id} intention`;
  }

  async remove(id: number) {
    return `This action removes a #${id} intention`;
  }

}

