import { IsString, IsNotEmpty, IsUrl, IsDefined } from 'class-validator';

export class CreateCategoryDto {
    @IsNotEmpty()
    @IsString()
    readonly title: string;

    @IsUrl()
    readonly image: string;
}