export class FiltersValuesManager {
  static getRawValues(queryString: string) {
    if (!queryString) {
      return [];
    }

    return queryString.replaceAll('|', ',').split(',');

  }

  static getQueryValues(rawValues: Array<string>) {
    return rawValues.toString().replaceAll(',', '|');
  }

  static getAppliedFiltersString(baseString: string, nextRawValueString: string, multiple: boolean) {
    const rawValues = FiltersValuesManager.getRawValues(baseString);

    if (rawValues.includes(nextRawValueString)) {
      return FiltersValuesManager.getQueryValues(rawValues.filter((value) => value !== nextRawValueString));
    }

    if (multiple) {
      return FiltersValuesManager.getQueryValues([...rawValues, nextRawValueString]);
    }

    return FiltersValuesManager.getQueryValues([nextRawValueString]);
  }

}
