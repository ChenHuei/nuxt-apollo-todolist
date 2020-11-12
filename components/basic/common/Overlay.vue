<template>
  <transition name="fade" v-on="$listeners">
    <div v-if="isVisible" :class="classHandler" @click.self="$emit('close')">
      <slot></slot>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { ClassObject } from '@/types'

@Component
export default class BasicOverLay extends Vue {
  @Prop({ default: false })
  isVisible: boolean | undefined

  @Prop({ default: false })
  isLoading: boolean | undefined

  get classHandler(): ClassObject {
    return {
      overlay: true,
      loading: this.isLoading ?? false,
    }
  }

  mounted() {
    document.body.appendChild(this.$el)

    this.$once('hook:beforeDestroy', () => {
      const parent = this.$el.parentNode

      if (parent) {
        parent.removeChild(this.$el)
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.overlay {
  @include size(100%);
  @include display-flex();

  position: fixed;
  top: 0;
  left: 0;
  z-index: z-index('overlay');
  overflow: hidden;
  background-color: var(--mask);

  &.loading {
    z-index: 3000;
  }
}
</style>
