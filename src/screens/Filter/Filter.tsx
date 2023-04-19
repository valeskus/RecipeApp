import React, {useCallback} from 'react';
import {ScrollView, StatusBar, View} from 'react-native';
import {styles} from './styles';
// import * as RecipesStore from '../../stores/recipes';
import {FilterItem} from '../../components/FilterItem';
import {FilterModel} from '../../models';
import {Button} from '../../UI/Button';
import {useNavigation} from '@react-navigation/native';

export function Filter(): JSX.Element {
  const [filterList, setFiltreList] = React.useState([{}]);
  const navigation = useNavigation();
  //   const {filters} = RecipesStore.useRecipesStore();
  const filters: Array<FilterModel> = [
    {
      id: '1',
      title: 'Filter 1',
      values: [
        {label: 'value 1', id: 'value 1.1'},
        {label: 'value 2', id: 'value 1.2'},
      ],
    },
    {
      id: '2',
      title: 'Filter 2',
      values: [
        {label: 'value 1', id: 'value 2.1'},
        {label: 'value 2', id: 'value 2.2'},
      ],
    },
  ];

  const handleFilterItem = useCallback(
    (filterId: string, valueId: string) => {
      console.log(filterId, valueId);
      return setFiltreList([...filterList, {key: filterId, value: valueId}]);
    },
    [filterList],
  );
  return (
    <ScrollView style={styles.filterScreenContainer}>
      <StatusBar />
      <View>
        {filters.map((filter, index) => {
          return (
            <FilterItem
              filter={filter}
              index={index}
              key={filter.id}
              id={filter.id}
              onChange={handleFilterItem}
            />
          );
        })}
      </View>
      <Button icon="select" onPress={() => navigation.goBack()} />
    </ScrollView>
  );
}
