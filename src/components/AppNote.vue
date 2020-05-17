<template>
  <article class="note">
    <header class="note__header">
      <h2 class="note__title">{{ note.name }}</h2>
      <div class="note__actions">
        <base-button
          theme="primary"
          plain
          circle
          tag="router-link"
          :to="url"
          class="note__action"
          aria-label="Edit"
          ><SvgIcon name="edit"></SvgIcon
        ></base-button>
        <base-button
          theme="danger"
          plain
          circle
          class="note__action"
          type="button"
          aria-label="delete"
          @click="$emit('delete', note.id)"
          ><SvgIcon name="trash"></SvgIcon
        ></base-button>
      </div>
    </header>
    <div class="note__body">
      <SimpleTodoList
        v-if="note.tasks.length > 0"
        :items="note.tasks"
        :count="4"
      ></SimpleTodoList>
      <BaseAlert v-else
        >The note has not got any tasks. You can add several tasks by clicking
        the edit button above.</BaseAlert
      >
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { Note } from '@/types'
import SimpleTodoList from '@/components/SimpleTodoList.vue'

export default Vue.extend({
  name: 'AppNote',
  components: {
    SimpleTodoList,
  },
  props: {
    note: {
      type: Object as () => Note,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
})
</script>

<style lang="scss">
.note {
  &__header {
    display: flex;
    align-items: center;
    padding: $default-spacing / 2 $default-spacing;
    border-bottom: 1px solid #ebeef5;
  }

  &__actions {
    display: flex;
    margin-left: auto;
    flex-shrink: 0;
  }

  &__action + &__action {
    margin-left: $default-spacing / 2;
  }

  &__title {
    margin: {
      top: 0;
      bottom: 0;
    }
    font: {
      size: 16px;
      weight: 400;
    }
    color: #333;
  }

  &__body {
    padding: $default-spacing;
  }
}
</style>
