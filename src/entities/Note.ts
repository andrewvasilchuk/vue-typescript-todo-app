import { v4 } from 'uuid'
import { Todo } from './Todo'

export class Note {
  readonly id: string
  name: string
  tasks: Todo[]

  constructor(name: string) {
    this.id = v4()
    this.name = name
    this.tasks = []
  }
}
