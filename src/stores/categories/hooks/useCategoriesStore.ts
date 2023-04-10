import * as Redux from 'react-redux';

export const useCategoriesStore = () => {
  // TODO
  return Redux.useSelector((store: any) => store.categories);
};
