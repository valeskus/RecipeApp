import {Injectable} from '@nestjs/common';
import {DetailRecipeModel} from './models';

const ImageMock = 'https://fastly.picsum.photos/id/975/500/500.jpg';

@Injectable()
export class RecipeService {
  async getRecipeById(id: string): Promise<DetailRecipeModel> {
    await new Promise(resolve => setTimeout(resolve, 1500));

    return {
      id: id,
      title: 'Product 1 ',
      image: ImageMock,
      rating: 4,
      kcal: 500,
      weight: 1300,
      time: '1:50',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Ac turpis egestas sed tempus.',
      macroNutrients: {
        protein: 20,
        carbs: 30,
        fats: 10,
      },
      servingsCount: 3,
      ingredients: [
        {
          id: 'i1',
          title: 'Product 1',
          description: '(lorem ipsum dolor sit amet)',
          count: 200,
          unit: 'g',
        },
        {
          id: 'i2',
          title: 'Product 2',
          count: 1 / 2,
          unit: 'cup',
        },
        {
          id: 'i3',
          title: 'Product 3',
          count: 50,
          unit: 'ml',
        },
      ],
      instructions: [
        {
          id: 'in1',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. ',
        },
        {
          id: 'in2',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. ',
        },
        {
          id: 'in3',
          image: ImageMock,
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. ',
        },
      ],
    };
  }
}
