import { INoteCommand } from './ICommand'

export interface IUnexecutableCommand extends INoteCommand {
  unexecute(): void
}
