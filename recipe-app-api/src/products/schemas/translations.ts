import { Prop, Schema } from '@nestjs/mongoose';

import { Languages, Translations } from '../../translation/models';

Schema({
    _id: false,
});
export class TranslatedProduct {
    @Prop({ required: true, unique: true })
    title: string;
}

Schema({
    _id: false,
});
export class ProductTranslations implements Translations<TranslatedProduct> {
    @Prop({ required: true })
    [Languages.UA]: TranslatedProduct;
}
