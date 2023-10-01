import { useCallback, useEffect, useState } from 'react';
import * as Redux from 'react-redux';

import { RecipePostModel } from '../../../../stores/recipe/types';
import { useCategoriesStore, useGetCategories } from '../../../../stores/categories';
import { OptionsManager } from '../../../managers/OptionsManager';
import { OptionModel } from '../../../common/Select/Select';

export interface GeneralInfoFormControllerParams {
  status: string;
  onChange: (generalFormValue: Omit<RecipePostModel, 'ingredients' | 'instructions'>) => void;
}

export const useGeneralInfoFormController = (params: GeneralInfoFormControllerParams) => {
  const [title, setTitle] = useState<string>('');
  const [titleUA, setTitleUA] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [descriptionUA, setDescriptionUA] = useState<string>('');
  const [units, setUnits] = useState<'g' | 'ml' | '' >('');
  const [image, setImage] = useState<string>('');
  const [time, setTime] = useState<number | ''>('');
  const [amount, setAmount] = useState<number | ''>('');
  const [servingsCount, setServingsCount] = useState<number | ''>('');
  const [difficulty, setDifficulty] = useState<number >(0);
  const [categoriesArray, setCategoriesArray] = useState<Array<OptionModel>>([]);

  const dispatch = Redux.useDispatch();
  const getCategories = useGetCategories();
  const { categories } = useCategoriesStore();

  const difficultyValue = OptionsManager.getOptionsArray(['0', '1', '2']);
  const unitsValue = OptionsManager.getOptionsArray(['ml', 'g']);
  const categoriesValue = OptionsManager.getCategoriesOptionsArray(categories);

  useEffect(() => {
    getCategories(dispatch);
  }, []);

  useEffect(() => {
    if (params.status === 'Created') {
      setTitle('');
      setTitleUA('');
      setDescription('');
      setDescriptionUA('');
      setImage('');
      setTime('');
      setAmount('');
      setUnits('');
      setServingsCount('');
      setCategoriesArray([]);

      return;
    }
  }, [params.status, title, titleUA, description, descriptionUA, amount, time, image,  units,
    servingsCount]);

  const handleTitle = useCallback((value: string) => {
    setTitle(value);
  }, [setTitle]);

  const handleUATitle = useCallback((value: string) => {
    setTitleUA(value);
  }, [setTitleUA]);

  const handleDescription = useCallback((value: string) => {
    setDescription(value);
  }, [setDescription]);

  const handleDescriptionUA = useCallback((value: string) => {
    setDescriptionUA(value);
  }, [setDescriptionUA]);

  const handleUnits = useCallback(({ value }: OptionModel) => {
    if (value !== 'g' && value !== 'ml') {
      return;
    }

    setUnits(value);
  }, [setUnits]);

  const handleImage = useCallback((value: string) => {
    setImage(value);
  }, [setImage]);

  const handleTime = useCallback((value: string) => {
    setTime(+value);
  }, [setTime]);

  const handleAmount = useCallback((value: string) => {
    setAmount(+value);
  }, [setAmount]);

  const handleServingsCount = useCallback((value: string) => {
    setServingsCount(+value);
  }, [setServingsCount]);

  const handleDifficulty = useCallback(({ value }: OptionModel) => {
    if (+value !==  0 && +value !== 1 && +value !== 2) {
      return;
    }

    setDifficulty(+value);
  }, [setDifficulty]);

  const handleCategoryArray = useCallback((arrayOfCategories: Array<OptionModel>) => {
    // const stringArray = arrayOfCategories.map((item) => {
    //   return item.value;
    // });
    setCategoriesArray(arrayOfCategories);
  }, [setCategoriesArray]);

  const onChangeInput = useCallback(() => {
    if (!units || !time || !amount || !servingsCount) {
      return;
    }

    const recipe:  Omit<RecipePostModel, 'ingredients' | 'instructions'> = {
      title,
      description,
      translations: {
        ua: {
          title: titleUA,
          description: descriptionUA,
        },
      },
      time,
      image,
      amount,
      units,
      servingsCount,
      difficulty,
      categories: categoriesArray.map((item) => {
        return item.value;
      }),
    };
    params.onChange(recipe);
  }, [title, titleUA, description, descriptionUA, amount, categoriesArray, time, image,  units,
    servingsCount, difficulty]);

  return {
    unitsValue,
    difficultyValue,
    categoriesValue,
    onChangeInput,
    handleTitle,
    handleUATitle,
    handleDescription,
    handleDescriptionUA,
    handleUnits,
    handleImage,
    handleTime,
    handleAmount,
    handleServingsCount,
    handleDifficulty,
    handleCategoryArray,
    title, titleUA, description, descriptionUA, time, image,
    servingsCount, amount, categoriesArray,
  };
};
