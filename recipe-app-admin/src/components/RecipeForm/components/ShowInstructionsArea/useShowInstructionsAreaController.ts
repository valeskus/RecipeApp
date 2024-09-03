import { useCallback } from 'react';

import { InstructionItem } from '../../../../models';

export interface ShowInstructionsAreaControllerParams {
  instructions: Array<InstructionItem>;
  onRemove: (itemDescription: string) => void;
}

export const useShowInstructionsAreaController = ({
  onRemove }: ShowInstructionsAreaControllerParams) => {

  const removeInstruction = useCallback((e: any) => {
    onRemove(e.target.value);
  }, [onRemove]);

  return {
    removeInstruction,
  };
};
