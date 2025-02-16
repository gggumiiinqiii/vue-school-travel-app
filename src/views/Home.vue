<template>
  <div class="home">
    <h1>All Destinations</h1>
    <button @click="TriggerRouterError">Trigger Router Error</button>
    <button @click="addDynamicRoute">addDynamicRoute</button>
    <router-link to="/dynamic">visit dynamic route</router-link>

    <div class="destinations">
      <router-link
        v-for="destination in destinations"
        :key="destination.id"
        :to="{
          name: 'destination.show',
          params: { id: destination.id, slug: destination.slug },
        }"
        ><h2>
          {{ destination.name }}
        </h2>
        <img :src="`/images/${destination.image}`" :alt="destination.name" />
      </router-link>
    </div>
  </div>
</template>
<script setup lang="ts">
import sourceData from "@/data.json";
import { ref, reactive } from "vue";
import {
  useRouter,
  isNavigationFailure,
  NavigationFailureType,
} from "vue-router";
const destinations = reactive(sourceData.destinations);
const router = useRouter();
async function TriggerRouterError() {
  const navigationFailure = await router.push("/");
  //路由导航的错误
  if (
    isNavigationFailure(navigationFailure, NavigationFailureType.duplicated)
  ) {
    console.log(navigationFailure.to);
    console.log(navigationFailure.from);
  } else {
  }
}
function addDynamicRoute() {
  const removeRoute = router.addRoute({
    name: "dynamic",
    path: "/dynamic",
    component: () => import("@/views/Login.vue"),
  });
}
</script>
<style lang="less" scoped></style>
