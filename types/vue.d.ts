import Vue from 'vue'

declare module 'vue/types/vue' {
  interface Vue {
    $apollo: object
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    apollo?: object
  }
}
