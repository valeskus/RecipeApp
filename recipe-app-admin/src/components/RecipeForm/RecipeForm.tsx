import './RecipeForm.style.css';

import { Button } from '../common/Button';
import { Input } from '../common/Input';
import { SelectComponent } from '../common/Select/Select';

import { IngredientForm } from './components/IngredientForm';
import { InstructionForm } from './components/InstructionForm';
import { useRecipeFormController } from './useRecipeFormController';

export function RecipeForm(): JSX.Element {
  const { unitsValue,
    difficultyValue,
    categoriesValue,
    handleMultiple,
    ingredientsFormArray,
    productsValue,
    onAddIngredientForm,
    instructionsFormArray,
    onAddInstructionForm,
    onSend,
  } = useRecipeFormController();

  return (
    <div className="recipeFormContainer">
      <div className="formsContainer">
        <Input label="Title :" type="text" placeholder="Title" onChange={() => { }} />
        <Input label="Title UA:" type="text" placeholder="Назва" onChange={() => { }} />
        <Input label="Description:" type="text" placeholder="Description" onChange={() => { }} />
        <Input label="Description UA:" type="text" placeholder="опис" onChange={() => { }} />
        <SelectComponent label="Units:"
          placeholder="units" multiple={false} options={unitsValue} onChange={() => { }}
        />
        <Input label="Image:" type="url" placeholder="image url" onChange={() => { }} />
        <Input label="Time:" type="number" placeholder="time in minutes" onChange={() => { }} />
        <Input label="Amount:" type="number" placeholder="amount" onChange={() => { }} />
        <Input label="Servings Count:" type="number" placeholder="number of servings count" onChange={() => { }} />
        <SelectComponent label="Difficulty:" placeholder="---" multiple={false}
          options={difficultyValue} onChange={() => { }}
        />
        <SelectComponent label="Categories:" placeholder="---" multiple={ true}
          options={categoriesValue} onChange={handleMultiple}
        />
      </div>
      <div className="dynamicFormContainer">
        <div  className="dynamicForm">
          {ingredientsFormArray.map((index) => {
            return <IngredientForm products={productsValue} key={index}/>;
          })}
          <Button title="+" onClick={onAddIngredientForm} />
        </div>
        <div className="dynamicForm">
          {instructionsFormArray.map((index) => {
            return <InstructionForm key={index}/>;
          })}
          <Button title="+" onClick={onAddInstructionForm} />
        </div>
      </div>
      <Button title="Submit" onClick={onSend} />
    </div>
  );
}
