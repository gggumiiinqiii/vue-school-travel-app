<template>
  <!-- noopener 安全增强和资源隔离 -->
  <a
    v-if="isExternal"
    target="_blank"
    ref="noopener"
    class="external-link"
    :href="props.to"
    ><slot></slot
  ></a>
  <router-link v-else v-bind="$props" class="internal-link"
    ><slot></slot
  ></router-link>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { RouterLink } from "vue-router";
const props = defineProps({
  ...RouterLink.props,
});

const isExternal = computed(() => {
  return typeof props.to === "string" && props.to.startsWith("http");
});
</script>

<style lang="less" scoped></style>
