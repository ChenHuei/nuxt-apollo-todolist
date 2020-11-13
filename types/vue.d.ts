import Vue from 'vue'

declare module 'vue/types/vue' {
  interface Vue {
    $apollo: any
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    apollo?: any
  }
}
