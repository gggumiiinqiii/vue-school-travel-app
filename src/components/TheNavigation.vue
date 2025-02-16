<template>
  <div id="nav">
    <AppLink id="logo" to="/">Vue School Travel App</AppLink>

    <AppLink
      v-for="destination in destinations"
      :key="destination.id"
      :to="{
        name: 'destination.show',
        params: { id: destination.id, slug: destination.slug },
      }"
    >
      {{ destination.name }}
    </AppLink>
    <AppLink :to="{ name: 'protected' }">Protected</AppLink>
    <AppLink to="https://www.baidu.com">baidu</AppLink>
  </div>
</template>
<script setup lang="ts">
import sourceData from "@/data.json";
import { reactive } from "vue";
const destinations = reactive(sourceData.destinations);
</script>
<style lang="less" scoped>
#nav .vue-school-active-link {
  color: red;
  border-bottom: 2px solid red;
}
</style>
