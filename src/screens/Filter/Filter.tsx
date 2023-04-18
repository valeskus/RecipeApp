import React, {useCallback} from 'react';
import {ScrollView, StyleSheet, StatusBar, View} from 'react-native';
// import * as RecipesStore from '../../stores/recipes';
import {FilterItem} from '../../components/FilterItem';
import {FilterModel} from '../../models';

export function Filter(): JSX.Element {
  const [isLoading, setLoading] = React.useState(false);
  const [filterList, setFiltreList] = React.useState([{}]);

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

  React.useEffect(() => {
    setLoading(true);
  }, []);

  Array<{
    key: string; // Reference FilterModel.id
    value: string; // Reference FilterValueModel.id
  }>;

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
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  filterScreenContainer: {
    flex: 1,
    padding: 10,
  },
});
