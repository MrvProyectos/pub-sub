import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { PubDto } from './modules/dto/dto.pubdto';
import { LogDTO } from './modules/dto/log.dto';

import { PubService } from './modules/pub/pub.service';
import { LoggerService } from './modules/logger/logger.service';

@Controller('pub')
export class AppController {
    constructor(
        private _pubService: PubService,
        private _loggerService: LoggerService
    ) {}

    @Post('propagator')
    @HttpCode(HttpStatus.OK)
    async propagator(@Body() body: PubDto){
        this._loggerService.customInfo({}, { [`Event ${body.id}`]: `For BRAND ID ${body.description}` });
        const result = await this._pubService.publisher(body);
        return {
            status: HttpStatus.OK,
            statusDescription: result
        };
    }

    @Post('logme')
    @HttpCode(HttpStatus.OK)
    async logMe(@Body() body: LogDTO) {
      const logFrom = `Log from ${body.logFrom}`;
      if (body.logType === 'info') {
        this._loggerService.customInfo({}, { [logFrom]: body.logResult });
      } else {
        this._loggerService.customError({}, { [logFrom]: body.logResult });
      }
      return {
        status: HttpStatus.OK,
        statusDescription: 'LOG OK'
      };
    }
  
}