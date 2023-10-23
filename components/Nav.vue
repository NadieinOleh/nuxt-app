<template>
  <h3 class="mb-3">{{ title }}</h3>
  <ListNav :isRow="false" />

</template>

<script setup>
import { useSiteData } from '../compositions/UseSiteData';

const { data } = await useSiteData();
const title = data._value.testTaskSecondBlockSideNavigationTitle
</script>
