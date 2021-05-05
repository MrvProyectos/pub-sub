import { HttpModule, Module } from '@nestjs/common';
// Config
import { Configuration } from './config/config.keys';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';

import { AppController } from './app.controller';
import { PubService } from './modules/pub/pub.service';
import { LoggerService } from './modules/logger/logger.service';

@Module({
  imports: [HttpModule, ConfigModule],
  controllers: [AppController],
  providers: [PubService, LoggerService],
})
export class AppModule {
  static port: number | string;

  constructor(private readonly _configservice: ConfigService) {
    AppModule.port = this._configservice.get(Configuration.PORT)
  }
}