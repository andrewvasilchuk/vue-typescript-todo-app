import { IUnexecutableCommand } from '@/interfaces/IUnexecutableCommand'
import { Note, Todo } from '@/types'

export class SetTodoTitleCommand implements IUnexecutableCommand {
  private readonly _todo: Todo
  private readonly _previousTitle: string

  constructor(
    private readonly _note: Note,
    private readonly _id: string,
    private readonly _value: string
  ) {
    const todo = this._note.tasks.find(todo => todo.id === this._id)
    if (todo !== undefined) {
      this._todo = todo
      this._previousTitle = todo.title
    } else {
      throw new Error(`There is no Todo with ${this._id} id`)
    }
  }

  execute() {
    this._todo.title = this._value
  }

  unexecute() {
    this._todo.title = this._previousTitle
  }
}
