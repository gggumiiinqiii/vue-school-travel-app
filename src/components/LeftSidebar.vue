<template>
  <ul>
    <li><router-link :to="{ name: 'protected' }">Protected</router-link></li>
    <li><router-link :to="{ name: 'invoices' }">Invoices</router-link></li>
  </ul>
</template>
<script setup lang="ts"></script>
<style lang="less" scoped>
ul {
  background-color: #fff;
  padding: 10px;
  list-style: none;
  margin-right: 20px;
}
li {
  margin: 10px;
}
</style>
