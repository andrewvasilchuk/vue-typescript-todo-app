<template>
  <modal-content>
    <modal-header title="Create task" @close="$emit('close')"></modal-header>
    <form @submit.prevent="submitHandler">
      <modal-body>
        <BaseInput
          v-model.trim="title"
          :id="inputId"
          label="Title"
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
  name: 'TodoCreationModal',
  mixins: [ModalMixin],
  components: {
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
  },
  data() {
    return {
      title: '',
      inputId: 'todo-title-input',
    }
  },
  methods: {
    submitHandler() {
      const { title } = this
      // Simple validation, would use VeeValidate for real project
      if (title !== '') {
        this.$emit('create', { title })
        this.$emit('close')
      }
    },
  },
})
</script>
