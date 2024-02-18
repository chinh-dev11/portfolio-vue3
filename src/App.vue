<script setup>
import MyApps from '@/components/MyApps.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <h1>Welcome to my Portfolio!</h1>
      <p>under construction ...</p>
    </div>
  </header>
  <main>
    <MyApps />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);

    p {
      text-align: right;
    }
  }
}
</style>
