import { Prop, Schema } from '@nestjs/mongoose';

@Schema()
export class Instruction {
    @Prop({ required: true })
    description: string;

    @Prop({ required: false })
    image: number;
}
