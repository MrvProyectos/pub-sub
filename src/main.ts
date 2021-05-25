import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { AllExceptionsFilter } from './exception-filters/all-exceptions.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger();
  const { httpAdapter } = app.get(HttpAdapterHost); // Consultar
 
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));

  app.setGlobalPrefix('apips');
  await app.listen(AppModule.port);
}
bootstrap();