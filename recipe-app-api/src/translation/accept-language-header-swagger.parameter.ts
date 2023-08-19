import { DocumentBuilder } from '@nestjs/swagger/';

import { Languages } from './models';

export const AcceptLanguageHeaderParameter: Parameters<DocumentBuilder['addGlobalParameters']>[0] = {
    in: 'header',
    name: 'Accept-language',
    schema: {
      enum: Object.values(Languages),
    },
    description: 'Preferable language for the resource'
};
