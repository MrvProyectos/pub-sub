import { IsString, IsNotEmpty, IsEnum, IsNumber, IsArray } from 'class-validator';

export class PubDto {
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsString()
  @IsNotEmpty()
  commercialName: string;

  @IsArray()
  @IsNotEmpty()
  photoUrls: [];

  @IsString()
  @IsNotEmpty()
  status: string;
}