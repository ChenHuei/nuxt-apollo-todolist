<template>
  <basic-overlay :is-visible="isVisible" :is-loading="true">
    <transition @leave="$emit('update:isVisible', false)">
      <div class="basic-loading">
        <i class="el-icon-loading basic-loading-icon"></i>
      </div>
    </transition>
  </basic-overlay>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

import BasicOverlay from './common/Overlay.vue'

@Component({
  components: { BasicOverlay },
})
export default class BasicLoading extends Vue {
  @Prop({ default: false })
  isVisible: boolean | undefined
}
</script>

<style lang="scss" scoped>
.basic-loading {
  @include size(100%);
  @include display-flex();

  &-icon {
    font-size: rem(60px);
    color: var(--white);
  }
}
</style>
