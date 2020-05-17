<template>
  <div class="input">
    <label :for="id" class="input__label sr-only">{{ label }}:</label>
    <input
      v-bind="$attrs"
      :value="value"
      :id="id"
      type="text"
      class="input__field"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mergeData } from 'vue-functional-data-merge'

export default Vue.extend({
  name: 'BaseInput',
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
})
</script>

<style lang="scss">
.input {
  &__field {
    @include box(100%, 40px);
    border: 1px solid #e0e0e0;
    border-radius: $default-border-radius;
    background-color: #fff;
    padding: {
      right: 16px;
      left: 16px;
    }

    &:focus {
      @include focus-shadow();
    }
  }
}
</style>
