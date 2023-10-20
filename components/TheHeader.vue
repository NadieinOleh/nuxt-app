<template>
  <header>
    <nav
      class="navbar custom-bg d-flex justify-content-between align-items-center px-5 py-4"
    >
      <NuxtLink to="/" class="navbar-brand text-uppercase custom-logo p-0 m-0" >Logo</NuxtLink>
      
      <ListNav :isRow="true"/>
    </nav>
  </header>
</template>

<style>
.custom-bg {
  background-color: #d9d9d9;
}
.custom-bg {
  text-align: center;

  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
</style>
