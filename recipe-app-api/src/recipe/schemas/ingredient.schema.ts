import { Prop, Schema } from '@nestjs/mongoose';

import { Units } from '../models';

@Schema()
export class Ingredient {
    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    amount: number;

    @Prop({ required: true })
    units: Units;
}
