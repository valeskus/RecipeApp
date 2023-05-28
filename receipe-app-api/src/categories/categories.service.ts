import {Injectable} from '@nestjs/common';
import {CategoryListModel} from './models';

const ImageMock = 'https://picsum.photos/500/500';

@Injectable()
export class CategoriesService {
  async getCategories(): Promise<CategoryListModel> {
    await new Promise(resolve => setTimeout(resolve, 1500));

    return {
      categories: [
        {id: '1', title: 'Category 1', image: ImageMock},
        {id: '2', title: 'Category 2', image: ImageMock},
        {id: '3', title: 'Category 3', image: ImageMock},
        {id: '4', title: 'Category 4', image: ImageMock},
        {id: '5', title: 'Category 5', image: ImageMock},
        {id: '6', title: 'Category 6', image: ImageMock},
      ],
    };
  }
}
