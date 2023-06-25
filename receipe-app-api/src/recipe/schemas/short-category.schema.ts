import { Prop, Schema } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

import { CategoryType } from '../../categories/models';

@Schema()
export class ShortCategory {
    @ApiProperty({
        example: 'Lunch',
        description: 'Name of the category',
        required: true
    })
    @Prop({ required: true })
    title: string;

    @ApiProperty({
        example: CategoryType.DIET,
        enum: CategoryType,
        description: 'Type of the category',
        required: true
    })
    @Prop({ required: true })
    type: CategoryType;
}
