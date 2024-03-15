import { CardItem } from '../CardItem';

import './CategoriesShowArea.style.css';
import { useCategoriesShowAreaController } from './useCategoriesShowAreaController';

export function CategoriesShowArea(): JSX.Element {
  const { categories } = useCategoriesShowAreaController();

  return (
    <div className="showArea-container" >
      <div className="categories-total">
        {categories.length > 1 && <h3>Total: {categories.length}</h3>}
      </div>
      <div className="showArea-CategoriesList">
        {categories.map((category, index) => {
          return (<div className="recipe-item" key={index}>
            <img className="recipe-item-image" src={category.image} />
            <div className="card-info">
              <h2>{category.title}</h2>
              <CardItem title="ID" value={category.id} />
            </div>
          </div>);
        })}
      </div>
    </div>
  );
}
