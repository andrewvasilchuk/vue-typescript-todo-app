<template>
  <modal-content class="confirm-modal">
    <modal-header
      title="Confirm your action"
      @close="rejectHandler"
    ></modal-header>
    <modal-body>
      <base-alert v-if="text">{{ text }}</base-alert>
    </modal-body>
    <modal-footer>
      <base-button
        theme="danger"
        type="button"
        class="confirm-modal__button"
        @click="rejectHandler"
        >Reject</base-button
      >
      <base-button
        theme="success"
        type="button"
        class="confirm-modal__button"
        @click="successHandler"
        >Confirm</base-button
      >
    </modal-footer>
  </modal-content>
</template>

<script lang="ts">
import Vue from 'vue'
import ModalContent from '@/components/modals/partial/ModalContent.vue'
import ModalHeader from '@/components/modals/partial/ModalHeader.vue'
import ModalBody from '@/components/modals/partial/ModalBody.vue'
import ModalFooter from '@/components/modals/partial/ModalFooter.vue'

export default Vue.extend({
  name: 'ConfirmModal',
  props: {
    text: {
      type: String,
    },
  },
  components: {
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
  },
  methods: {
    successHandler() {
      this.$emit('success')
      this.$emit('close')
    },
    rejectHandler() {
      this.$emit('reject')
      this.$emit('close')
    },
  },
})
</script>

<style lang="scss">
.confirm-modal {
  &__button + &__button {
    margin-left: $default-spacing;
  }
}
</style>
