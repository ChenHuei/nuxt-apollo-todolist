<script lang="ts">
import Vue, { VNode } from 'vue'
import { LEVEL_OPTIONS } from '@/constsnts/component/basic/text'

export default Vue.extend({
  name: 'BasicText',
  props: {
    level: {
      type: String,
      validator: (level) => LEVEL_OPTIONS.includes(level),
      default: 'span',
    },
    color: {
      type: String,
      default: 'black',
    },
    isRequired: {
      type: Boolean,
      default: false,
    },
  },
  render(createElement): VNode {
    return createElement(
      `${this.level}`,
      {
        class: {
          text: true,
          textRequired: this.isRequired,
          [`text-${this.level}`]: true,
        },
        style: {
          color: `var(--${this.color})`,
        },
      },
      [this.$slots.default]
    )
  },
})
</script>

<style lang="scss" scoped>
.text {
  @include font(12px);

  word-wrap: break-word;

  &-h1 {
    @include font(28px, 500);
  }

  &-h2 {
    @include font(24px, 500);
  }

  &-h3 {
    @include font(20px, 500);
  }

  &-h4 {
    @include font(18px, 500);
  }

  &-h5 {
    @include font(16px, 500);
  }

  &-h6 {
    @include font(14px, 500);
  }

  &-p {
    @include font(14px);
  }

  &-required {
    &::after {
      margin-left: 2px;
      color: var(--error);
      content: '*';
    }
  }
}
</style>
