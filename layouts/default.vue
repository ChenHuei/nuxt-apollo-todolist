<template>
  <div class="default-layout-wrapper">
    <div class="default-layout-container">
      <Nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class DefaultLayout extends Vue {}
</script>

<style lang="scss" scoped>
.default-layout-wrapper {
  @include size(100vw, 100vh);

  background-color: var(--primary-light);
}
</style>
