import { Module } from '@nestjs/common';
import { PubController } from './pub.controller';
import { PubService } from './pub.service';
// Config
import { ConfigModule } from './../../config/config.module';
import { LoggerService } from '../logger/logger.service';

@Module({
  imports: [ConfigModule],
  controllers: [PubController],
  providers: [PubService, LoggerService]
})
export class PubModule {}
