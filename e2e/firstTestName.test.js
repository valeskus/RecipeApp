import { defineFeature, loadFeature } from 'jest-cucumber';

const { device, element, by, expect } = require('detox');

const feature = loadFeature('e2e/firstTestName.feature');

defineFeature(feature, (test) => {
  beforeAll(async () => {
    await device.launchApp({ newInstance: true });
  });

  test('User can open category listing', ({
    given,
    when,
    then,
  }) => {
    given('I am on home screen', async () => {
      await expect(element(by.id('categoriesList'))).toBeVisible();
    });

    when('I tap on a category card', async () => {
      await element(by.text('Lunch')).tap();
    });

    then('I navigated to category listing', async () => {
      await expect(element(by.id('recipesList'))).toBeVisible();
    });
  });
});
