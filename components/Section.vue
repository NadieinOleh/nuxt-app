<template>
  <div v-if="pending">loading</div> 
  <div v-else>
    <h2 class="m-0 mb-lg-5 mb-md-4 p-0">{{ title }} </h2>
    <div class="container-md" v-for="(item, index) in parsedList" :key="item.key">
      <div class="row mb-5">
        <div
          v-if="index === 0 || index === 2"
          class="col-lg-6"
        >
          <img class="img" :src="item.image" :alt="item.imageAltAtr" />
        </div>

        <div v-else class="col-lg-6 mb-md-3">
          <h3 class="mb-2">{{ item.title }}</h3>
          <p class="mb-2">{{ item.subtitle }}</p>
          <p class="mb-2" v-html="item.text"></p>
          <NuxtLink class="button" :to="item.buttonLink">{{ item.buttonText }}</NuxtLink>
        </div>

        <div
          v-if="index === 0 || index === 2"
          class="col-lg-6 "
        >
          <h3 class="mb-2">{{ item.title }}</h3>
          <p class="mb-2">{{ item.subtitle }}</p>
          <p class="mb-2" v-html="item.text"></p>
          <NuxtLink class="button" :to="item.buttonLink">{{ item.buttonText }}</NuxtLink>
        </div>

        <div v-else class="col-lg-6">
          <img class="img" :src="item.image" :alt="item.imageAltAtr" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useSiteData } from '../compositions/UseSiteData';

const { data } = await useSiteData();


const title = data._value ? data._value.testTaskSecondBlockTitle : '';
const list = data._value ? data._value.testTaskSecondDescriptiveBlockItems : '';

const parsedList = list !== '' ? JSON.parse(list) : [];
</script>

<style>
.img {
  max-width: 476px;
  max-height: 383px;
}
</style>
