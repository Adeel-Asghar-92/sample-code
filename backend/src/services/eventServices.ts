import { IEvent } from "../contracts/event";
import { IRepository, createRepository } from "../generic";
import { EventModel } from "../models";
import { createService } from "./services";
// import { EventModel, IEvent } from "../models/eventModel";

const eventRepository: IRepository<IEvent> = createRepository(EventModel);

export const eventService = createService(eventRepository);
