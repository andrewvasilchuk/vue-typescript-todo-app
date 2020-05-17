import { Note } from '@/types'
import { ChangeNoteNameCommand } from '@/commands/ChangeNoteNameCommand'
import { AddTodoCommand } from '@/commands/AddTodoCommand'
import { SetTodoTitleCommand } from '@/commands/SetTodoTitleCommand'
import { SetTodoStateCommand } from '@/commands/SetTodoStateCommand'
import { DeleteTodoCommand } from '@/commands/DeleteTodoCommand'
import { CommandManager } from './CommandManager'

export class NoteManager {
  private _commandManager: CommandManager

  constructor(public note: Note) {
    this._commandManager = new CommandManager()
  }

  setName(value: string) {
    this._commandManager.add(new ChangeNoteNameCommand(this.note, value))
  }

  addTodo(title: string) {
    this._commandManager.add(new AddTodoCommand(this.note, title))
  }

  setTodoTitle(id: string, value: string) {
    this._commandManager.add(new SetTodoTitleCommand(this.note, id, value))
  }

  setTodoState(id: string, value: boolean) {
    this._commandManager.add(new SetTodoStateCommand(this.note, id, value))
  }

  deleteTodo(id: string) {
    this._commandManager.add(new DeleteTodoCommand(this.note, id))
  }

  execute() {
    this._commandManager.execute()
  }

  unexecute() {
    this._commandManager.unexecute()
  }

  canExecute() {
    return this._commandManager.canExecute()
  }

  canUnexecute() {
    return this._commandManager.canUnexecute()
  }

  canSave() {
    return this._commandManager.getLength() > 0
  }
}
