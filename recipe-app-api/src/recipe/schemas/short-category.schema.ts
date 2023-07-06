import { Prop, Schema } from '@nestjs/mongoose';

import { CategoryType } from '../../categories/models';

@Schema()
export class ShortCategory {
    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    type: CategoryType;
}
