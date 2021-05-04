import { Body, Controller, Post } from '@nestjs/common';
import { PubService } from './pub.service';
import { PubDto } from './pub.dto';

@Controller('pub')
export class PubController {
    constructor(private readonly _pubService: PubService) {}

    @Post()
    async creaPub(@Body() body: PubDto){
        return this._pubService.creaPub(body);
    }
}
