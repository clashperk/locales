# Locales

This repository contains translations for ClashPerk bot.

## Adding a new Language

If you are not a programmer, you can still help with the translation.
First, download the file and translate the texts using any text editor like Notepad or VS Code.
Once you are done, send me the file over Discord.

## Guidelines

- Please do not use any vulgar language.
- Please use proper punctuation.
- Only change what is between the quotes.
- Do not change anything that is between `{{}}`
- The character `\n` represents a new line, use it wisely.

## Example

```ts
export default {
  common: {
    no_clans_found: 'No clans were found in our Database for the argument you specified.',
    success: 'Successfully linked {{clan}} to {{guild}}.'
  }
};
```

```ts
export default {
  common: {
    no_clans_found: 'No se encontraron clanes en nuestra base de datos para el argumento que especificó.',
    success: 'Vinculado con éxito {{clan}} a {{guild}}.'
  }
};
```
