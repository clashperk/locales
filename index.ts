import { InitOptions } from 'i18next';

export const fallbackLng = {
    'fr': ['fr-FR', 'en-US'], // French/Français
    'it': ['it-IT', 'en-US'], // Italian/Italiano
    'de': ['de-DE', 'en-US'], // German/Deutsch
    'no': ['no-NO', 'en-US'], // Norwegian/Norsk
    'nl': ['nl-NL', 'en-US'], // Dutch/Nederlands
    'es-ES': ['es-ES', 'en-US'], // Spanish/Español
    'uk': ['uk-UA', 'en-US'], // Ukrainian/Українська
    'pt-BR': ['pt-BR', 'en-US'] // Portuguese/Português
};

export const defaultOptions: InitOptions = {
    debug: false,
    lng: 'en-US',
    load: 'currentOnly',
    defaultNS: 'translation',
    ns: ['translation'],
    fallbackLng: { ...fallbackLng, default: ['en-US'] },
    preload: ['en-US', 'en-GB', 'es-ES', 'fr-FR', 'nl-NL', 'it-IT', 'de-DE', 'no-NO', 'pt-BR']
};
