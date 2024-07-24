import { Router } from "express";

import { eventValidation } from "../../validations/eventValidation";
import { eventController } from "../../controllers/eventController";

const event = (router: Router): void => {
  router.post(
    "/event/create",
    eventValidation.validateCreate,
    eventController.create
  );
  router.post(
    "/event/updateById",
    eventValidation.validateUpdateById,
    eventController.updateById
  );
  router.delete(
    "/event/deleteById/:id",
    eventValidation.validateDeleteById,
    eventController.deleteById
  );
  router.get("/event/get", eventController.getAll);
};

export default event;
