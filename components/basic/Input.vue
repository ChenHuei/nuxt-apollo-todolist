<template>
  <label
    class="input"
    :for="value"
    :data-is-error="isError"
    :data-is-disabled="isDisabled"
  >
    <span class="input__prefix">
      <slot name="prefix"></slot>
    </span>
    <input
      v-model="inputValue"
      class="input__inner"
      :disabled="isDisabled"
      v-bind="$attrs"
      @keyup.enter="$emit('enter')"
    />
    <span class="input__suffix">
      <slot name="suffix"></slot>
    </span>
  </label>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  inheritAttrs: false,
})
export default class BasicInput extends Vue {
  @Prop()
  value: string | number | undefined

  @Prop()
  isError: boolean | undefined

  @Prop()
  isDisabled: boolean | undefined

  get inputValue(): string | number | undefined {
    return this.value
  }

  set inputValue(value) {
    this.$emit('input', value)
  }
}
</script>

<style lang="scss" scoped>
.input {
  @include size(100%, 40px);
  @include display-flex();

  padding: 16px 12px;
  border-radius: 4px;
  border: 1px solid var(--grey);
  font-size: rem(14px);
  background-color: var(--white);
  cursor: pointer;
  transition: 0.5s;

  &__inner {
    flex: 1;
    border: none;
    outline: none;
    color: var(--black);
    background-color: transparent;

    &::placeholder {
      color: var(--grey);
    }
  }

  &[data-is-error='true'] {
    border-color: var(--error);
  }

  &[data-is-disabled='true'] {
    color: var(--grey-dark);
    background-color: var(--grey-light);
    cursor: not-allowed;

    > .input__inner {
      color: var(--gret-dark);
      font-style: italic;
    }
  }

  &:not([data-is-disalbed='true']):not([data-is-error='true']) {
    &:hover,
    &:focus-within {
      border-color: var(--primary);
    }
  }
}
</style>
