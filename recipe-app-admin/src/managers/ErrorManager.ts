export class ErrorManager {
  public static createFrom = (error: unknown) => {
    if (error && typeof error === 'object' && 'message' in error && typeof error.message === 'string') {
      return new Error(error.message);
    }

    return new Error('unknown error');
  };
}
