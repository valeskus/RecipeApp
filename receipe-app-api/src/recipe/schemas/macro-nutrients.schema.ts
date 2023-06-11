import { Prop, Schema } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

@Schema({
    _id: false,
})
export class MacroNutrients {
    @ApiProperty({
        example: 200,
        description: 'Amount(g) of proteins (for full amount)',
        required: true
    })
    @Prop({ required: true })
    proteins: number;

    @ApiProperty({
        example: 10.33,
        description: 'Amount(g) of carbs (for full amount)',
        required: true
    })
    @Prop({ required: true })
    carbs: number;

    @ApiProperty({
        example: 13,
        description: 'Amount(g) of fats (for full amount)',
        required: true
    })
    @Prop({ required: true })
    fats: number;
}
