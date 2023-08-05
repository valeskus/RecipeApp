import { ApiHeader } from '@nestjs/swagger';

import { Languages } from './models';

export const AcceptLanguageHeader = () => {
    return ApiHeader({
        name: 'Accept-language',
        enum: Languages,
        description: 'Preferable language of the requested resource'
    });
};
