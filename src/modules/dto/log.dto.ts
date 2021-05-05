import { IsString, IsNotEmpty, IsEnum } from 'class-validator';

export class LogDTO {
  @IsEnum(['info', 'error'], {
    message: 'Log type is not valid [info, error]'
  })
  @IsString()
  @IsNotEmpty()
  logType: string;

  @IsString()
  @IsNotEmpty()
  logFrom: string;

  @IsNotEmpty()
  logResult: any;
}
