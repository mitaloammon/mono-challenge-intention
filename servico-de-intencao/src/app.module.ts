import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { IntentionModule } from './intention/intention.module';
import { AppService } from './app.service';

@Module({
  imports: [IntentionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}