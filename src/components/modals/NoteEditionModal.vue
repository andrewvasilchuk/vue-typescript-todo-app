<template>
  <modal-content>
    <modal-header title="Edit note" @close="$emit('close')"></modal-header>
    <form @submit.prevent="submitHandler">
      <modal-body>
        <BaseInput
          v-model.trim="value"
          :id="inputId"
          label="Name"
          placeholder="Lorem ipsum dolor sit amet"
        ></BaseInput>
      </modal-body>
      <modal-footer>
        <base-button theme="primary" class="xs-lg:w-full">Submit</base-button>
      </modal-footer>
    </form>
  </modal-content>
</template>

<script lang="ts">
import Vue from 'vue'
import { ModalMixin } from '@/mixins/modal'
import ModalContent from '@/components/modals/partial/ModalContent.vue'
import ModalHeader from '@/components/modals/partial/ModalHeader.vue'
import ModalBody from '@/components/modals/partial/ModalBody.vue'
import ModalFooter from '@/components/modals/partial/ModalFooter.vue'

export default Vue.extend({
  name: 'NoteEditionModal',
  mixins: [ModalMixin],
  components: {
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      value: this.name,
      inputId: 'note-name-input',
    }
  },
  methods: {
    submitHandler() {
      const { value: name } = this
      // Simple validation, would use VeeValidate for real project
      if (name !== '') {
        this.$emit('edit', { name })
        this.$emit('close')
      }
    },
  },
})
</script>
