import { Input } from '../../../common/inputs';
import { CardItem } from '../CardItem';

import './RecipesShowArea.style.css';
import { useRecipesShowAreaController } from './useRecipesShowAreaController';

export function RecipesShowArea(): JSX.Element {
  const { recipes, total, handleSearchTerm } = useRecipesShowAreaController();

  return (
    <div className="showArea-container" >
      {/* <div>
{categories.map
}</div> */}

      <div className="showArea-input">
        <Input label={'Search:'} type={'string'} placeholder={'Search'} onChange={handleSearchTerm} />
      </div>

      <div className="recipes-total">
        {total > 1 && <h3>Total: {total}</h3>}
      </div>
      <div className="showArea-recipesList">
        {recipes.map((recipe, index) => {
          return (<div className="recipe-item" key={index}>
            <img className="recipe-item-image" src={recipe.image} />
            <div className="card-info">
              <h2>{recipe.title}</h2>
              <CardItem title="ID" value={recipe.id} />
              <CardItem title="kCal" value={recipe.kCal} />
              <CardItem title="kCal per 100g" value={recipe.kCalPer100} />
              <CardItem title="Time" value={recipe.time} />
              <CardItem title="Amount" value={recipe.amount} />
            </div>
          </div>);
        })}
      </div>
    </div>
  );
}
