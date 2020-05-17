import { IUnexecutableCommand } from '@/interfaces/IUnexecutableCommand'
import { Note } from '@/types'

export class ChangeNoteNameCommand implements IUnexecutableCommand {
  private readonly _previousName: string

  constructor(private readonly _note: Note, private readonly _name: string) {
    this._previousName = this._note.name
  }

  execute() {
    this._note.name = this._name
  }

  unexecute() {
    this._note.name = this._previousName
  }
}
