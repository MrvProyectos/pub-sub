import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { Logger } from '@nestjs/common'; // consultar

async function bootstrap() {

  const logger = new Logger();
  const app = await NestFactory.create(AppModule);


  app.setGlobalPrefix('apips');
  await app.listen(3000);

  const port = process.env.PORT;

  logger.log(`prueba logger ${port}`);
}
bootstrap();
