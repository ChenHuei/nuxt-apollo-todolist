<template>
  <div class="list">
    <Card v-for="item in list" :key="item.id" v-bind="item" v-on="$listeners" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { Video } from '@/types/project'

import Card from './list/Card.vue'

@Component({
  inheritAttrs: false,
  components: { Card },
})
export default class List extends Vue {
  @Prop()
  list: Video[] | undefined
}
</script>

<style lang="scss" scoped>
.list {
  @include size(50%, auto);

  padding-left: 52px;
}
</style>
