import { NextFunction, Request, Response } from "express";
import { StatusCodes, ReasonPhrases } from "http-status-codes";
import winston from "winston";
import { ERROR_MESSAGES } from "../constants/errorMsg";
import { validateFields } from "../utils/validation";

// validation for events
const validateEvent = (req: Request) => {
  const { title, start, end, description, price } = req.body;
  const requiredFields = { title, start, end, description, price };
  console.log(typeof start);

  const fieldTypes = {
    title: "string",
    start: "string",
    end: "string",
    price: "string",
    description: "string",
  };

  return validateFields(requiredFields, fieldTypes);
};

export const eventValidation = {
  validateCreate: (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!validateEvent(req)) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          message: ERROR_MESSAGES.MISSING_FIELDS,
          status: StatusCodes.BAD_REQUEST,
        });
      }

      return next();
    } catch (error) {
      winston.error(error);
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: ReasonPhrases.BAD_REQUEST,
        status: StatusCodes.BAD_REQUEST,
      });
    }
  },

  validateUpdateById: (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.body._id) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          message: "Event ID is required",
          status: StatusCodes.BAD_REQUEST,
        });
      }

      if (!validateEvent(req)) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          message: ERROR_MESSAGES.MISSING_FIELDS,
          status: StatusCodes.BAD_REQUEST,
        });
      }

      return next();
    } catch (error) {
      winston.error(error);
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: ReasonPhrases.BAD_REQUEST,
        status: StatusCodes.BAD_REQUEST,
      });
    }
  },
  validateDeleteById: (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log("req.params.id", req.params.id);

      if (!req.params.id) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          message: "Event ID is required",
          status: StatusCodes.BAD_REQUEST,
        });
      }

      return next();
    } catch (error) {
      // Handle  errors that occur during validation
      winston.error(error);
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: ReasonPhrases.BAD_REQUEST,
        status: StatusCodes.BAD_REQUEST,
      });
    }
  },
};
