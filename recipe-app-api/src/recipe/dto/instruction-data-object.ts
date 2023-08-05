import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, IsUrl } from 'class-validator';

import { TranslationsDtoOf } from '../../translation/dto';

class TranslatableInstructionItems {
    @ApiProperty({
        example: 'Gather all your ingredients',
        description: 'Instruction text',
        required: true
    })
    @IsNotEmpty()
    @IsString()
    readonly description: string;
}

export class InstructionDataObject extends TranslationsDtoOf(TranslatableInstructionItems) {
    @ApiProperty({
        example: 'https://picsum.photos/500/500',
        description: 'Image for instruction',
        required: false
    })
    @IsUrl()
    @IsOptional()
    readonly image: number;
}
