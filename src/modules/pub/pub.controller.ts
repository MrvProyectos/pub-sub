import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { PubService } from './pub.service';
import { PubDto } from './pub.dto';
import { LoggerService } from './../logger/logger.service';

@Controller('pub')
export class PubController {
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
}
