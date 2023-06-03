import { IsString, IsNotEmpty, IsUrl } from 'class-validator';

export class CreateCategoryDto {
    @IsNotEmpty()
    @IsString()
    readonly title: string;

    @IsUrl()
    readonly image: string;
}
