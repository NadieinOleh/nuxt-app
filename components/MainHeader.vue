<template>
  <div class="container-md py-5">
    <div class="row">
      <div class="col-md-6">
        <h1>{{ data.testTaskHeaderTitle }}</h1>
        <div v-html="data.testTaskHeaderText"></div>
        <Button />
      </div>
      <div class="col-md-6">
        <img
          :src="data.testTaskHeaderImage"
          :alt="data.testTaskHeaderImageAltText"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useSiteData } from '../compositions/UseSiteData';

const { data } = await useSiteData();
</script>
