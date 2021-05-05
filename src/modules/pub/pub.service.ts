import { Injectable } from '@nestjs/common';
import { PubSub } from '@google-cloud/pubsub';

import { Configuration } from './../../config/config.keys';
import { ConfigService } from './../../config/config.service';
import { LoggerService } from './../logger/logger.service';

@Injectable()
export class PubService {
    constructor(
        private _configService: ConfigService,
        private _loggerService: LoggerService
        ) {
            const buffer = Buffer.from(this.credentials, 'base64');
            const credentialDecode = buffer ? buffer.toString() : null;
            const credentialJson = JSON.parse(credentialDecode);

            this.pubSubClient = new PubSub({
                projectId: this.projectId,
                credentials: credentialJson,
            });
        }

    private credentials = this._configService.get(Configuration.GCLOUD_CREDENTIAL_B64); 
    private projectId = this._configService.get(Configuration.GCLOUD_PROJECT_ID);
    private topicName = this._configService.get(Configuration.GCLOUD_TOPIC_NAME);
    private subscript = this._configService.get(Configuration.GCLOUD_SUBSCRIPTION_NAME);

    private pubSubClient: PubSub;

    async publisher(data: any){
        const dataBuffer = Buffer.from(JSON.stringify(data));
        const messageId = await this.pubSubClient.topic(this.topicName).publish(dataBuffer);

        this._loggerService.customInfo({}, { [`Message Published PUB/SUB to ${this.topicName}`]: messageId });
        return `Message Published ${messageId}`
    }
}