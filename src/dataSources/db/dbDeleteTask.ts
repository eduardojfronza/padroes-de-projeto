import { DeleteTask, DeleteTaskModel } from "../../usecases/deleteTask";
import { DeleteTaskRepository } from "../../usecases/repository/deleteTaskRepository";

export class DbDeleteTask implements DeleteTask {
  constructor(private readonly deleteTaskRepository: DeleteTaskRepository) {}

  delete(task: DeleteTaskModel): Promise<void | Error> {
    return this.deleteTaskRepository.delete(task);
  }
}
