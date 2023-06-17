import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

@Schema({
    toJSON: {
        virtuals: true,
        versionKey: false,
        transform: (doc, ret) => {
            delete ret._id;
        }
    }
})
export class Category {
    @ApiProperty({
        example: 'Lunch',
        description: 'Name of the category',
        required: true
    })
    @Prop({ required: true })
    title: string;

    @ApiProperty({
        example: 'https://picsum.photos/500/500',
        description: 'Url for the image of the category',
        required: true
    })
    @Prop({ required: true })
    image: string;

    @ApiProperty({
        example: 'diet',
        description: 'Type of the category',
        required: true
    })
    @Prop({ required: true })
    type: 'diet' | 'meal';
}

export const CategorySchema = SchemaFactory.createForClass(Category);
