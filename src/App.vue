<template>
  <TheNavigation />

  <div class="container">
    <!-- sidebar -->
    <router-view
      v-slot="{ Component }"
      class="view left-sidebar"
      name="LeftSidebar"
    >
      <Transition name="fade" mode="out-in">
        <component :is="Component" :key="$route.path"></component>
      </Transition>
    </router-view>
    <!-- main -->
    <!-- 不加找个key组件不会重新re-rendered -->
    <router-view v-slot="{ Component }" class="main-view">
      <!-- name和css的类名有关系 -->
      <Transition name="fade" mode="out-in">
        <component :is="Component" :key="$route.path"></component>
      </Transition>
    </router-view>
  </div>
</template>
<script setup lang="ts">
import TheNavigation from "./components/TheNavigation.vue";
</script>
<style lang="less">
/* 下面我们会解释这些 class 是做什么的 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.container {
  display: flex;
}
.left-sidebar {
  width: 20%;
}
.main-view {
  width: 100%;
}
</style>
