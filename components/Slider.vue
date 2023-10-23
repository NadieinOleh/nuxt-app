<template>
  <section>
    <h2 class="text-center mb-3 mb-lg-5">{{ data.testTaskSlidesBlockTitle }}</h2>

    <carousel :items-to-show="1">
      <slide
        class="carousel-item"
        v-for="(item, index) in JSON.parse(data.testTaskSlidesBlockSlides)"
        :key="item.key"
        :class="{ active: index === 0 }"
      >
        <div class="row ">
          <div class="col-lg-6 mb-md-3">
            <h3 class="mb-2">{{ item.title }}</h3>
            <p class="mb-2">{{ item.subtitle }}</p>
            <p class="mb-2" v-html="item.description"></p>
            <NuxtLink class="button" :to="item.buttonLink">
              {{ item.buttonText }}
            </NuxtLink>
          </div>

          <div class="col-lg-6 mb-md-3">
            <img class="img" :src="item.image" :alt="item.imageAlt" />
          </div>
        </div>
      </slide>

      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </section>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel';
import { useSiteData } from '../compositions/UseSiteData.vue';

const { data } = await useSiteData();
</script>

<style>
.carousel__pagination-button::after {
  background-color: #f00;
  opacity: 0.3;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 0 5px;
}
.carousel__pagination-button:hover::after, .carousel__pagination-button--active::after {
  background-color: #f00;
  opacity: 1;
}

</style>
