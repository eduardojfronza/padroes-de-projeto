import { DbDeleteTask } from "../../dataSources/db/dbDeleteTask";
import { LogErrorMongoRepository } from "../../dataSources/db/repository/logErrorMongoRepository";
import { TaskMongoRepository } from "../../dataSources/db/repository/taskMongoRepository";
import { DeleteTaskController } from "../controllers/task/deleteTask";
import { LogErrorControllerDecorator } from "../decorators/logErrorControllerDecorator";
import { Controller } from "../interfaces/controller";
import { RequiredFieldsValidation } from "../validations/requiredFieldsValidation";

export const deleteTaskControllerFactory = (): Controller => {
  const taskMongoRepository = new TaskMongoRepository();
  const dbDeleteTask = new DbDeleteTask(taskMongoRepository);
  const taskController = new DeleteTaskController(
    dbDeleteTask,
    new RequiredFieldsValidation("id")
  );

  const logMongoRepository = new LogErrorMongoRepository();
  return new LogErrorControllerDecorator(taskController, logMongoRepository);
};
