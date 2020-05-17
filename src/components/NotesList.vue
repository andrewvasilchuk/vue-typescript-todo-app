<script lang="ts">
import Vue from 'vue'
import { Note } from '@/types'
import BaseCard from '@/components/base/BaseCard.vue'
import AppNote from '@/components/AppNote.vue'
import { mergeData } from 'vue-functional-data-merge'

export default Vue.extend({
  name: 'NotesList',
  functional: true,
  props: {
    notes: {
      type: Array as () => Note[],
      required: true,
    },
  },
  render(h, { props, data, listeners }) {
    return h(
      'ul',
      mergeData(data, { staticClass: 'notes-list' }),
      props.notes.map(note =>
        h('li', { staticClass: 'notes-list__item' }, [
          h(BaseCard, undefined, [
            h(AppNote, {
              props: { note, url: `/note/${note.id}` },
              on: { delete: listeners.delete },
              staticClass: 'notes-list__note',
            }),
          ]),
        ])
      )
    )
  },
})
</script>

<style lang="scss">
.notes-list {
  @include reset-list();
  @include row();
  display: flex;
  flex-wrap: wrap;

  &__item {
    @include col();

    @include from-xs-to-lg() {
      width: 100%;
    }

    @include lg() {
      width: 33.33%;

      &:nth-child(n + 4) {
        margin-top: 32px;
      }
    }
  }

  &__item + &__item {
    @include from-xs-to-lg() {
      margin-top: 32px;
    }
  }
}
</style>
