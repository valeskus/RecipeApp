import { ArrayMinSize, IsArray, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

import { TagsUpdateStrategy } from '../models';

class UpdateTags {
    @ApiProperty({
        example: ['cheese', 'crepe', 'yeast'],
        description: 'Keywords associated with the recipe',
        required: true,
    })
    @IsArray()
    @IsNotEmpty({ each: true })
    @IsString({ each: true })
    @ArrayMinSize(1)
    readonly tags: Array<string>;

    @ApiProperty({
        example: TagsUpdateStrategy.merge,
        description: 'Controls the updating behavior',
        required: true,
    })
    @IsEnum(TagsUpdateStrategy)
    readonly strategy: TagsUpdateStrategy;
}

export { UpdateTags as UpdateTagsDto };
