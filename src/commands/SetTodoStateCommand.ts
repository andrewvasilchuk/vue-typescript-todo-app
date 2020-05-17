import { IUnexecutableCommand } from '@/interfaces/IUnexecutableCommand'
import { Note, Todo } from '@/types'

export class SetTodoStateCommand implements IUnexecutableCommand {
  private readonly _todo: Todo

  constructor(
    private readonly _note: Note,
    private readonly _id: string,
    private readonly _value: boolean
  ) {
    const todo = this._note.tasks.find(todo => todo.id === this._id)
    if (todo !== undefined) {
      this._todo = todo
    } else {
      throw new Error(`There is no Todo with ${this._id} id`)
    }
  }

  execute() {
    this._todo.completed = this._value
  }

  unexecute() {
    this._todo.completed = !this._value
  }
}
