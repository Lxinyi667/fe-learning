<script setup>
// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
      <nav>
        <RouterLink to="/reactive">响应式API</RouterLink>
        <RouterLink to="/component">组件</RouterLink>
      </nav>
  </header>
<main>
  <RouterView />
</main>

</template>

<style scoped>
*{
  margin:0;
  padding: 0;
  list-style: none;
}
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  text-align: center;
  height: 60px;
  line-height: 60px;
  background-color: lightpink;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  font-size: 20px;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

</style>
