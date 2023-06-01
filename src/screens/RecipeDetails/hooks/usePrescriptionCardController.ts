import {useCallback, useState} from 'react';
import {useServingsController} from './useServingsController';

export enum PrescriptionCardSection {
  Ingredients = 'Ingredients',
  Instructions = 'Instructions',
}

export const PrescriptionCardLabels = {
  [PrescriptionCardSection.Ingredients]: 'Ingredients',
  [PrescriptionCardSection.Instructions]: 'Instructions',
};

export const usePrescriptionCardController = () => {
  const {servingsCount, onCountChange} = useServingsController();

  const [activeSection, setActiveSection] = useState(
    PrescriptionCardSection.Ingredients,
  );

  const changeSection = useCallback((item: PrescriptionCardSection) => {
    setActiveSection(item);
  }, []);

  return {
    servingsCount,
    onCountChange,
    activeSection,
    changeSection,
  };
};
