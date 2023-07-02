/* eslint-disable no-console */
import categories from './categories.json' assert { type: "json" };
import products from './products.json' assert { type: "json" };
import recipes from './recipes.json' assert { type: "json" };

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

        const result = await response.json();

        if (result.statusCode >= 400) {
            console.error(item);
            throw new Error(result.message);
        }

        console.log(item.title, " added");
    }
};

(async () => {
    await add("http://localhost:3000/categories", categories);
    await add("http://localhost:3000/products", products);
    await add("http://localhost:3000/recipe", recipes);
})();
