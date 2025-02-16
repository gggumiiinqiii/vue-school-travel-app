<template>
  <div>
    <section v-if="destination" class="destination">
      <h2>{{ destination.name }}</h2>
      <GoBack />
      <div class="destination-details">
        <img
          :src="`/images/${destination.image}`"
          :alt="destination.name"
          srcset=""
        />
        <p>{{ destination.description }}</p>
      </div>
    </section>
    <section class="experiences">
      <h2>Top Expericnces in {{ destination.name }}</h2>
      <div class="cards">
        <!-- 之前的params可以传递下去 -->
        <router-link
          v-for="experience in destination.experiences"
          :key="experience.slug"
          :to="{
            name: 'experience.show',
            params: { experienceSlug: experience.slug },
          }"
        >
          <ExperienceCard :experience="experience" />
        </router-link>
      </div>
      <!-- 路由的子组件 -->
      <router-view></router-view>
    </section>
  </div>
</template>
<script setup lang="ts">
import ExperienceCard from "@/components/ExperienceCard.vue";
import GoBack from "@/components/GoBack.vue";
import { useRoute, useRouter } from "vue-router";
import { computed, ref, watchEffect } from "vue";
import sourceData from "@/data.json";
import { watch } from "vue";
const route = useRoute();
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
});
const destinationId = computed(() => {
  return parseInt(props.id);
  return parseInt(route.params.id as string);
});

const destination = computed(() => {
  return sourceData.destinations.find(
    (destination) => destination.id == destinationId.value
  );
});
// let destination = ref(null);
// async function getData() {
//   try {
//     let res = await fetch(
//       `https://travel-dummy-api.netlify.app/${route.params.slug}`
//     );
//     destination.value = await res.json();
//     console.log("11", destination.value);
//   } catch (e) {
//     console.log("e", e);
//   }
// }

// getData();
</script>
<style lang="less" scoped></style>
