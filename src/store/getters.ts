import { GetterTree, Store } from 'vuex'
import { State } from './state'

export const getters: GetterTree<State, State> = {
  getNoteById: state => (id: string) => {
    return state.notes.find(note => note.id == id)
  },
}
