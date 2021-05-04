import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PubModule } from './modules/pub/pub.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [PubModule, ConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
