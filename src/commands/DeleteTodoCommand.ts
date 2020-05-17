import { IUnexecutableCommand } from '@/interfaces/IUnexecutableCommand'
import { Note, Todo } from '@/types'

export class DeleteTodoCommand implements IUnexecutableCommand {
  private readonly _todo: Todo
  private readonly _index: number

  constructor(private readonly _note: Note, private readonly _id: string) {
    const todo = this._note.tasks.find(todo => todo.id === this._id)
    if (todo !== undefined) {
      this._todo = todo
      this._index = this._note.tasks.indexOf(this._todo)
    } else {
      throw new Error(`There is no Todo with ${this._id} id`)
    }
  }

  execute() {
    this._note.tasks = this._note.tasks.filter(task => task !== this._todo)
  }

  unexecute() {
    this._note.tasks.splice(this._index, 0, this._todo)
  }
}
