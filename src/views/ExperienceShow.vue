<template>
  <section>
    <h1>{{ experience.name }}</h1>
    <img :src="`/images/${experience.image}`" :alt="experience.name" />
    <p>{{ experience.description }}</p>
  </section>
</template>
<script setup lang="ts">
import sourceData from "@/data.json";
import { computed } from "vue";
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  experienceSlug: { type: String, required: true },
  slug: {
    type: String,
    required: true,
  },
});
const destinationId = computed(() => {
  return parseInt(props.id);
});
const destination = computed(() => {
  return sourceData.destinations.find(
    (destination) => destination.id == destinationId.value
  );
});
const experience = computed(() => {
  return destination.value.experiences.find(
    (experience) => experience.slug == props.experienceSlug
  );
});
</script>
<style lang="less" scoped></style>
