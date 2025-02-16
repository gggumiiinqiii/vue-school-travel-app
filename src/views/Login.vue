<template>
  <div class="login">
    <form class="form" @submit.prevent="login">
      <h1>Login</h1>
      <label for="username">Username</label>
      <input v-model="username" type="text" class="input" />
      <label for="password">password</label>
      <input v-model="password" type="password" class="input" />
      <button class="btn" type="submit">Login</button>
    </form>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
const username = ref();
const password = ref();
function login() {
  console.log("123");
  window.user = username.value;
  const redirectPath = route.query.redirect || "/protected";
  console.log(redirectPath);
  router.push(redirectPath);
}
</script>
<style lang="less" scoped></style>
