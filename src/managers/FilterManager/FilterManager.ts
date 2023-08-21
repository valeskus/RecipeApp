export class FilterValuesManager {
  static getRawValues(queryString: string) {
    if (!queryString) {
      return [];
    }

    return queryString.split('|');
  }

  static getQueryValues(rawValues: Array<string>) {
    return rawValues.join('|');
  }

  static getAppliedFiltersString(baseString: string, nextRawValueString: string, multiple: boolean) {
    const rawValues = FilterValuesManager.getRawValues(baseString);

    if (rawValues.includes(nextRawValueString)) {
      return FilterValuesManager.getQueryValues(rawValues.filter((value) => value !== nextRawValueString));
    }

    if (multiple) {
      return FilterValuesManager.getQueryValues([...rawValues, nextRawValueString]);
    }

    return FilterValuesManager.getQueryValues([nextRawValueString]);
  }

}
