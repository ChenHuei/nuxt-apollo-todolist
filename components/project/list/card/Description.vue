<template>
  <div class="card-description">
    <img class="card-description-cover" :src="image" alt="cover" />
    <basic-text level="p" class="card-description-author">
      {{ title }}
    </basic-text>
    <basic-text level="p" class="card-description-views">
      {{ formatViews }}
    </basic-text>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { toThousands } from '@/utils'

@Component
export default class CardDescription extends Vue {
  @Prop()
  title: string | undefined

  @Prop()
  views: number | undefined

  @Prop()
  image: string | undefined

  get formatViews(): string {
    return toThousands(this.views ?? 0)
  }
}
</script>

<style lang="scss" scoped>
.card-description {
  @include display-flex(flex-start);

  &-cover {
    @include size(24px);

    margin-right: 12px;
    border-radius: 50%;
  }

  &-author {
    margin-right: 8px;
  }
}
</style>
