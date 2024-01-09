import { PickType } from '@nestjs/swagger';
import { PipelineStage } from 'mongoose';

import { RecipeDto } from '../../recipe/dto';

class RecipeListItem extends PickType(
    RecipeDto, ['id', 'image', 'title', 'time', 'units', 'amount', 'kCal', 'kCalPer100']
) {
    static mongoAggregationConstructor(): Array<PipelineStage.FacetPipelineStage> {
        return [
            { $project: { id: '$_id', image: 1, title: 1, time: 1, units: 1, amount: 1, kCal: 1, _id: 0 } },
            {
                $addFields: {
                    kCalPer100: {
                        $divide: [{ $multiply: ['$kCal', 100] }, '$amount']
                    }
                }
            },
        ];
    }
}

export { RecipeListItem as RecipeListItemDto };
