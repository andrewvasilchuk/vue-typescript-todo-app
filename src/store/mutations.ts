import { MutationTree } from 'vuex'
import * as jsonpatch from 'fast-json-patch'
import { State } from './state'
import { MutationTypes } from './mutation-types'
import { Note } from '@/entities/Note'
import { Todo } from '@/entities/Todo'

export const mutations: MutationTree<State> = {
  [MutationTypes.ADD_NOTE](state, { name }: { name: string }) {
    state.notes.push(new Note(name))
  },
  [MutationTypes.PATCH_NOTE](state, note: Note) {
    const value = state.notes.find(n => n.id === note.id)
    if (value !== undefined) {
      const diff = jsonpatch.compare(value, note)
      jsonpatch.applyPatch(value, diff)
    }
  },
  [MutationTypes.DELETE_NOTE](state, id: string) {
    state.notes = state.notes.filter(note => note.id !== id)
  },
}
