<template>
  <div class="main">
    <Header v-model="title" title="VIDEO LIST" @enter="enterHandler" />
    <List :list="videos" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

// gql
import { GET_VIDEOS, POST_VIDEO } from '@/gql/videos'

// components
import Header from '@/components/project/Header.vue'
import List from '@/components/project/List.vue'

@Component({
  components: { Header, List },
  apollo: {
    videos: GET_VIDEOS,
  },
})
export default class IndexPage extends Vue {
  title = ''

  enterHandler(): void {
    this.$apollo
      .mutate({
        mutation: POST_VIDEO,
        variables: {
          title: this.title,
        },
      })
      .then(() => {
        this.title = ''
        this.$apollo.queries.videos.refetch()
      })
  }
}
</script>

<style lang="scss" scoped>
.main {
  @include size(100%);
  @include display-flex();

  flex-direction: column;
}
</style>
