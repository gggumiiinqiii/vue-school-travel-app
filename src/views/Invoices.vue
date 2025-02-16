<template>
  <div>
    <h1>Invoices</h1>
  </div>
</template>
<script setup lang="ts">
import { onBeforeRouteLeave } from "vue-router";
onBeforeRouteLeave((to, from) => {
  const answer = window.confirm("want to leave");
  if (!answer) return false;
});
</script>
<style lang="less" scoped></style>
