import { Router } from "express";
import { AddTaskController } from "../../../controllers/task/addTask";
import { expressRouteAdapter } from "../../../expressRouteAdapter";

export default (router: Router): void => {
  const addTaskController = new AddTaskController();
  router.post("/tasks", expressRouteAdapter(addTaskController));
};
