import { Prop, Schema } from '@nestjs/mongoose';

import { Languages, Translations } from '../../translation/models';

Schema({
    _id: false,
});
export class TranslatedCategory {
    @Prop({ required: true, unique: true })
    title: string;
}

Schema({
    _id: false,
});
export class CategoryTranslations implements Translations<TranslatedCategory> {
    @Prop({ required: true })
    [Languages.UA]: TranslatedCategory;
}
