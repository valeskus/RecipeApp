import { Prop, Schema } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

@Schema()
export class Instruction {
    @ApiProperty({
        example: 'Gather all your ingredients',
        description: 'Instruction text',
        required: true
    })
    @Prop({ required: true })
    description: string;

    @ApiProperty({
        example: 'https://picsum.photos/500/500',
        description: 'Image for instruction',
        required: false
    })
    @Prop({ required: false })
    image: number;
}
