<template>
  <div>
    <h1>Greeting,{{ userName }}</h1>
    <button @click="logout">Logout</button>
    <button @click="invoices">invoices</button>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const userName = ref(window.user);
function logout() {
  window.user = null;
  router.push({ name: "home" });
}
function invoices() {
  router.push({ name: "invoices", query: { logout: null } });
}
</script>
<style lang="less" scoped></style>
