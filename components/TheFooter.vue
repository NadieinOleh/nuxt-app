<template>
  <footer class="footer">
    <nav class="navbar custom-bg p-4 d-flex gap-5 justify-content-start">
      <NuxtLink active-class="active" class="custom-link" to="/contacs">social Links</NuxtLink>
      <NuxtLink active-class="active" class="custom-link" to="/social align-self-center">social Links</NuxtLink>
    </nav>
  </footer>
</template>

<style>
.custom-link {
  text-decoration: none;
  color: inherit;
  color: #000;

  text-align: center;
  font-size: 20px;

  font-weight: 700;
}
.custom-link:hover {
  color: #f00;
}

</style>
