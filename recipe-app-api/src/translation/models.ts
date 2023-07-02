/* eslint-disable spellcheck/spell-checker */
export enum Languages {
    UA = 'ua',
    EN = 'en',
}
/* eslint-enable spellcheck/spell-checker */

export const DEFAULT_LANGUAGE = Languages.EN;

export interface Translations<T> {
    [Languages.UA]: T;
}

export interface Translatable<T> {
    translations: Translations<T>;
}

export type Translated<T> = Omit<Translatable<T>, 'translations'>
