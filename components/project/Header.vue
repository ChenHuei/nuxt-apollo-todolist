<template>
  <div class="header">
    <basic-text level="h1" class="header-title">{{ title }}</basic-text>
    <div class="header-input">
      <basic-text class="header-input-label">標題：</basic-text>
      <basic-input :value="value" v-on="$listeners" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class Header extends Vue {
  @Prop()
  title: string | undefined

  @Prop()
  value: string | undefined
}
</script>

<style lang="scss" scoped>
.header {
  @include size(50%, auto);

  margin-bottom: 8px;

  &-title {
    margin-bottom: 8px;
    text-align: center;
  }

  &-input {
    @include size(100%, auto);
    @include display-flex();

    &-label {
      min-width: 40px;
      margin-right: 12px;
    }
  }
}
</style>
