<script setup lang="ts">
import { Box, Item } from '@/components/index'

</script>

<template>
  <h1 class='text-indigo-400'>Hello world</h1>

  <Box grid :columns='6' :spacing='4' class='h-96'>
    <Item :colStart='2' :colSpan='4' class='bg-indigo-400'></Item>
    <Item :colStart='1' :colSpan='3' class='bg-indigo-400'></Item>
    <Item :colEnd='7' :colSpan='2' class='bg-indigo-400'></Item>
    <Item :colStart='1' :colEnd='7' class='bg-indigo-400'></Item>
  </Box>
</template>
