import { IUnexecutableCommand } from '@/interfaces/IUnexecutableCommand'
import { Note } from '@/types'
import { Todo } from '@/entities/Todo'

export class AddTodoCommand implements IUnexecutableCommand {
  private readonly _todo: Todo

  constructor(private readonly _note: Note, private readonly _title: string) {
    this._todo = new Todo(_title)
  }

  execute() {
    this._note.tasks.push(this._todo)
  }

  unexecute() {
    this._note.tasks = this._note.tasks.filter(task => task !== this._todo)
  }
}
