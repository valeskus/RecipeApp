export const recipeMock = {
  id: '1',
  time: 5,
  title: 'Lasagna',
  image: 'https://picsum.photos/500/500',
  amount: 200,
  units: 'ml',
  kCal: 364,
  description: 'This lasagna recipe takes a little work, but it is so satisfying and filling that it s worth it!',
  servingsCount: 2,
  instructions: [
    { id: 'string',
      description: 'Gather all your ingredients',
      image: 'https://picsum.photos/500/500',
    },
  ],
  macroNutrients: {
    proteins: 200,
    carbs: 10.33,
    fats: 13,
  },
  ingredients: [
    {
      id: 'string',
      title: 'Meat',
      amount: 200,
      units: 'g',
    },
  ],
};
