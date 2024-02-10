<script setup>
import AppsItem from './AppsItem.vue'
import GroupIcon from './icons/IconGroup.vue'
</script>

<template>
  <AppsItem>
    <template #icon>
      <GroupIcon />
    </template>
    <template #heading>Forum App</template>
    <a href="https://forum.chinh.ca/" target="_blank" rel="noopener">...in development >>></a>
  </AppsItem>
</template>
