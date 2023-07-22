import { ApiProperty, PickType } from '@nestjs/swagger';
import { PipelineStage } from 'mongoose';

import { RecipeDataObject } from '../../recipe/dto/recipe-data-object';

class RecipeListItem extends PickType(RecipeDataObject, ['id', 'image', 'title', 'time']) {
    @ApiProperty({
        example: 364,
        description: 'Amount of kilo calories (for full amount)',
    })
    readonly kCal: number;

    static mongoAggregationConstructor(): Array<PipelineStage.FacetPipelineStage> {
        return [
            { $project: { id: '$_id', image: 1, title: 1, time: 1, kCal: 1, _id: 0 } },
        ];
    }
}

export { RecipeListItem as RecipeListItemDto };
