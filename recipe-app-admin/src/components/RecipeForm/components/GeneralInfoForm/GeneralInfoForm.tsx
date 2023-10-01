import './GeneralInfoForm.style.css';

import { Input } from '../../../common/Input';
import { SelectComponent } from '../../../common/Select';

import { GeneralInfoFormControllerParams, useGeneralInfoFormController } from './useGeneralInfoFormController';

interface Props extends GeneralInfoFormControllerParams {}

export function GeneralInfoForm(props: Props): JSX.Element {
  const { unitsValue,
    difficultyValue,
    categoriesValue,
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
    title,
    titleUA,
    description,
    descriptionUA,
    time,
    amount,
    image,
    servingsCount,
  } = useGeneralInfoFormController(props);

  return (

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
  );
}
