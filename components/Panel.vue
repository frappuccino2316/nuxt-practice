<template>
  <div class="tile">
    <h2>{{ title }}</h2>
    <p>{{ message }}</p>
    <p>{{ count }}</p>
    <p>{{ three }}</p>
    <button @click="count++">Please click here</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const count = ref(0);

type Props = {
  title: string;
  message: string;
};

const props = defineProps<Props>();

const three = computed(() => {
  return count.value % 3 === 0 ? 'アホになる' : '';
});
</script>
