<template>
  <div>
    <h3 class="mb-3">{{ data.testTaskSecondBlockSideNavigationTitle }}</h3>
    <ListNav :isRow="false" />
  </div>
</template>

<script setup>
import { useSiteData } from '../compositions/UseSiteData';

const { data } = await useSiteData();
</script>
