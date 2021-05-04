import { Injectable } from '@nestjs/common';
import { PubDto } from './pub.dto';

@Injectable()
export class PubService {

    creaPub(body: PubDto) {
        return body;
    }

}