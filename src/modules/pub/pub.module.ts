import { Module } from '@nestjs/common';
import { PubController } from './pub.controller';
import { PubService } from './pub.service';

@Module({
  controllers: [PubController],
  providers: [PubService]
})
export class PubModule {}
