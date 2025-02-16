<template>
  <div>
    <h1>NotFound</h1>
    <div>
      Oops not found Try going
      <span><router-link :to="{ name: 'home' }">home</router-link></span>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="less" scoped></style>
