import { Plugin } from 'vuex'
import { Note } from '@/types'

const KEY = 'notes'

export const PreserverPlugin: Plugin<{ notes: Note[] }> = store => {
  if ('localStorage' in window) {
    try {
      const notes = localStorage.getItem(KEY)

      if (notes !== null) {
        try {
          const deserialisedNotes = JSON.parse(notes)
          store.state.notes = deserialisedNotes
        } catch (e) {
          console.error(e)
        }
      }
    } catch (e) {
      console.error(e)
    }

    store.subscribe((mutation, state) => {
      try {
        const serializedState = JSON.stringify(state.notes)
        try {
          localStorage.setItem(KEY, serializedState)
        } catch (e) {
          console.error(e)
        }
      } catch (e) {
        console.error(e)
      }
    })
  }
}
