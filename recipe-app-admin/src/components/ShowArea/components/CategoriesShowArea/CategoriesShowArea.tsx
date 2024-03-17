import { CardItem } from '../CardItem';
import { ImageEditor } from '../ImageEditor';
import { TitleEditor } from '../TitleEditor';

import './CategoriesShowArea.style.css';
import { useCategoriesShowAreaController } from './useCategoriesShowAreaController';

export function CategoriesShowArea(): JSX.Element {
  const { categories, updateTitle, updateImage } = useCategoriesShowAreaController();

  return (
    <div className="showArea-container" >
      <div className="categories-total">
        {categories.length > 1 && <h3>Total: {categories.length}</h3>}
      </div>
      <div className="showArea-CategoriesList">
        {categories.map((category, index) => {
          return (<div className="category-item" key={index}>
            <div className="image-edit-container">
              <img className="category-item-image" src={category.image} />
              <ImageEditor id={category.id} onChange={updateImage}/>
            </div>

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
