import { IsNotEmpty, IsString } from "class-validator";

export class chatDto{
    @IsString()
    @IsNotEmpty()
    question:string;

    @IsString()
    @IsNotEmpty()
    answer:string
}

export class chatResponseDto{
    @IsString()
    @IsNotEmpty()
    question:string;
}