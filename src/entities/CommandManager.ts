import { IUnexecutableCommand } from '@/interfaces/IUnexecutableCommand'

export class CommandManager {
  private _history: Array<IUnexecutableCommand>
  private _index: number

  constructor() {
    this._index = 0
    this._history = []
  }

  add(command: IUnexecutableCommand) {
    command.execute()
    this._history.splice(
      this._index,
      this._history.length - this._index,
      command
    )
    this._index++
  }

  execute() {
    this._history[this._index].execute()
    this._index++
  }

  unexecute() {
    this._index--
    this._history[this._index].unexecute()
  }

  canUnexecute() {
    return this._index > 0
  }

  canExecute() {
    return this._index < this._history.length
  }

  getLength() {
    return this._history.length
  }
}
