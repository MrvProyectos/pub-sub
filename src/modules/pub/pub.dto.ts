import { IsNotEmpty } from "class-validator";

export class PubDto {
    @IsNotEmpty()
    clave: string;

    @IsNotEmpty()
    valor: string;
}