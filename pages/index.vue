<template>
  <div class="container">
    <Logo />
    <h1 class="title">nuxt-apollo-typescript</h1>
    <div class="links">
      {{ users }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { GET_USERS } from '@/gql/user'

@Component({
  apollo: {
    users: GET_USERS,
  },
})
export default class IndexPage extends Vue {
  mounted() {
    console.log(this.$apollo)
  }
}
</script>

<style lang="scss" scoped>
.container {
  @include size(100%, auto);
  @include display-flex();

  color: var(--primary);
}
</style>
