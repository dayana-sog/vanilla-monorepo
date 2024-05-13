# Vanilla Preset

<div align="center"> 
	<a href="https://imgbox.com/KbvFfNaE" target="_blank"><img src="https://thumbs2.imgbox.com/85/89/KbvFfNaE_t.png" alt="image host"/></a>
</div>

Vanilla Preset is a package designed to enhance the functionality of PrimeVue when using the unstyled mode. It provides additional configurations and options to streamline your development process.

## Download

Vanilla Preset is available at  [npm](https://www.npmjs.com/package/@vanilla-pdmfc/preset).

## Getting started

```
# Using npm
npm install @vanilla-pdmfc/preset

# Using yarn
yarn add @vanilla-pdmfc/preset

# Using pnpm
pnpm add @vanilla-pdmfc/preset

```

## Usage

Unstyled mode is disabled by default for all components. Using the PrimeVue plugin during installation, set `unstyled` as true to enable it globally. Visit the [Unstyled mode](https://tailwind.primevue.org/vite/) documentation for more information and examples.

```js
import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import VanillaPreset from  "@vanilla-pdmfc/preset";

const app = createApp(App);
app.use(PrimeVue, {
	unstyled:  true,
	pt:  VanillaPreset,
});
```

## Note

This package is specifically designed to be used with PrimeVue + Tailwind, especially when using the unstyled mode. It enhances the functionality and provides additional configurations tailored for this mode. Make sure to set `unstyled: true` when using this preset.

## License

Copyright (c) 2015-present Razvan Stoenescu

[MIT License](http://en.wikipedia.org/wiki/MIT_License)