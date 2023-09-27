<script setup lang="ts">

import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})
</script>

<template>

  <component :is="$route.meta.layout || 'div'"></component>
</template>

<style scoped>
</style>
