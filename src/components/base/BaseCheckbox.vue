<template>
  <div class="checkbox">
    <label class="checkbox__inner">
      <span class="checkbox__text sr-only"><slot></slot></span>
      <input v-model="local" type="checkbox" class="checkbox__input" />
      <span class="checkbox__imitator">
        <svg-icon v-if="local" name="tick" class="checkbox__tick"></svg-icon>
      </span>
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'BaseCheckbox',
  props: {
    value: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    local: {
      get(): boolean {
        return this.value
      },
      set(value: boolean) {
        this.$emit('input', value)
      },
    },
  },
})
</script>

<style lang="scss">
.checkbox {
  $block: &;

  &__inner {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  &__input {
    position: absolute;
    z-index: -1;
    opacity: 0;

    &:focus {
      + #{$block}__imitator {
        @include focus-shadow();
      }
    }

    &:checked {
      + #{$block}__imitator {
        border-color: $color-primary;
        background-color: $color-primary;
      }
    }
  }

  &__imitator {
    @include box(20px);
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid $color-primary;
    border-radius: 2px;
    flex-shrink: 0;
    order: -1;
  }

  &__tick {
    @include box(12px);
    color: #fff;
  }
}
</style>
