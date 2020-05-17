<template>
  <modal-content>
    <modal-header title="Edit todo" @close="$emit('close')"></modal-header>
    <form @submit.prevent="submitHandler">
      <modal-body>
        <BaseInput
          v-model.trim="value"
          :id="inputId"
          label="title"
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
  name: 'TodoEditionModal',
  mixins: [ModalMixin],
  components: {
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      value: this.title,
      inputId: 'todo-title-input',
    }
  },
  methods: {
    submitHandler() {
      const { value: title } = this
      // Simple validation, would use VeeValidate for real project
      if (title !== '') {
        this.$emit('edit', { title })
        this.$emit('close')
      }
    },
  },
})
</script>
