import { EventEmitter } from 'eventemitter3';
import { InteractionManager } from 'react-native';

import type { Events } from './events';
import { Sentry } from './vendors';

export namespace EventService {
  const eventEmitter = new EventEmitter<keyof Events>();

  export function init() {
    Sentry.init();
  }

  export function emit<T extends keyof Events>(
    ...args: Events[T] extends undefined
      ? [name: T]
      : [name: T, context: Events[T]]
  ) {
    const [name, context] = args;
    eventEmitter.emit(name, context);
  }

  type ListenerFunction = () => Promise<void> | void;

  type ListenerFunctionWithContext<T extends keyof Events> = (context: Events[T]) => Promise<void> | void;

  export function addListener<T extends keyof Events>(
    name: T,
    listener: Events[T] extends undefined
      ? ListenerFunction
      : ListenerFunctionWithContext<T>,
  ) {
    eventEmitter.addListener(name, (context: Events[T]) => {
      InteractionManager.runAfterInteractions(() => {
        listener(context);
      });
    });
  }
}
