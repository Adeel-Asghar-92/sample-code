import { Schema, model, Document } from "mongoose";
import { IEvent } from "../contracts/event";

interface EventDocument extends IEvent, Document {}

const eventSchema = new Schema<EventDocument>({
  title: { type: String, required: true },
  start: { type: Date, required: true },
  end: { type: Date, required: true },
  price: { type: String, required: true },
  description: { type: String, required: true },
});

export const EventModel = model<EventDocument>("Event", eventSchema);
