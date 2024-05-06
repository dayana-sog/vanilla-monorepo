# Vanilla Grid

<div align="center"> 
	<a href="https://imgbox.com/KbvFfNaE" target="_blank"><img src="https://thumbs2.imgbox.com/85/89/KbvFfNaE_t.png" alt="image host"/></a>
</div>

Vanilla Grid is a flexible and customizable grid system for Vue.js applications. It provides a rich set of UI components to help you create responsive layouts easily. This README provides essential information to get started with Vanilla Grid.

## Download

Vanilla Grid is available at [npm](https://www.npmjs.com/package/@vanilla-pdmfc/components).

## Getting started

```
# Using npm
npm install @vanilla-pdmfc/components

# Using yarn
yarn add @vanilla-pdmfc/components

# Using pnpm
pnpm add @vanilla-pdmfc/components

```

## Documentation

For detailed usage and examples, head to the [Vanilla Grid Documentation](https://chief-creature-bcd.notion.site/Readme-Grid-8578b7d853aa45b395ace835802081bd?pvs=74).

## Usage

Here's a simple example of how to use Vanilla Grid:

```js
<template>
  <Grid grid columns="3" :spacing='2'>
	  <Item :colSpan='1'>
		  <slot />
	  </Item>
	  <Item :colSpan='2'>
		  <slot />
	  </Item>
	  <Item :colSpan='2'>
		  <slot />
	  </Item>
	  <Item :colSpan='1'>
		  <slot />
	  </Item>
  </Grid>
</template>

<script>
	import { Grid, Item} from  '@vanilla-pdmfc/components'
</script>
```

This example creates a simple grid layout with three columns. You can adjust the number of columns and their sizes according to your needs.

## License

Copyright (c) 2015-present Razvan Stoenescu

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
