import { EventService } from './EventService';
import { Sentry } from './vendors';

export interface Events {
    'app:start': undefined;
    'app:error': {
        moduleName: string;
        error: unknown;
    };
    'view:categories-list': undefined;
    'view:filter': undefined;
    'view:recipe-details': undefined;
    'view:recipes-list': undefined;
    'view:settings': undefined;
    'view:sort': undefined;

    'action:change-language': 'ua' | 'en';
    'action:change-sort': string;
    'action:change-card-type': 'grid' | 'linear';
    'action:change-filter': string;

    'action:search': string;
    'action:search-reset': undefined;
    'action:search-category': string;

    'action:recipe-details:prescription-section-change': 'Ingredients' | 'Instructions';
    'action:recipe-details:nutrients-section-change': '100g' | 'Serving' | 'AllServings';
    'action:recipe-details:servings-count-change': number;
}

EventService.addListener('app:start', () => {
    Sentry.reportAction('app:start');
});

EventService.addListener('app:error', (context) => {
    Sentry.reportError(context.moduleName, context.error);
});

EventService.addListener('view:categories-list', () => {
    Sentry.reportAction('view:categories-list');
});

EventService.addListener('view:filter', () => {
    Sentry.reportAction('view:filter');
});

EventService.addListener('view:recipe-details', () => {
    Sentry.reportAction('view:recipe-details');
});

EventService.addListener('view:recipes-list', () => {
    Sentry.reportAction('view:recipes-list');
});

EventService.addListener('view:settings', () => {
    Sentry.reportAction('view:settings');
});

EventService.addListener('view:sort', () => {
    Sentry.reportAction('view:sort');
});

EventService.addListener('action:change-language', (context) => {
    Sentry.reportAction(`action:change-language:${context}`);
});

EventService.addListener('action:change-sort', (context) => {
    Sentry.reportAction(`action:change-sort:${context}`);
});

EventService.addListener('action:change-card-type', (context) => {
    Sentry.reportAction(`action:change-card-type:${context}`);
});

EventService.addListener('action:search', (context) => {
    Sentry.reportAction(`action:search:${context}`);
});

EventService.addListener('action:search-reset', () => {
    Sentry.reportAction('action:search-reset');
});

EventService.addListener('action:change-filter', (context) => {
    Sentry.reportAction(`action:change-filter:${context}`);
});

EventService.addListener('action:recipe-details:prescription-section-change', (context) => {
    Sentry.reportAction(`action:recipe-details:prescription-section-change:${context}`);
});

EventService.addListener('action:recipe-details:nutrients-section-change', (context) => {
    Sentry.reportAction(`action:recipe-details:nutrients-section-change:${context}`);
});

EventService.addListener('action:recipe-details:servings-count-change', (context) => {
    Sentry.reportAction(`action:recipe-details:servings-count-change:${context}`);
});

EventService.addListener('action:search-category', (context) => {
    Sentry.reportAction(`action:search-category:${context}`);
});
