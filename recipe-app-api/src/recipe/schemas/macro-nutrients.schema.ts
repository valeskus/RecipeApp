import { Prop, Schema } from '@nestjs/mongoose';

@Schema({
    _id: false,
})
export class MacroNutrients {
    @Prop({ required: true })
    proteins: number;

    @Prop({ required: true })
    carbs: number;

    @Prop({ required: true })
    fats: number;
}
