import { useNavigation } from '@react-navigation/native';
import { useCallback, useEffect } from 'react';

import * as ErrorsStore from '@stores/errors';
import * as CategoriesStore from '@stores/categories';

export const useErrorController = () => {

    const getCategories = CategoriesStore.useGetCategories();
    const errorGetCategories = ErrorsStore.useGetErrorFor('getCategories');
    const navigation = useNavigation();
    const resetError = ErrorsStore.useResetErrors('getCategories');
    const { categories } = CategoriesStore.useCategoriesStore();

    const onRetry = useCallback(async () => {

        if (errorGetCategories) {
            resetError();
        }

        await getCategories();

    }, [errorGetCategories]);

    useEffect(() => {
        if (categories.length >= 1) {
            navigation.navigate('Categories');

            return;
        }

    }, [categories]);

    return {
        onRetry,
    };
};
