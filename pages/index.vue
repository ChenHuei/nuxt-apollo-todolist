<template>
  <div class="main">
    <h1 class="main-title">nuxt-apollo-typescript</h1>
    {{ list }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { GET_LIST } from '@/gql/todo'

@Component({
  apollo: {
    list: GET_LIST,
  },
})
export default class IndexPage extends Vue {
  mounted() {
    console.log(this.$apollo)
  }
}
</script>

<style lang="scss" scoped>
.main {
  @include size(100%);
  @include display-flex();

  flex-direction: columm;
}
</style>
