import { ApiProperty } from "@nestjs/swagger";

class RecipeListItem {
    constructor(params?: RecipeListItem) {
        if (params) {
            this.image = params.image;
            this.kCal = params.kCal;
            this.time = params.time;
            this.title = params.title;
        }
    }

    @ApiProperty({
        example: 5,
        description: 'Time of cooking (minutes)',
        required: true
    })
    readonly time: number;

    @ApiProperty({
        example: 'Lasagna',
        description: 'Title of the recipe',
        required: true
    })
    readonly title: string;

    @ApiProperty({
        example: 'https://picsum.photos/500/500',
        description: 'Url for the image of the recipe',
        required: true
    })
    readonly image: string;

    @ApiProperty({
        example: 364,
        description: 'Amount of kilo calories (for full amount)',
    })
    readonly kCal: number;
}

export { RecipeListItem as RecipeListItemDto };
