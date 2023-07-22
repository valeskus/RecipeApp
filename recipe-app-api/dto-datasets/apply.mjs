/* eslint-disable no-console */
import categoriesJSON from './categories.json' assert { type: 'json' };
import productsJSON from './products.json' assert { type: 'json' };
import recipesJSON from './recipes.json' assert { type: 'json' };

const requestOptions = {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
};

const add = async (path, items) => {
    for (const item of items) {
        const response = await fetch(path, {
            ...requestOptions,
            body: JSON.stringify(item),
        });

        if (response.status >= 400) {
            console.error(item);
            throw new Error((await response.json()).message);
        }

        console.log(item.title, ' added');
    }
};

(async () => {
    await add('http://localhost:3000/categories', categoriesJSON);
    await add('http://localhost:3000/products', productsJSON);

    const allCategoriesRequest = await fetch('http://localhost:3000/categories', { method: 'GET' });
    const { categories } = await allCategoriesRequest.json();

    const allProductsRequest = await fetch('http://localhost:3000/products', { method: 'GET' });
    const { products } = await allProductsRequest.json();

    const recipesWithIds = recipesJSON.map((recipe) => {
        return {
            ...recipe,
            categories: recipe.categories.map((categoryTitle) => {
                const targetCategory = categories.find((category) => category.title === categoryTitle);

                if (targetCategory) {
                    return targetCategory.id;
                }

                return undefined;
            }).filter(Boolean),
            ingredients: recipe.ingredients.map((recipeIngredient) => {
                const targetProduct = products.find((product) => product.title === recipeIngredient.title);

                if (targetProduct) {
                    return {
                        id: targetProduct.id,
                        amount: recipeIngredient.amount,
                    };
                }

                return undefined;
            }).filter(Boolean),
        };
    });

    await add('http://localhost:3000/recipe', recipesWithIds);
})();
