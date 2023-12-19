import { Middleware, Dispatch, AnyAction } from 'redux';

import { EventService } from '@services/EventService';

import { setError } from '../errors/errorsActions';

export const errorHandler: Middleware = () => (
  next: Dispatch,
) => (action: AnyAction) => {
  next(action);

  if (action.type.includes('error') && action.type !== '@error/reset') {

    EventService.emit('app:error', {
      moduleName: action.name,
      error: new Error(JSON.stringify(action.payload)),
    });

    setError(action.payload, next);
  }

};
