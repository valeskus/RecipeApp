import { IsString, IsNotEmpty, IsUrl, Matches } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

class CreateCategory {
    @ApiProperty({
        example: 'Lunch',
        description: 'Name of the category',
        required: true
    })
    @IsNotEmpty()
    @IsString()
    readonly title: string;

    @ApiProperty({
        example: 'https://picsum.photos/500/500',
        description: 'Url for the image of the category',
        required: true
    })
    @IsUrl()
    readonly image: string;

    @ApiProperty({
        example: 'diet',
        description: 'Type of the category',
        required: true
    })
    @Matches(/^(diet|meal)$/, {
        message: 'type should be either "diet" or "meal"'
    })
    readonly type: 'diet' | 'meal';
}

export { CreateCategory as CreateCategoryDto };
