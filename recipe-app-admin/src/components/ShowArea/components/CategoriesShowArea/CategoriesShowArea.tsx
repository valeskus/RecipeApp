import { CardItem } from '../CardItem';
import { TitleEditor } from '../TitleEditor';

import './CategoriesShowArea.style.css';
import { useCategoriesShowAreaController } from './useCategoriesShowAreaController';

export function CategoriesShowArea(): JSX.Element {
  const { categories, updateTitle } = useCategoriesShowAreaController();

  return (
    <div className="showArea-container" >
      <div className="categories-total">
        {categories.length > 1 && <h3>Total: {categories.length}</h3>}
      </div>
      <div className="showArea-CategoriesList">
        {categories.map((category, index) => {
          return (<div className="category-item" key={index}>
            <img className="category-item-image" src={category.image} />
            <div className="card-info">
              < TitleEditor id={category.id} onChange={updateTitle} title={category.title} />
              <CardItem title="ID" value={category.id} />
            </div>
          </div>);
        })}
      </div>
    </div>
  );
}
