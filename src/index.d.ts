import Vue, { Component } from 'vue'
import { Store } from 'vuex'
import { Note } from '@/types'
import { State } from './store/state'

declare module 'vue/types/vue' {
  interface Vue {
    $store: Omit<Store<State>, 'getters'> & {
      getters: { getNoteById(id: string): Note | undefined }
    }
    $modal: {
      show(
        component: Component,
        options?: {
          props?: Record<string, any>
          listeners: Record<string, Function | Function[]>
        }
      ): void
      bus: Vue
    }
    $confirm: (text?: string) => Promise<any>
  }
}
