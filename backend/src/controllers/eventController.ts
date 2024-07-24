import { Request, Response } from "express";
import { StatusCodes, ReasonPhrases } from "http-status-codes";
import { eventService } from "../services/eventServices";
import { IEvent } from "../contracts/event";

export const eventController = {
  create: async (req: Request, res: Response) => {
    try {
      const eventData: Partial<IEvent> = req.body;
      const event = await eventService.create(eventData);
      const events = await eventService.getAll();

      return res.status(StatusCodes.CREATED).json({
        data: events,
        message: ReasonPhrases.CREATED,
        status: StatusCodes.CREATED,
      });
    } catch (error) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: ReasonPhrases.BAD_REQUEST,
        status: StatusCodes.BAD_REQUEST,
      });
    }
  },

  updateById: async (req: Request, res: Response) => {
    try {
      const eventId: string = req.body._id;
      const eventDataToUpdate: Partial<IEvent> = req.body;

      const updatedEvent = await eventService.updateById(
        eventId,
        eventDataToUpdate
      );

      if (!updatedEvent) {
        return res.status(StatusCodes.NOT_FOUND).json({
          message: "Event not found",
          status: StatusCodes.NOT_FOUND,
        });
      }

      return res.status(StatusCodes.OK).json({
        data: updatedEvent,
        message: ReasonPhrases.OK,
        status: StatusCodes.OK,
      });
    } catch (error) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: "An error occurred while updating the event",
        status: StatusCodes.INTERNAL_SERVER_ERROR,
      });
    }
  },

  getAll: async (req: Request, res: Response) => {
    try {
      const events = await eventService.getAll();

      return res.status(StatusCodes.OK).json({
        data: events,
        message: ReasonPhrases.OK,
        status: StatusCodes.OK,
      });
    } catch (error) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: "An error occurred while fetching events",
        status: StatusCodes.INTERNAL_SERVER_ERROR,
      });
    }
  },

  deleteById: async (req: Request, res: Response) => {
    try {
      const eventId: string = req.params.id;
      const deleteResult = await eventService.deleteById(eventId);

      if (!deleteResult) {
        return res.status(StatusCodes.NOT_FOUND).json({
          message: "Event not found",
          status: StatusCodes.NOT_FOUND,
        });
      }

      return res.status(StatusCodes.OK).json({
        message: "Event deleted successfully",
        status: StatusCodes.OK,
      });
    } catch (error) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: "An error occurred while deleting the event",
        status: StatusCodes.INTERNAL_SERVER_ERROR,
      });
    }
  },
};
