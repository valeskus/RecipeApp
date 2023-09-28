import './RecipeForm.style.css';

import { Button } from '../common/Button';
import { Input } from '../common/Input';
import { SelectComponent } from '../common/Select/Select';

import { IngredientForm } from './components/IngredientForm';
import { InstructionForm } from './components/InstructionForm';
import { useRecipeFormController } from './useRecipeFormController';
import { ShowIngredientsArea } from './components/ShowIngredientsArea';
import { ShowInstructionsArea } from './components/ShowInstructionsArea';

export function RecipeForm(): JSX.Element {
  const { unitsValue,
    difficultyValue,
    categoriesValue,
    ingredients,
    instructions,
    productsList,
    productsValue,
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
    onAddIngredient,
    onAddInstruction,
    removeIngredient,
    removeInstruction,
    title,
    titleUA,
    description,
    descriptionUA,
    time,
    amount,
    image,
    servingsCount,
  } = useRecipeFormController();

  return (
    <div className="recipeFormContainer">
      <div className="formsContainer">
        <div className="formItems">
          <Input label="Title :" type="text" placeholder="Title" onChange={handleTitle} value={title}/>
          <Input label="Title UA:" type="text" placeholder="Назва" onChange={handleUATitle}  value={titleUA}/>
          <Input label="Description:" type="text" placeholder="Description"
            onChange={handleDescription}  value={description}
          />
          <Input label="Description UA:" type="text" placeholder="опис"
            onChange={handleDescriptionUA} value={descriptionUA}
          />
          <SelectComponent label="Units:"
            placeholder="units" multiple={false} options={unitsValue} onChange={handleUnits}
          />
        </div>
        <div className="formItems">
          <Input label="Image:" type="url" placeholder="image url" onChange={handleImage} value={image}/>
          <Input label="Time:" type="number" placeholder="time in minutes" onChange={handleTime} value={`${time}`}/>
          <Input label="Amount:" type="number" placeholder="amount" onChange={handleAmount} value={`${amount}`}/>
          <Input label="Servings Count:" type="number"
            placeholder="number of servings count" onChange={handleServingsCount} value={`${servingsCount}`}
          />
          <SelectComponent label="Difficulty:" placeholder="---" multiple={false}
            options={difficultyValue} onChange={handleDifficulty}
          />
        </div>
        <div className="formItems">
          <SelectComponent label="Categories:" placeholder="---" multiple={true}
            options={categoriesValue} onChange={handleCategoryArray}
          />
        </div>
      </div>
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
