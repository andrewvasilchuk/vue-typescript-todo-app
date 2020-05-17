import { Note } from '@/types'

export const state: State = {
  notes: [],
}

export type State = {
  notes: Note[]
}
