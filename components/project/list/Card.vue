<template>
  <div class="card">
    <div class="card-info">
      <basic-text level="h5" class="card-title">{{ title }}</basic-text>
      <card-description v-bind="author" :views="views" />
    </div>
    <div class="card-delete" @click="$emit('delete', id)">X</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

// tpyes
import { Author } from '@/types/project'

// components
import CardDescription from './card/Description.vue'

@Component({
  components: { CardDescription },
})
export default class Card extends Vue {
  @Prop()
  id: number | undefined

  @Prop()
  title: string | undefined

  @Prop()
  views: number | undefined

  @Prop()
  author: Author | undefined
}
</script>

<style lang="scss" scoped>
.card {
  @include size(100%, auto);
  @include display-flex(space-between);

  padding: 12px 12px 12px 0;
  border-bottom: 1px solid var(--grey);
  cursor: pointer;

  &-delete {
    @include size(24px);
    @include display-flex();
    @include hover();

    border-radius: 50%;
    color: var(--white);
    background-color: var(--error);
    opacity: 0;
  }

  &-title {
    margin-bottom: 8px;
  }

  &:hover {
    .card {
      &-info {
        opacity: 0.6;
      }
      &-delete {
        opacity: 1;
      }
    }
  }
}
</style>
