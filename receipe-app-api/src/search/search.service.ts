import {Injectable} from '@nestjs/common';
import {RecipeListModel} from './models';

const ImageMock = 'https://picsum.photos/500/500';

const filters = [
  {
    id: 'filter1',
    title: 'Filter 1',
    values: [
      {
        label: 'variant 1',
        id: 'variant1',
      },
      {
        label: 'variant 2',
        id: 'variant2',
      },
      {
        label: 'variant 3',
        id: 'variant3',
      },
      {
        label: 'variant 4',
        id: 'variant4',
      },
    ],
  },
  {
    id: 'filter2',
    title: 'Filter 2',
    values: [
      {
        label: 'variant 2.1',
        id: 'variant2.1',
      },
      {
        label: 'variant 2.2',
        id: 'variant2.2',
      },
    ],
  },
  {
    id: 'filter3',
    title: 'Filter 3',
    values: [
      {
        label: 'variant 3.1',
        id: 'variant3.1',
      },
      {
        label: 'variant 3.2',
        id: 'variant3.2',
      },
      {
        label: 'variant 3.3',
        id: 'variant3.3',
      },
      {
        label: 'variant 3.4',
        id: 'variant3.4',
      },
    ],
  },
  {
    id: 'filter4',
    title: 'Filter 4',
    values: [
      {
        label: 'variant 4.1',
        id: 'variant4.1',
      },
      {
        label: 'variant 4.2',
        id: 'variant4.2',
      },
      {
        label: 'variant 4.3',
        id: 'variant4.3',
      },
      {
        label: 'variant 4.4',
        id: 'variant4.4',
      },
    ],
  },
];
const sortOptions = [
  {
    label: 'Sort 1',
    id: 'sort1',
  },
  {
    label: 'Sort 2',
    id: 'sort2',
  },
];

@Injectable()
export class SearchService {
  async findBySearch(searchTerm: string): Promise<RecipeListModel> {
    await new Promise(resolve => setTimeout(resolve, 1500));

    if (searchTerm === 'empty') {
      return {
        recipes: [],
        filters: [],
        sortOptions: [],
      };
    }

    if (searchTerm === '1 recipe') {
      return {
        recipes: [
          {
            id: '1',
            title: 'Product 1',
            image: ImageMock,
            rating: 4,
            kcal: 500,
            time: '1:50',
          },
        ],
        filters,
        sortOptions,
      };
    }

    return {
      recipes: [
        {
          id: '1',
          title: 'Product 1',
          image: ImageMock,
          rating: 4,
          kcal: 500,
          time: '1:50',
        },
        {
          id: '2',
          title: 'Product 2',
          image: ImageMock,
          rating: 3,
          kcal: 500,
          time: '1:50',
        },
        {
          id: '3',
          title: 'Product 3',
          image: ImageMock,
          rating: 1,
          kcal: 500,
          time: '1:50',
        },
        {
          id: '4',
          title: 'Product 4',
          image: ImageMock,
          rating: 4.5,
          kcal: 500,
          time: '1:50',
        },
        {
          id: '5',
          title: 'Product 5',
          image: ImageMock,
          rating: 1.5,
          kcal: 500,
          time: '1:50',
        },
      ],
      filters,
      sortOptions,
    };
  }
}
