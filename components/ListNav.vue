<template>
  <ul class="d-flex my-0 p-0" :class="isRow ? 'flex-row' : 'flex-column'">
    <li
      class="list-unstyled text-uppercase"
      :class="isRow ? 'mx-3' : 'my-2'"
      v-for="link in links"
      :key="link.id"
    >
      <NuxtLink :active-class="active" class="custom-text" :to="link.src">{{
        link.title
      }}</NuxtLink>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    isRow: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {
      links: [
        {
          id: 1,
          src: '/nav/1',
          title: 'nav1',
        },
        {
          id: 2,
          src: '/nav/2',
          title: 'nav2',
        },
        {
          id: 3,
          src: '/nav/3',
          title: 'nav3',
        },
      ],

      active: 'custom-active',
    };
  },
};
</script>

<style>
.custom-text {
  color: inherit;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-decoration: none;
  text-align: center;
}
.custom-text:hover {
  color: #f00;
}
.custom-active {
  color: #f00;
}
</style>
