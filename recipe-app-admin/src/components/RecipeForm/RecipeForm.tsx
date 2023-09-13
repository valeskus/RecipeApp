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
    ingredientsFormArray,
    productsValue,
    onAddIngredientForm,
    instructionsFormArray,
    onAddInstructionForm,
    onSend,
    handleTitle,
    handleUATitle,
    handleDescription,
    handleDescriptionUA,
    handleUnits,
    handleImage,
    handleTime,
    handleAmount,
    handleServingsCount,
    handleDifficulty,
    handleCategoryArray,
  } = useRecipeFormController();

  return (
    <div className="recipeFormContainer">
      <div className="formsContainer">
        <Input label="Title :" type="text" placeholder="Title" onChange={handleTitle} />
        <Input label="Title UA:" type="text" placeholder="Назва" onChange={handleUATitle} />
        <Input label="Description:" type="text" placeholder="Description" onChange={handleDescription} />
        <Input label="Description UA:" type="text" placeholder="опис" onChange={handleDescriptionUA} />
        <SelectComponent label="Units:"
          placeholder="units" multiple={false} options={unitsValue} onChange={handleUnits}
        />
        <Input label="Image:" type="url" placeholder="image url" onChange={handleImage} />
        <Input label="Time:" type="number" placeholder="time in minutes" onChange={handleTime} />
        <Input label="Amount:" type="number" placeholder="amount" onChange={handleAmount} />
        <Input label="Servings Count:" type="number"
          placeholder="number of servings count" onChange={handleServingsCount}
        />
        <SelectComponent label="Difficulty:" placeholder="---" multiple={false}
          options={difficultyValue} onChange={handleDifficulty}
        />
        <SelectComponent label="Categories:" placeholder="---" multiple={ true}
          options={categoriesValue} onChange={handleCategoryArray}
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
