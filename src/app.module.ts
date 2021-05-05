import { HttpModule, Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { PubModule } from './modules/pub/pub.module';
// Config
import { Configuration } from './config/config.keys';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';

@Module({
  imports: [HttpModule, PubModule, ConfigModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  static port: number | string;

  constructor(private readonly _configservice: ConfigService) {
    AppModule.port = this._configservice.get(Configuration.PORT)
  }
}
