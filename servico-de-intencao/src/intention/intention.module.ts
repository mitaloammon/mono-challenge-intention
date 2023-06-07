import { Module } from '@nestjs/common';
import { IntentionService } from './intention.service';
import { IntentionController } from './intention.controller';

import { PrismaService } from '../modules/prisma/prisma.service';
import { IntentionRepository } from './repositories/intentions.repositories';

@Module({
  controllers: [IntentionController],
  providers: [IntentionService, IntentionRepository, PrismaService]
})
export class IntentionModule {}
