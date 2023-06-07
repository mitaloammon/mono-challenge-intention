import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IntentionService } from './intention.service';

import { CreateIntentionDto } from './dto/create-intention.dto';
import { UpdateIntentionDto } from './dto/update-intention.dto';

@Controller('intention')
export class IntentionController {
  constructor(private readonly intentionService: IntentionService) {}

  @Post()
  create(@Body() createIntentionDto: CreateIntentionDto) {
    return this.intentionService.create(createIntentionDto);
  }

  @Get()
  findAll() {
    return this.intentionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.intentionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIntentionDto: UpdateIntentionDto) {
    return this.intentionService.update(+id, updateIntentionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.intentionService.remove(+id);
  }
}
