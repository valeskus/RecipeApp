import './RecipeForm.style.css';

import { Button } from '../common/Button';

import { IngredientForm } from './components/IngredientForm';
import { InstructionForm } from './components/InstructionForm';
import { useRecipeFormController } from './useRecipeFormController';
import { ShowIngredientsArea } from './components/ShowIngredientsArea';
import { ShowInstructionsArea } from './components/ShowInstructionsArea';
import { GeneralInfoForm } from './components/GeneralInfoForm/GeneralInfoForm';

export function RecipeForm(): JSX.Element {
  const {
    ingredients,
    instructions,
    productsList,
    productsValue,
    onSend,
    onAddIngredient,
    onAddInstruction,
    removeIngredient,
    removeInstruction,
    handleGeneralForm,
  } = useRecipeFormController();

  return (
    <div className="recipeFormContainer">
      <GeneralInfoForm onChange={handleGeneralForm}/>
      <div className="dynamicFormContainer">
        <div  className="dynamicForm">
          <IngredientForm products={productsList} onAdd={onAddIngredient}/>
          <ShowIngredientsArea currentProducts={ingredients} products={productsValue} onRemove={removeIngredient}/>
        </div>
        <div className="dynamicForm">
          <InstructionForm onChange = {onAddInstruction}/>
          <ShowInstructionsArea onRemove={removeInstruction} instructions={instructions}/>
        </div>
      </div>
      <Button title="Submit" onClick={onSend} />
    </div>
  );
}
