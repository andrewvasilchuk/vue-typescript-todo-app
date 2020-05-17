<template>
  <div class="v-modal" role="dialog" aria-modal="true" @keyup.esc="close">
    <div class="v-modal__backdrop" @click="close">
      <slot name="backdrop"></slot>
    </div>
    <div class="v-modal__inner">
      <div class="v-modal__holder">
        <div class="v-modal__content">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ModalComponent',
  methods: {
    close() {
      this.$emit('close')
    },
  },
})
</script>
