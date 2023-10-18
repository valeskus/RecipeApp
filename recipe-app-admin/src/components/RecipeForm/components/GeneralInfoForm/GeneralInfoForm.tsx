import './GeneralInfoForm.style.css';

import {  Input } from '../../../common/inputs';
import { SelectComponent } from '../../../common/Select';
// import { FormStatus } from '../../../common/FormStatus';
import { ImageInputsBox } from '../../../common/ImageInputsBox';

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
    // handleImageFile,
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
    // imageStatus,
    servingsCount,
    categoriesArray,
    onChangeInput,
  } = useGeneralInfoFormController(props);

  return (

    <div className="formsContainer">
      <div className="formItems">
        <Input label="Title :" type="text" placeholder="Title"
          onBlur={onChangeInput}
          onChange={handleTitle}
          value={title}
        />
        <Input label="Title UA:" type="text" placeholder="Назва" onBlur={onChangeInput}
          onChange={handleUATitle}  value={titleUA}
        />
        <Input label="Description:" type="text" placeholder="Description" onBlur={onChangeInput}
          onChange={handleDescription}  value={description}
        />
        <Input label="Description UA:" type="text" placeholder="опис" onBlur={onChangeInput}
          onChange={handleDescriptionUA} value={descriptionUA}
        />
        <SelectComponent label="Units:"
          placeholder="units" multiple={false} options={unitsValue} onChange={handleUnits} onBlur={onChangeInput}
        />
      </div>
      <div className="formItems">

        <ImageInputsBox onChange={handleImage} component="recipe" image={image}/>

        <Input label="Time:" type="number" placeholder="time in minutes" onChange={handleTime} onBlur={onChangeInput}
          value={`${time}`}
        />
        <Input label="Amount:" type="number" placeholder="amount" onChange={handleAmount} onBlur={onChangeInput}
          value={`${amount}`}
        />
        <Input label="Servings Count:" type="number"
          placeholder="number of servings count" onChange={handleServingsCount} onBlur={onChangeInput}
          value={`${servingsCount}`}
        />
        <SelectComponent label="Difficulty:" placeholder="---" multiple={false}
          options={difficultyValue} onChange={handleDifficulty} onBlur={onChangeInput}
        />
      </div>
      <div className="formItems">
        <SelectComponent label="Categories:" placeholder="---" multiple={true}
          options={categoriesValue} onChange={handleCategoryArray} onBlur={onChangeInput} value={categoriesArray}
        />
      </div>
    </div>
  );
}
